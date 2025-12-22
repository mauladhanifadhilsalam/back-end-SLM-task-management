# Docker Development Guide

Build and run the full stack (API, PostgreSQL, Redis) with Docker Compose. This document assumes Docker Desktop (or Docker Engine + Compose plugin) is installed.

## 1. Prepare Environment

1. Copy `.env.example` to `.env` if you have not already.
2. Leave host-specific values such as `DATABASE_URL=...@localhost` in `.env`. Docker Compose loads this file automatically and overrides only the variables that need container-specific hosts (`DATABASE_URL`, `REDIS_HOST`, `REDIS_PORT`).

## 2. Build and Start Services

```bash
docker compose up --build -d    # build images (API + worker) and start db/redis
```

The API is exposed on `http://localhost:3000`. PostgreSQL and Redis forward to the host on ports `5432` and `6379` for GUI tools. The BullMQ worker runs in its own service (`worker`) and automatically processes queued jobs.

## 3. Apply Database Migrations (required)

Run this after the containers start (and again after schema/migration changes) so the database schema is in place:

```bash
docker compose exec api npx prisma migrate deploy
```

## 4. Inspect and Monitor Containers

Check status:

```bash
docker compose ps
```

Tail API logs:

```bash
docker compose logs -f api
```

Tail worker logs:

```bash
docker compose logs -f worker
```

## 5. Seed Development Data

To load baseline users/projects/tickets (this truncates existing data):

```bash
docker compose exec api npx prisma db seed
```

Skip this step if you want to keep your current database contents.

## 5. Common Maintenance Commands

| Command                                                                | Purpose                                                                                 |
| ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `docker compose restart api`                                           | Restart only the API container (reloads env vars, regenerated Prisma client, etc.).     |
| `docker compose restart worker`                                        | Restart the BullMQ worker without touching other services.                              |
| `docker compose exec api npx prisma generate`                          | Rebuild Prisma client inside Linux (run after schema edits if hot reload isn’t enough). |
| `docker compose exec api npx prisma migrate reset --force --skip-seed` | Drop and recreate the schema without deleting the volume; useful for quick resets.      |
| `docker compose down`                                                  | Stop all containers but keep volumes/data.                                              |
| `docker compose down -v`                                               | Stop containers and delete named volumes (wipes Postgres data permanently).             |

## 6. Switching Between Dev and Build Modes

- **Dev / hot reload inside Docker**: the compose file mounts your workspace into the containers. To run the API with ts-node-dev inside Docker, uncomment the `command: ["npm", "run", "dev"]` block under the `api` service (or pass `docker compose run --rm api npm run dev`). To run workers with hot reload, switch the worker command to `["npm", "run", "dev:worker"]`. Keep the volume mounts to see code changes immediately.
- **Build / production-style run**: comment out the `volumes` entries for `api` and `worker` so the container uses files baked into the image, then rebuild with `docker compose up --build -d`. Use the default worker command (`"npm", "run", "start:worker"`) to execute the compiled build. Run `docker compose exec api npm run build` first (or add it to the Dockerfile) so `npm start` finds `dist/`.

## 7. Troubleshooting

- **`ECONNREFUSED 127.0.0.1` to Postgres/Redis**: ensure you ran migrations/seed inside Docker and kept `REDIS_HOST`, `DATABASE_URL` overrides pointing to `redis`/`db`.

## 8. Clean Rebuild Checklist

1. `docker compose down -v` (optional; wipes DB).
2. `docker compose up --build -d`.
3. `docker compose exec api npx prisma migrate deploy`.
4. `docker compose exec api npx prisma db seed` (optional).

You now have a fresh Docker-based environment matching the local development workflow.
