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
- Inbound email-to-ticket ingestion via IMAP polling (optional worker).
- Rate limiting for public, login, and authenticated traffic.
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
- ImapFlow for IMAP polling
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
  middleware/       Auth, role enforcement, rate limiting, uploads
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
  utils/            Shared utilities (JWT, permissions, pagination, transporter)
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

`src/app.ts` mounts `/metrics` and (non-production) `/docs`, then mounts the `/api` router. Within `/api`, `/auth` and `/health` are public; the remaining routes require authentication and apply role checks where needed.

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
# Update DATABASE_URL, JWT_SECRET, JWT_EXPIRES_IN, email, upload, Redis, and (optional) IMAP/rate-limit settings
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
API base URL is `http://localhost:3000/api`.

### Production Build

```bash
npm run build                # emit JS to dist/
npm start                    # run compiled server (expects prior build)
npm start:worker             # run compiled workers
```

## Environment Variables

| Key                           | Description                                              |
| ----------------------------- | -------------------------------------------------------- |
| `NODE_ENV`                    | Runtime environment name                                 |
| `PORT`                        | Express listener port (optional)                         |
| `DATABASE_URL`                | PostgreSQL connection string used by Prisma              |
| `JWT_SECRET`                  | Symmetric signing key for JWT tokens                     |
| `JWT_EXPIRES_IN`              | Token lifetime (supports durations like `1h` or seconds) |
| `REFRESH_TOKEN_EXPIRES_IN`    | Refresh token lifetime                                   |
| `REFRESH_TOKEN_COOKIE_NAME`   | Cookie name for refresh token                            |
| `EMAIL_HOST`                  | SMTP host for outbound notifications                     |
| `EMAIL_PORT`                  | SMTP port                                                |
| `EMAIL_USER`                  | SMTP username                                            |
| `EMAIL_PASS`                  | SMTP password or app password                            |
| `UPLOAD_DIR`                  | Directory for uploaded attachments                       |
| `REDIS_HOST`                  | Redis hostname                                           |
| `REDIS_PORT`                  | Redis port                                               |
| `REDIS_USERNAME`              | Redis username                                           |
| `REDIS_PASSWORD`              | Redis password                                           |
| `REDIS_DB`                    | Redis database index                                     |
| `REDIS_TLS`                   | Enable Redis TLS (`true`/`false`)                        |
| `ALLOWED_ORIGINS`             | CORS allowlist (comma-separated)                         |
| `RATE_LIMIT_PUBLIC_WINDOW_MS` | Public rate limit window (ms)                            |
| `RATE_LIMIT_PUBLIC_MAX`       | Max public requests per window                           |
| `RATE_LIMIT_LOGIN_WINDOW_MS`  | Login rate limit window (ms)                             |
| `RATE_LIMIT_LOGIN_MAX`        | Max login requests per window                            |
| `RATE_LIMIT_AUTH_WINDOW_MS`   | Authenticated rate limit window (ms)                     |
| `RATE_LIMIT_AUTH_MAX`         | Max authenticated requests per window                    |
| `RATE_LIMIT_ALLOWLIST`        | Comma-separated IPs exempt from rate limiting            |
| `IMAP_HOST`                   | IMAP host for inbound email polling                      |
| `IMAP_PORT`                   | IMAP port                                                |
| `IMAP_USER`                   | IMAP username                                            |
| `IMAP_PASS`                   | IMAP password or app password                            |
| `IMAP_SECURE`                 | Use TLS for IMAP (`true`/`false`)                        |
| `IMAP_MAILBOX`                | Mailbox to poll (default `INBOX`)                        |
| `IMAP_POLL_INTERVAL_MS`       | IMAP polling cadence in milliseconds                     |
| `EMAIL_TICKET_PROJECT_ID`     | Project ID to attach email-created tickets to            |
| `EMAIL_TICKET_REQUESTER_ID`   | Fallback requester ID for email-created tickets          |
| `EMAIL_TICKET_PRIORITY`       | Default priority for email-created tickets               |
| `EMAIL_TICKET_TYPE`           | Default type for email-created tickets                   |

Note: `.env.example` includes `APP_URL`, `REFRESH_TOKEN_SECRET`, and `EMAIL_FROM`, but the current codebase does not read them.

## Database & Prisma

Primary models: User, ProjectRole, RefreshToken, ProjectOwner, Project (categories JSONB, completion), ProjectPhase, ProjectAssignment, ProjectUpdate, Ticket (task/issue), TicketAssignee, Comment, Attachment, Notification, TeamUpdate, and ActivityLog. Prisma client is generated into `./node_modules/.prisma/client` (do not edit manually).

## Authentication & Authorization

- **Login**: `POST /api/auth/login` with email + password returns a Bearer token (`token_type: "Bearer"`) and `expires_in` and sets a refresh cookie.
- **Refresh**: `POST /api/auth/refresh` rotates refresh tokens and issues a new access token. Refresh tokens are read from the cookie, request body, or `x-refresh-token` header.
- **Logout**: `POST /api/auth/logout` clears the refresh token cookie.
- **Profile**: `GET /api/auth/profile` returns the authenticated user (requires a Bearer token).
- **Global**: `/api/health`, `/api/auth/login`, and `/api/auth/refresh` are public. `/metrics` and non-production `/docs` are also public. Everything else under `/api` requires a valid access token.

Paths below are relative to `/api`.

| Resource                                                            | Role Access (as implemented)                                                                               |
| ------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `/` (welcome)                                                       | Any authenticated user                                                                                     |
| `/users/change-password`                                            | Any authenticated user                                                                                     |
| `/users` list                                                       | `ADMIN`, `PROJECT_MANAGER`                                                                                 |
| `/users` CRUD (id routes)                                           | `ADMIN`                                                                                                    |
| `/project-roles` CRUD                                               | `ADMIN`                                                                                                    |
| `/project-owners` CRUD                                              | `ADMIN`, `PROJECT_MANAGER`                                                                                 |
| `/projects` list/get                                                | Any authenticated user (controllers restrict visibility to assigned users unless admin/PM)                 |
| `/projects/report`                                                  | `ADMIN`, `PROJECT_MANAGER`                                                                                 |
| `/projects` create/update/delete                                    | `ADMIN`, `PROJECT_MANAGER`                                                                                 |
| `/project-phases` CRUD                                              | `ADMIN`, `PROJECT_MANAGER`                                                                                 |
| `/project-assignments` CRUD                                         | `ADMIN`, `PROJECT_MANAGER`                                                                                 |
| `/project-updates` CRUD                                             | `ADMIN`, `PROJECT_MANAGER`                                                                                 |
| `/tickets`, `/ticket-assignees`, `/comments`, `/attachments`        | Any authenticated user; controller-level permission helpers enforce project membership and ownership rules |
| `/notifications` list/state                                         | Any authenticated user (admins can see all); create/update/delete/resend are admin-only                    |
| `/activity-logs`                                                    | `ADMIN`                                                                                                    |
| `/dashboard/developer`                                              | `DEVELOPER`                                                                                                |
| `/dashboard/project-manager`, `/dashboard/project-manager/dev-stat` | `PROJECT_MANAGER`                                                                                          |

Unauthorized requests return `401` for missing/invalid tokens or `403` for insufficient role/permissions.

## API Surface

High-level grouping only; see `docs/REFERENCE.md` or the Swagger UI for full request/response details. Paths are relative to `/api` unless noted.

| Area                | Base path              | Notes                                     |
| ------------------- | ---------------------- | ----------------------------------------- |
| Health & root       | `/health`, `/`         | Service status and authenticated welcome  |
| Auth                | `/auth`                | Login, refresh, logout, profile           |
| Users               | `/users`               | Account management and password change    |
| Project roles       | `/project-roles`       | Role catalog for user specialties         |
| Project owners      | `/project-owners`      | Owner contacts and company records        |
| Projects            | `/projects`            | Project records, status, and metadata     |
| Project reports     | `/projects/report`     | Excel export for project reporting        |
| Project phases      | `/project-phases`      | Timeline phases for projects              |
| Project assignments | `/project-assignments` | Assign people to projects                 |
| Project updates     | `/project-updates`     | Weekly project update entries             |
| Tickets             | `/tickets`             | Task and issue tracking                   |
| Ticket assignees    | `/ticket-assignees`    | Manage ticket assignee list               |
| Comments            | `/comments`            | Discussion on tickets                     |
| Attachments         | `/attachments`         | Ticket file uploads and downloads         |
| Team updates        | `/team-updates`        | Team status updates                       |
| Notifications       | `/notifications`       | In-app and email notifications            |
| Activity logs       | `/activity-logs`       | Audit trail entries                       |
| Dashboards          | `/dashboard/*`         | Developer and manager reporting           |
| Metrics             | `/metrics`             | Prometheus-compatible metrics (top-level) |

## Docs & Clients

- Endpoint reference: `docs/REFERENCE.md`
- Swagger UI (non-production only): `GET /docs` (top-level)
- OpenAPI spec: `docs/swagger/SLM-project-management-api.spec.json`
- API client collections: `docs/postman/`

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

- `npm test` - run Vitest suites.
- `npm run lint` / `npm run lint:fix` - lint code with ESLint.
- `npm run format` - format code with Prettier.
- `npm run generate:openapi` - regenerate the OpenAPI spec in `docs/swagger/`.
- `npx prisma format` - format the Prisma schema.
- `npx prisma migrate dev` - apply schema changes locally.
- `npx prisma db seed` - reset and seed dev data.
- `npm run dev` / `npm run dev:worker` - run API and workers during development.
- `npm run build` - compile TypeScript; `npm start` and `npm start:worker` run compiled artifacts.

## Deployment Notes

- Provide PostgreSQL, Redis, JWT, email, upload, and port configuration via environment variables.
- Run `npm run build` then start both the API (`npm start`) and workers (`npm start:worker`) for email, activity logging, and IMAP polling.
- Regenerate the Prisma client (`npx prisma generate`) whenever the schema changes.
- Docker workflows are documented in `DOCKER.md` and `docker-compose.yml`.
- Rotate JWT secrets when compromised and ensure SMTP credentials are secured. The seed script truncates data - do not run against non-dev databases.
