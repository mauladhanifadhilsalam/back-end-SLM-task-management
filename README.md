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
- Developer dashboard powered by a materialized view.

## Tech Stack

- Node.js 20,
- TypeScript
- Express 5
- Prisma ORM targeting PostgreSQL
- JWT (JSON Web Token)
- Zod schema validation
- Redis (currently for BullMQ background jobs)
- BullMQ for background jobs
- Nodemailer for email delivery
- Multer for file uploads
- Vitest for unit testing

## Architecture Overview

```
src/
  app.ts            Express app wiring, middleware registration, route mounting
  server.ts         HTTP bootstrap
  controllers/      HTTP controllers with validation and response handling
  services/         Prisma-backed domain services and business logic
  routes/           Route definitions and role gates per resource
  middleware/       Auth, role enforcement, uploads
  db/prisma.ts      Prisma client singleton
  config/           Env loader, Redis connection
  queues/           BullMQ queue definitions
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

| Key              | Description                                              | Default from `.env.example`                         |
| ---------------- | -------------------------------------------------------- | --------------------------------------------------- |
| `DATABASE_URL`   | PostgreSQL connection string used by Prisma              | `postgresql://postgres:password@localhost:5432/...` |
| `JWT_SECRET`     | Symmetric signing key for JWT tokens                     | `secret`                                            |
| `JWT_EXPIRES_IN` | Token lifetime (supports durations like `1h` or seconds) | `1h`                                                |
| `PORT`           | Express listener port (optional)                         | `3000` (set in code if env var missing)             |
| `EMAIL_HOST`     | SMTP host for outbound notifications                     | `smtp.gmail.com`                                    |
| `EMAIL_PORT`     | SMTP port                                                | `587`                                               |
| `EMAIL_USER`     | SMTP username                                            | `user@gmail.com`                                    |
| `EMAIL_PASS`     | SMTP password or app password                            | `abcdefghijklmnop`                                  |
| `UPLOAD_DIR`     | Directory for uploaded attachments                       | `uploads/`                                          |
| `REDIS_HOST`     | Redis hostname                                           | `127.0.0.1`                                         |
| `REDIS_PORT`     | Redis port                                               | `6379`                                              |

## Database & Prisma

Primary models: User, ProjectOwner, Project (categories JSONB, completion), ProjectPhase, ProjectAssignment, Ticket (task/issue), TicketAssignee, Comment, Attachment, Notification, ActivityLog, plus a `DeveloperDashboard` materialized view. Prisma client is generated into `./node_modules/.prisma/client` (do not edit manually).

## Authentication & Authorization

- **Login**: `POST /auth/login` with email + password returns a Bearer token (`token_type: "Bearer"`) and `expires_in`.
- **Profile**: `GET /auth/profile` returns the authenticated user.
- **Global**: `/health` and `/auth/login` are public; everything else requires a valid token.

| Resource                                                     | Role Access (as implemented)                                                                               |
| ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| `/` (welcome)                                                | Any authenticated user                                                                                     |
| `/users/change-password`                                     | Any authenticated user                                                                                     |
| `/users` list                                                | `ADMIN`, `PROJECT_MANAGER`                                                                                 |
| `/users` CRUD (id routes)                                    | `ADMIN`                                                                                                    |
| `/project-owners` CRUD                                       | `ADMIN`, `PROJECT_MANAGER`                                                                                 |
| `/projects` (all routes)                                     | Any authenticated user (controllers restrict visibility to assigned users unless admin/PM)                 |
| `/project-phases` CRUD                                       | `ADMIN`, `PROJECT_MANAGER`                                                                                 |
| `/project-assignments` CRUD                                  | `ADMIN`, `PROJECT_MANAGER`                                                                                 |
| `/tickets`, `/ticket-assignees`, `/comments`, `/attachments` | Any authenticated user; controller-level permission helpers enforce project membership and ownership rules |
| `/notifications` list/state                                  | Any authenticated user (admins can see all); create/update/delete/resend are admin-only                    |
| `/activity-logs`                                             | `ADMIN`                                                                                                    |
| `/dashboard/developer`                                       | `DEVELOPER`                                                                                                |

Unauthorized requests return `401` for missing/invalid tokens or `403` for insufficient role/permissions.

## API Surface

- **Auth**: `POST /auth/login`, `GET /auth/profile`
- **Users**: `POST /users/change-password`, admin/PM list, admin CRUD by id
- **Project Owners**: CRUD (admin/PM)
- **Projects**: list/detail with phases and assignments; create/update/delete; visibility limited for non-admin/PM
- **Project Phases**: CRUD (admin/PM)
- **Project Assignments**: list by project (required for non-admin), create/delete (admin/PM)
- **Tickets**: filterable list, detail, create/update/delete with granular permission checks; completion recalculation for tasks
- **Ticket Assignees**: list by ticket, add/remove assignees with project membership validation
- **Comments**: list by ticket, create, update/delete with author-or-admin rules
- **Attachments**: list (base64 payload), upload file (`multipart/form-data` field `file`), delete with owner/admin ticket permissions
- **Notifications**: list (admin sees all, others only their own), get by id, set state, admin create/update/delete/resend
- **Activity Logs**: list with pagination/filters, get by id, delete/purge (admin)
- **Dashboard**: `GET /dashboard/developer` for developer-centric stats
- **Metrics**: `GET /metrics` exposes Prometheus-compatible runtime metrics

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
