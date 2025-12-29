# SLM Project Management API

REST API for the SLM Project Management System. The service centralises authentication, user administration, project lifecycle tracking, task tickets, notifications, and project assignments for delivery teams.

## Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture Overview](#architecture-overview)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Database & Prisma](#database--prisma)
- [Authentication & Authorization](#authentication--authorization)
- [API Surface](#api-surface)
- [Docs & Clients](#docs--clients)
- [Seed Data & Sample Credentials](#seed-data--sample-credentials)
- [Testing & Tooling](#testing--tooling)
- [Deployment Notes](#deployment-notes)

## Features

- Secure JWT authentication with role-aware middleware (admin, project manager, developer).
- User management with admin CRUD, PM visibility, and self-service password changes.
- Project owner registry plus project lifecycle tracking with phases, categories, and completion recalculation driven by task tickets.
- Project assignments to map users into delivery roles per project.
- Ticketing with assignees, permissions, comments, attachments (file uploads), and status transitions.
- Notification center with in-app state, email dispatch via BullMQ/Redis/Nodemailer, and resend support.
- Activity logging for auditable actions across resources.
- Developer + project manager dashboards and exportable reports.
- Real-time ticket events over Socket.IO.
- Swagger UI + OpenAPI spec generation for API documentation.

## Tech Stack

- Node.js 20
- TypeScript
- Express 5
- Prisma ORM
- PostgreSQL
- JWT (JSON Web Token)
- Zod schema validation
- Redis
- BullMQ for background jobs
- Nodemailer for email delivery
- Multer for file uploads
- Socket.IO
- Swagger UI + OpenAPI generator
- Prometheus client metrics
- Vitest for unit testing

## Architecture Overview

```
src/
  app.ts            Express app wiring, middleware registration, route mounting
  server.ts         HTTP + Socket.IO bootstrap
  worker.ts         BullMQ workers entrypoint
  controllers/      HTTP controllers with validation and response handling
  services/         Prisma-backed domain services and business logic
  routes/           Route definitions and role gates per resource
  middleware/       Auth, role enforcement, uploads
  db/prisma.ts      Prisma client singleton
  config/           Env loader, Redis connection
  schemas/          Zod schemas and OpenAPI metadata
  openapi/          OpenAPI document builder
  scripts/          Utility scripts
  queues/           BullMQ queue definitions
  metrics/          Prometheus middleware and collectors
  reports/          Export/report builders
  websocket/        Socket.IO server + ticket events
  workers/          Queue workers (email, activity logs)
  utils/            Shared utilities (JWT, env, permissions, transporter)
prisma/
  schema.prisma     Data model definitions, enums, materialized view mapping
  migrations/       Generated SQL migrations (if present)
  seed.ts           Dev database seeding entrypoint
  seeders/          Resource-specific seeding routines
tests/              Vitest specs and helpers
uploads/            Saved attachments (created at runtime)
dist/               Compiled JavaScript after `npm run build`
.husky/             Git hooks (pre-commit, etc.)
```

`src/app.ts` mounts public `/health` and `/auth` routes, then enforces authentication globally. Resource routers add per-role checks where required.

## Getting Started

### Prerequisites

- Node.js 20.x (includes npm 10)
- PostgreSQL 14+ running locally or via connection string
- Redis

### Installation

```bash
git clone https://github.com/mauladhanifadhilsalam/back-end-SLM-task-management.git
cd back-end-SLM-task-management
npm install
```

### Configure Environment

```bash
cp .env.example .env
# Update DATABASE_URL, JWT_SECRET, JWT_EXPIRES_IN, email, upload, and Redis settings
```

### Database

```bash
npx prisma migrate dev       # apply migrations and generate Prisma client
npx prisma db seed           # load baseline data (destroys existing data)
```

### Run the API and workers

```bash
npm run dev                  # API with ts-node-dev + hot reload
npm run dev:worker           # background workers (email, activity logs)
```

Server defaults to `http://localhost:3000` unless `PORT` is set.

### Production Build

```bash
npm run build                # emit JS to dist/
npm start                    # run compiled server (expects prior build)
npm start:worker             # run compiled workers
```

## Environment Variables

| Key                         | Description                                              |
| --------------------------- | -------------------------------------------------------- |
| `NODE_ENV`                  | Runtime environment name                                 |
| `PORT`                      | Express listener port (optional)                         |
| `APP_URL`                   | Base URL used in notifications                           |
| `DATABASE_URL`              | PostgreSQL connection string used by Prisma              |
| `JWT_SECRET`                | Symmetric signing key for JWT tokens                     |
| `JWT_EXPIRES_IN`            | Token lifetime (supports durations like `1h` or seconds) |
| `REFRESH_TOKEN_SECRET`      | Symmetric signing key for refresh tokens                 |
| `REFRESH_TOKEN_EXPIRES_IN`  | Refresh token lifetime                                   |
| `REFRESH_TOKEN_COOKIE_NAME` | Cookie name for refresh token                            |
| `EMAIL_HOST`                | SMTP host for outbound notifications                     |
| `EMAIL_PORT`                | SMTP port                                                |
| `EMAIL_USER`                | SMTP username                                            |
| `EMAIL_PASS`                | SMTP password or app password                            |
| `EMAIL_FROM`                | Default sender address                                   |
| `UPLOAD_DIR`                | Directory for uploaded attachments                       |
| `REDIS_HOST`                | Redis hostname                                           |
| `REDIS_PORT`                | Redis port                                               |
| `REDIS_USERNAME`            | Redis username                                           |
| `REDIS_PASSWORD`            | Redis password                                           |
| `REDIS_DB`                  | Redis database index                                     |
| `REDIS_TLS`                 | Enable Redis TLS (`true`/`false`)                        |
| `ALLOWED_ORIGINS`           | CORS allowlist (comma-separated)                         |

## Database & Prisma

Primary models: User, ProjectOwner, Project (categories JSONB, completion), ProjectPhase, ProjectAssignment, Ticket (task/issue), TicketAssignee, Comment, Attachment, Notification, ActivityLog, plus a `DeveloperDashboard` materialized view. Prisma client is generated into `./node_modules/.prisma/client` (do not edit manually).

## Authentication & Authorization

- **Login**: `POST /auth/login` with email + password returns a Bearer token (`token_type: "Bearer"`) and `expires_in`.
- **Refresh**: `POST /auth/refresh` issues a new access token.
- **Logout**: `POST /auth/logout` clears the refresh token cookie.
- **Profile**: `GET /auth/profile` returns the authenticated user.
- **Global**: `/health` and `/auth/login` are public; everything else requires a valid token.

| Resource                                                            | Role Access (as implemented)                                                                               |
| ------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `/` (welcome)                                                       | Any authenticated user                                                                                     |
| `/users/change-password`                                            | Any authenticated user                                                                                     |
| `/users` list                                                       | `ADMIN`, `PROJECT_MANAGER`                                                                                 |
| `/users` CRUD (id routes)                                           | `ADMIN`                                                                                                    |
| `/project-owners` CRUD                                              | `ADMIN`, `PROJECT_MANAGER`                                                                                 |
| `/projects` (all routes)                                            | Any authenticated user (controllers restrict visibility to assigned users unless admin/PM)                 |
| `/project-phases` CRUD                                              | `ADMIN`, `PROJECT_MANAGER`                                                                                 |
| `/project-assignments` CRUD                                         | `ADMIN`, `PROJECT_MANAGER`                                                                                 |
| `/tickets`, `/ticket-assignees`, `/comments`, `/attachments`        | Any authenticated user; controller-level permission helpers enforce project membership and ownership rules |
| `/notifications` list/state                                         | Any authenticated user (admins can see all); create/update/delete/resend are admin-only                    |
| `/activity-logs`                                                    | `ADMIN`                                                                                                    |
| `/dashboard/developer`                                              | `DEVELOPER`                                                                                                |
| `/dashboard/project-manager`, `/dashboard/project-manager/dev-stat` | `PROJECT_MANAGER`                                                                                          |

Unauthorized requests return `401` for missing/invalid tokens or `403` for insufficient role/permissions.

## API Surface

High-level grouping only; see `docs/REFERENCE.md` or the Swagger UI for full request/response details.

| Area                | Base path              | Notes                                    |
| ------------------- | ---------------------- | ---------------------------------------- |
| Health & root       | `/health`, `/`         | Service status and authenticated welcome |
| Auth                | `/auth`                | Login, refresh, logout, profile          |
| Users               | `/users`               | Account management and password change   |
| Project owners      | `/project-owners`      | Owner contacts and company records       |
| Projects            | `/projects`            | Project records, status, and metadata    |
| Project phases      | `/project-phases`      | Timeline phases for projects             |
| Project assignments | `/project-assignments` | Assign people to projects                |
| Tickets             | `/tickets`             | Task and issue tracking                  |
| Ticket assignees    | `/ticket-assignees`    | Manage ticket assignee list              |
| Comments            | `/comments`            | Discussion on tickets                    |
| Attachments         | `/attachments`         | Ticket file uploads and downloads        |
| Team updates        | `/team-updates`        | Team status updates                      |
| Notifications       | `/notifications`       | In-app and email notifications           |
| Activity logs       | `/activity-logs`       | Audit trail entries                      |
| Dashboards          | `/dashboard/*`         | Developer and manager reporting          |
| Metrics             | `/metrics`             | Prometheus-compatible metrics            |

## Docs & Clients

- Endpoint reference: `docs/REFERENCE.md`
- Swagger UI (non-production only): `GET /docs`
- OpenAPI spec: `docs/swagger/SLM-project-management-api.spec.json`
- API client collections: `docs/postman/` and `docs/bruno/`

Generate the OpenAPI spec:

```bash
npm run generate:openapi
```

## Seed Data & Sample Credentials

`npx prisma db seed` resets data and loads:

- Users (password: `password123`):
  - `sauron@example.com` (`ADMIN`)
  - `skywalker@example.com` (`PROJECT_MANAGER`)
  - `gandalf@yahoo.com`, `frodo@example.com`, `samwise@example.com`, `legolas@example.com`, `aragorn@example.com`, `bard@example.com` (all `DEVELOPER`)
- Project owners, projects with phases, project assignments, tickets, comments, and notifications.

Use these for local authentication; replace secrets before deployment.

## Testing & Tooling

- `npm test` — run Vitest suites.
- `npx prisma format` — format the Prisma schema.
- `npx prisma migrate dev` — apply schema changes locally.
- `npx prisma db seed` — reset and seed dev data.
- `npm run dev` / `npm run dev:worker` — run API and workers during development.
- `npm run build` — compile TypeScript; `npm start` and `npm start:worker` run compiled artifacts.

## Deployment Notes

- Provide PostgreSQL, Redis, JWT, email, upload, and port configuration via environment variables.
- Run `npm run build` then start both the API (`npm start`) and workers (`npm start:worker`) that use Redis today (BullMQ) and can support future Redis-backed features.
- Regenerate the Prisma client (`npx prisma generate`) whenever the schema changes.
- Rotate JWT secrets when compromised and ensure SMTP credentials are secured. The seed script truncates data—do not run against non-dev databases.
