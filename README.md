# SLM Project Management API

REST API for the SLM Project Management System. The service centralises authentication, user administration, project lifecycle tracking, and project phase management for delivery teams.

## Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture Overview](#architecture-overview)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Database & Prisma](#database--prisma)
- [Authentication & Authorization](#authentication--authorization)
- [API Reference](#api-reference)
- [Seed Data & Sample Credentials](#seed-data--sample-credentials)
- [Testing & Tooling](#testing--tooling)
- [Deployment Notes](#deployment-notes)

## Features
- Secure JWT authentication with role-aware middleware (admin, project manager, developer).
- Admin-only user CRUD plus self-service password changes for all roles.
- Project owner registry with contact metadata to connect stakeholders and delivery teams.
- Project tracking with status, progress metrics, categorisation, and per-phase timelines.
- Project phase management with validation and optional filtering by project.
- Prisma-backed PostgreSQL persistence with seeds for local development data.

## Tech Stack
- Node.js 20, TypeScript, Express 5
- Prisma ORM targeting PostgreSQL
- JSON Web Tokens (jsonwebtoken) and bcrypt password hashing
- zod schema validation
- Vitest for unit testing

## Architecture Overview
```
src/
  app.ts            Express app wiring, middleware registration, route mounting
  server.ts         Bootstrap logic and environment bootstrap
  controllers/      HTTP controllers with validation and response handling
  services/         Prisma-backed domain services
  routes/           Route definitions and role gates per resource
  middleware/       Auth and role enforcement layers
  db/prisma.ts      Prisma client singleton
  utils/            Shared utilities (JWT, env loader, etc.)
prisma/
  schema.prisma     Data model definitions and enums
  migrations/       Generated SQL migrations (if present)
  seed.ts           Dev database seeding entrypoint
  seeders/          Resource-specific seeding routines
tests/              Vitest specs and helpers
dist/               Compiled JavaScript after `npm run build`
```

`src/app.ts` wires shared middleware (JSON parsing, URL encoding, CORS) before mounting route modules. Authentication is enforced globally via `requireAuth` after the public `/health` and `/auth` routes. Additional role restrictions are applied per resource with `requireRole`.

## Getting Started

### Prerequisites
- Node.js 20.x (includes npm 10)
- PostgreSQL 14+ running locally or accessible via connection string

### Installation
```bash
git clone https://github.com/mauladhanifadhilsalam/back-end-SLM-task-management.git
cd back-end-SLM-task-management
npm install
```

### Configure Environment
```bash
cp .env.example .env
# Update DATABASE_URL, JWT_SECRET, and JWT_EXPIRES_IN as needed
```

### Database
```bash
npx prisma migrate dev       # apply migrations and generate Prisma client
npx prisma db seed           # load baseline data
```

### Run the API
```bash
npm run dev                  # run with ts-node-dev and hot reload
```
The server boots on `http://localhost:3000` unless `PORT` is set.

### Production Build
```bash
npm run build                # emit JS to dist/
npm start                    # run compiled server (expects prior build)
```

## Environment Variables
| Key              | Description                                                   | Default from `.env.example`                          |
| ---------------- | ------------------------------------------------------------- | ---------------------------------------------------- |
| `DATABASE_URL`   | PostgreSQL connection string used by Prisma                  | `postgresql://postgres:password@localhost:5432/...`  |
| `JWT_SECRET`     | Symmetric signing key for JWT tokens                         | `secret`                                             |
| `JWT_EXPIRES_IN` | Token lifetime (supports durations like `1h` or seconds)     | `1h`                                                 |
| `PORT`           | Express listener port (optional)                             | `3000` (set in code if env var missing)              |

## Database & Prisma
Primary models used by the API today:

- **User**: credentials, role (`ADMIN`, `PROJECT_MANAGER`, `DEVELOPER`), activation status, and audit timestamps.
- **ProjectOwner**: client-side stakeholders with company, phone, and address metadata.
- **Project**: project metadata (categories stored as JSON array), schedule, status (`NOT_STARTED`, `IN_PROGRESS`, `ON_HOLD`, `DONE`), completion percentage, notes, and relations to an owner and phases.
- **ProjectPhase**: timeline segments tied to a project, enforcing unique date windows per project.

Additional models (tickets, assignments, notifications, activity logs) already exist in `schema.prisma` for future feature work.

Prisma client code is generated into `src/generated/prisma`. Avoid editing this directory manually.

## Authentication & Authorization
- **Login**: `POST /auth/login` authenticates with email + password. Successful responses return a Bearer token (`token_type: "Bearer"`) and `expires_in` seconds.
- **Token usage**: send `Authorization: Bearer <token>` on protected endpoints. Tokens embed `sub` (user id) and `role`.
- **Middleware**:
  - `requireAuth` validates the token and attaches `req.user`.
  - `requireRole` restricts routes to one or more roles.

| Resource | Role Access |
| -------- | ----------- |
| `/health`, `/auth/login` | Public |
| `/` (welcome) | Any authenticated user |
| `/users/change-password` | Any authenticated user |
| `/users` CRUD | `ADMIN` |
| `/project-owners` CRUD | `ADMIN`, `PROJECT_MANAGER` |
| `/projects` CRUD | `ADMIN`, `PROJECT_MANAGER` |
| `/project-phases` CRUD | `ADMIN` |

Unauthorized requests return `401` (missing/invalid token) or `403` (insufficient role).

## API Reference
Base URL: `http://localhost:3000`

### Health
```
GET /health
```
Returns service status and timestamp. No authentication required.

### Authentication
```
POST /auth/login
Content-Type: application/json
```
Request body:
```json
{
  "email": "sauron@gmail.com",
  "password": "password123"
}
```
Success (`200 OK`):
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "Bearer",
  "expires_in": "1h",
  "role": "ADMIN"
}
```
Invalid credentials return `401`.

### Users
- `GET /users` — list project managers and developers (admin only).
- `GET /users/:id` — fetch by id (admin only).
- `POST /users` — create user (admin only).
- `PATCH /users/:id` — update fields (admin only).
- `DELETE /users/:id` — remove user (admin only).
- `POST /users/change-password` — change password using current credentials (any authenticated role).

Create/update payload:
```json
{
  "fullName": "Leia Organa",
  "email": "leia@resistance.io",
  "role": "PROJECT_MANAGER",
  "password": "newpass123",
  "isActive": true
}
```
Validation highlights:

- `email` must be unique; duplicates return `409`.
- `password` minimum length 8 and stored hashed via bcrypt.
- `change-password` rejects wrong current password (`401`) or reuse of the same password (`400`).

### Project Owners
All operations require `ADMIN` or `PROJECT_MANAGER`.

- `GET /project-owners`
- `GET /project-owners/:id`
- `POST /project-owners`
- `PATCH /project-owners/:id`
- `DELETE /project-owners/:id`

Sample payload:
```json
{
  "name": "Dana Barrett",
  "company": "Spengler Consulting",
  "email": "dana@example.com",
  "phone": "+12125550100",
  "address": "55 Central Park West, New York"
}
```
Emails are unique; duplicates return `409`.

### Projects
Require `ADMIN` or `PROJECT_MANAGER`.

- `GET /projects` — returns projects with owner and phases included (newest first).
- `GET /projects/:id`
- `POST /projects`
- `PATCH /projects/:id`
- `DELETE /projects/:id`

Create payload:
```json
{
  "name": "Project Aegis",
  "categories": ["Security", "Platform"],
  "ownerId": 1,
  "startDate": "2025-02-01",
  "endDate": "2025-05-31",
  "status": "IN_PROGRESS",
  "completion": 35.5,
  "notes": "Stakeholder review scheduled for March.",
  "phases": [
    { "name": "Discovery", "startDate": "2025-02-01", "endDate": "2025-02-14" },
    { "name": "Build", "startDate": "2025-02-17", "endDate": "2025-04-11" }
  ]
}
```
Rules:

- `endDate` must be on or after `startDate`.
- `categories` must contain at least one value.
- `ownerId` must reference an existing project owner (`404` if missing).
- `completion` accepts values between `0` and `100`.

`PATCH` accepts partial updates; omitted fields remain unchanged.

### Project Phases
Require `ADMIN`.

- `GET /project-phases` — optional `projectId` query filter (example: `/project-phases?projectId=2`).
- `GET /project-phases/:id`
- `POST /project-phases`
- `PATCH /project-phases/:id`
- `DELETE /project-phases/:id`

Payload:
```json
{
  "name": "Stabilization",
  "projectId": 3,
  "startDate": "2025-06-02",
  "endDate": "2025-06-27"
}
```
Validation mirrors project rules: `endDate` follows `startDate`, and `projectId` must exist.

### Root Welcome
```
GET /
```
Returns `{ "message": "Welcome to SLM Project Management API" }`. Requires a valid token but no specific role.

## Seed Data & Sample Credentials
`npx prisma db seed` creates:

- Users:
  - `sauron@gmail.com` / `password123` (`ADMIN`)
  - `skywalker@gmail.com` / `password123` (`PROJECT_MANAGER`)
  - `gandalf@yahoo.com` / `password123` (`DEVELOPER`)
- Project owners and projects with multi-phase schedules for local exploration.

Use these accounts to test authorization flows. Replace all secrets before deploying.

## Testing & Tooling
- `npm test` — run Vitest suites (extend with controller/service coverage).
- `npx prisma format` — format the Prisma schema.
- Recommended pre-commit checklist:
  1. `npm run build`
  2. `npm run test`

## Deployment Notes
- Provide `DATABASE_URL`, `JWT_SECRET`, and `JWT_EXPIRES_IN` in the hosting environment.
- Run `npm run build` during the deployment pipeline, then launch with `npm start`.
- Regenerate the Prisma client (`npx prisma generate`) whenever the schema changes.
- Rotate JWT secrets when compromised and invalidate tokens where necessary.
