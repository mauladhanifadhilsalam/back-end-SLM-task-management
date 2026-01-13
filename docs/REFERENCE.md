# SLM Project Management API – Endpoint Reference

> This document focuses on **HTTP endpoints**. High-level concepts, architecture, and domain

## Contents

- [Authentication](#authentication)
- [Health & Root](#health--root)
- [Auth](#auth)
- [Users](#users)
- [Project Roles](#project-roles)
- [Project Owners](#project-owners)
- [Projects](#projects)
- [Project Phases](#project-phases)
- [Project Assignments](#project-assignments)
- [Project Updates](#project-updates)
- [Tickets](#tickets)
- [Ticket Assignees](#ticket-assignees)
- [Comments](#comments)
- [Attachments](#attachments)
- [Notifications](#notifications)
- [Team Updates](#team-updates)
- [Dashboard](#dashboard)
- [Activity Logs](#activity-logs)

## Authentication

- All protected endpoints use **Bearer JWT** auth.

- Include the token from `/auth/login` or `/auth/refresh` in the `Authorization` header:

```http
Authorization: Bearer <token>
```

## Health & Root

### Welcome (root)

`GET /`

Authenticated welcome message from `/`.

- **Auth:** required

**Example Request**

```http

GET {baseUrl}/

Authorization: Bearer <token>

```

**Responses**

- `200 OK` – Successful operation.

- `401 Unauthorized` – Missing or invalid token.

- `403 Forbidden` – Authenticated but not allowed to perform this action.

---

### Health Check

`GET /health`

Public liveness probe.

- **Auth:** none (public)

**Example Request**

```http

GET {baseUrl}/health

Authorization: Bearer <token>

```

**Responses**

- `200 OK` – Successful operation.

- `401 Unauthorized` – Missing or invalid token.

- `403 Forbidden` – Authenticated but not allowed to perform this action.

---

## Auth

### Login

`POST /auth/login`

Authenticate and retrieve a JWT. Seeds include admin (`sauron@example.com`), project manager (`skywalker@example.com`), and developer (`gandalf@yahoo.com`).

- **Auth:** none (public)

**Example Request**

```http

POST {baseUrl}/auth/login

Authorization: Bearer <token>

```

**Responses**

- `200 OK` – Successful operation.

- `400 Bad Request` – Validation error.

- `401 Unauthorized` – Missing or invalid token.

- `403 Forbidden` – Authenticated but not allowed to perform this action.

---

### Profile (me)

`GET /auth/profile`

Return the authenticated user's profile.

- **Auth:** required

**Example Request**

```http

GET {baseUrl}/auth/profile

Authorization: Bearer <token>

```

**Responses**

- `200 OK` – Successful operation.

- `401 Unauthorized` – Missing or invalid token.

- `403 Forbidden` – Authenticated but not allowed to perform this action.

---

### Refresh

`POST /auth/refresh`

Authenticate and retrieve a JWT. Seeds include admin (`sauron@example.com`), project manager (`skywalker@example.com`), and developer (`gandalf@yahoo.com`).

- **Auth:** required

**Example Request**

```http

POST {baseUrl}/auth/refresh

Authorization: Bearer <token>

```

**Responses**

- `200 OK` – Successful operation.

- `400 Bad Request` – Validation error.

- `401 Unauthorized` – Missing or invalid token.

- `403 Forbidden` – Authenticated but not allowed to perform this action.

---

## Users

### List Users

`GET /users`

- **Auth:** required (Bearer JWT)

**Query Parameters**

| Name        | Type              |
| ----------- | ----------------- |
| `page`      | integer           |
| `pageSize`  | integer           |
| `sortOrder` | string (ISO date) |
| `search`    | string            |
| `role`      | string            |
| `isActive`  | boolean           |
| `sortBy`    | string (enum)     |

**Example Request**

```http

GET {baseUrl}/users?page=1&pageSize=20&sortOrder=asc&search=test&role=DEVELOPER&isActive=true&sortBy=id

Authorization: Bearer <token>

```

**Responses**

- `200 OK` – Successful operation.

- `401 Unauthorized` – Missing or invalid token.

- `403 Forbidden` – Authenticated but not allowed to perform this action.

---

### Create User

`POST /users`

ADMIN only. Role options: PROJECT_MANAGER or DEVELOPER. Optional: include `projectRole` (code) to tag a user's specialty.

- **Auth:** required (Bearer JWT)

**Example Request**

```http

POST {baseUrl}/users

Authorization: Bearer <token>

```

**Responses**

- `200 OK` – Successful operation.

- `400 Bad Request` – Validation error.

- `401 Unauthorized` – Missing or invalid token.

- `403 Forbidden` – Authenticated but not allowed to perform this action.

---

### Delete User

`DELETE /users/:id`

ADMIN only.

- **Auth:** required (Bearer JWT)

**Example Request**

```http

DELETE {baseUrl}/users/:id

Authorization: Bearer <token>

```

**Responses**

- `200 OK` – Successful operation.

- `400 Bad Request` – Validation error.

- `401 Unauthorized` – Missing or invalid token.

- `403 Forbidden` – Authenticated but not allowed to perform this action.

---

### Get User By Id

`GET /users/:id`

ADMIN only.

- **Auth:** required (Bearer JWT)

**Example Request**

```http

GET {baseUrl}/users/:id

Authorization: Bearer <token>

```

**Responses**

- `200 OK` – Successful operation.

- `401 Unauthorized` – Missing or invalid token.

- `403 Forbidden` – Authenticated but not allowed to perform this action.

---

### Update User

`PATCH /users/:id`

ADMIN only. Partial updates allowed.

- **Auth:** required (Bearer JWT)

**Example Request**

```http

PATCH {baseUrl}/users/:id

Authorization: Bearer <token>

```

**Responses**

- `200 OK` – Successful operation.

- `400 Bad Request` – Validation error.

- `401 Unauthorized` – Missing or invalid token.

- `403 Forbidden` – Authenticated but not allowed to perform this action.

---

### Change Password (self-service)

`POST /users/change-password`

- **Auth:** required (Bearer JWT)

**Example Request**

```http

POST {baseUrl}/users/change-password

Authorization: Bearer <token>

```

**Responses**

- `200 OK` – Successful operation.

- `400 Bad Request` – Validation error.

- `401 Unauthorized` – Missing or invalid token.

- `403 Forbidden` – Authenticated but not allowed to perform this action.

---

## Project Roles

### List Project Roles

`GET /project-roles`

ADMIN only.

- **Auth:** required (Bearer JWT)

**Query Parameters**

| Name        | Type              |
| ----------- | ----------------- |
| `page`      | integer           |
| `pageSize`  | integer           |
| `sortOrder` | string (ISO date) |
| `search`    | string            |
| `sortBy`    | string (enum)     |

**Example Request**

```http

GET {baseUrl}/project-roles?page=1&pageSize=20&sortOrder=asc&search=frontend&sortBy=name

Authorization: Bearer <token>

```

**Responses**

- `200 OK` ƒ?" Successful operation.

- `400 Bad Request` ƒ?" Validation error.

- `401 Unauthorized` ƒ?" Missing or invalid token.

- `403 Forbidden` ƒ?" Authenticated but not allowed to perform this action.

---

### Get Project Role By Code

`GET /project-roles/:code`

ADMIN only.

- **Auth:** required (Bearer JWT)

**Example Request**

```http

GET {baseUrl}/project-roles/FRONT_END

Authorization: Bearer <token>

```

**Responses**

- `200 OK` ƒ?" Successful operation.

- `401 Unauthorized` ƒ?" Missing or invalid token.

- `403 Forbidden` ƒ?" Authenticated but not allowed to perform this action.

- `404 Not Found` ƒ?" Project role not found.

---

### Create Project Role

`POST /project-roles`

ADMIN only.

- **Auth:** required (Bearer JWT)

**Example Request**

```http

POST {baseUrl}/project-roles

Authorization: Bearer <token>

```

**Responses**

- `201 Created` ƒ?" Successful operation.

- `400 Bad Request` ƒ?" Validation error.

- `401 Unauthorized` ƒ?" Missing or invalid token.

- `403 Forbidden` ƒ?" Authenticated but not allowed to perform this action.

- `409 Conflict` ƒ?" Project role already exists.

---

### Update Project Role

`PATCH /project-roles/:code`

ADMIN only.

- **Auth:** required (Bearer JWT)

**Example Request**

```http

PATCH {baseUrl}/project-roles/FRONT_END

Authorization: Bearer <token>

```

**Responses**

- `200 OK` ƒ?" Successful operation.

- `400 Bad Request` ƒ?" Validation error.

- `401 Unauthorized` ƒ?" Missing or invalid token.

- `403 Forbidden` ƒ?" Authenticated but not allowed to perform this action.

- `404 Not Found` ƒ?" Project role not found.

- `409 Conflict` ƒ?" Project role already exists.

---

### Delete Project Role

`DELETE /project-roles/:code`

ADMIN only.

- **Auth:** required (Bearer JWT)

**Example Request**

```http

DELETE {baseUrl}/project-roles/FRONT_END

Authorization: Bearer <token>

```

**Responses**

- `200 OK` ƒ?" Successful operation.

- `401 Unauthorized` ƒ?" Missing or invalid token.

- `403 Forbidden` ƒ?" Authenticated but not allowed to perform this action.

- `404 Not Found` ƒ?" Project role not found.

---

## Project Owners

### List Project Owners

`GET /project-owners`

- **Auth:** required (Bearer JWT)

**Query Parameters**

| Name        | Type              |
| ----------- | ----------------- |
| `page`      | integer           |
| `pageSize`  | integer           |
| `sortOrder` | string (ISO date) |
| `company`   | string            |
| `search`    | string            |
| `sortBy`    | string (enum)     |

**Example Request**

```http

GET {baseUrl}/project-owners?page=1&pageSize=20&sortOrder=asc&company=sampleco&search=test&sortBy=id

Authorization: Bearer <token>

```

**Responses**

- `200 OK` – Successful operation.

- `401 Unauthorized` – Missing or invalid token.

- `403 Forbidden` – Authenticated but not allowed to perform this action.

---

### Create Project Owner

`POST /project-owners`

- **Auth:** required (Bearer JWT)

**Example Request**

```http

POST {baseUrl}/project-owners

Authorization: Bearer <token>

```

**Responses**

- `200 OK` – Successful operation.

- `400 Bad Request` – Validation error.

- `401 Unauthorized` – Missing or invalid token.

- `403 Forbidden` – Authenticated but not allowed to perform this action.

---

### Delete Project Owner

`DELETE /project-owners/:id`

- **Auth:** required (Bearer JWT)

**Example Request**

```http

DELETE {baseUrl}/project-owners/:id

Authorization: Bearer <token>

```

**Responses**

- `200 OK` – Successful operation.

- `400 Bad Request` – Validation error.

- `401 Unauthorized` – Missing or invalid token.

- `403 Forbidden` – Authenticated but not allowed to perform this action.

---

### Get Project Owner By Id

`GET /project-owners/:id`

- **Auth:** required (Bearer JWT)

**Example Request**

```http

GET {baseUrl}/project-owners/:id

Authorization: Bearer <token>

```

**Responses**

- `200 OK` – Successful operation.

- `401 Unauthorized` – Missing or invalid token.

- `403 Forbidden` – Authenticated but not allowed to perform this action.

---

### Update Project Owner

`PATCH /project-owners/:id`

- **Auth:** required (Bearer JWT)

**Example Request**

```http

PATCH {baseUrl}/project-owners/:id

Authorization: Bearer <token>

```

**Responses**

- `200 OK` – Successful operation.

- `400 Bad Request` – Validation error.

- `401 Unauthorized` – Missing or invalid token.

- `403 Forbidden` – Authenticated but not allowed to perform this action.

---

## Projects

### List Projects

`GET /projects`

- **Auth:** required (Bearer JWT)

**Query Parameters**

| Name             | Type              |
| ---------------- | ----------------- |
| `page`           | integer           |
| `pageSize`       | integer           |
| `sortOrder`      | string (ISO date) |
| `status`         | string (enum)     |
| `ownerId`        | integer           |
| `assignedUserId` | integer           |
| `category`       | string            |
| `sortBy`         | string (enum)     |

**Example Request**

```http

GET {baseUrl}/projects?page=1&pageSize=20&sortOrder=asc&status=IN_PROGRESS&ownerId=1&assignedUserId=1&category=sample&sortBy=id

Authorization: Bearer <token>

```

**Responses**

- `200 OK` – Successful operation.

- `401 Unauthorized` – Missing or invalid token.

- `403 Forbidden` – Authenticated but not allowed to perform this action.

---

### Create Project

`POST /projects`

- **Auth:** required (Bearer JWT)

**Example Request**

```http

POST {baseUrl}/projects

Authorization: Bearer <token>

```

**Responses**

- `200 OK` – Successful operation.

- `400 Bad Request` – Validation error.

- `401 Unauthorized` – Missing or invalid token.

- `403 Forbidden` – Authenticated but not allowed to perform this action.

---

### Delete Project

`DELETE /projects/:id`

- **Auth:** required (Bearer JWT)

**Example Request**

```http

DELETE {baseUrl}/projects/:id

Authorization: Bearer <token>

```

**Responses**

- `200 OK` – Successful operation.

- `400 Bad Request` – Validation error.

- `401 Unauthorized` – Missing or invalid token.

- `403 Forbidden` – Authenticated but not allowed to perform this action.

---

### Get Project By Id

`GET /projects/:id`

- **Auth:** required (Bearer JWT)

**Example Request**

```http

GET {baseUrl}/projects/:id

Authorization: Bearer <token>

```

**Responses**

- `200 OK` – Successful operation.

- `401 Unauthorized` – Missing or invalid token.

- `403 Forbidden` – Authenticated but not allowed to perform this action.

---

### Update Project

`PATCH /projects/:id`

- **Auth:** required (Bearer JWT)

**Example Request**

```http

PATCH {baseUrl}/projects/:id

Authorization: Bearer <token>

```

**Responses**

- `200 OK` – Successful operation.

- `400 Bad Request` – Validation error.

- `401 Unauthorized` – Missing or invalid token.

- `403 Forbidden` – Authenticated but not allowed to perform this action.

---

## Project Phases

### List Project Phases

`GET /project-phases`

- **Auth:** required (Bearer JWT)

**Query Parameters**

| Name         | Type              | 
| ------------ | ----------------- |
| `projectId`  | integer           |
| `page`       | integer           |
| `pageSize`   | integer           |
| `sortOrder`  | string (ISO date) |
| `startAfter` | string (ISO date) |
| `endBefore`  | string (ISO date) |
| `activeOnly` | boolean           |
| `sortBy`     | string (enum)     |

**Example Request**

```http

GET {baseUrl}/project-phases?projectId=1&page=1&pageSize=20&sortOrder=asc&startAfter=2024-01-01&endBefore=2024-12-31&activeOnly=true&sortBy=id

Authorization: Bearer <token>

```

**Responses**

- `200 OK` – Successful operation.

- `401 Unauthorized` – Missing or invalid token.

- `403 Forbidden` – Authenticated but not allowed to perform this action.

---

### Create Project Phase

`POST /project-phases`

- **Auth:** required (Bearer JWT)

**Example Request**

```http

POST {baseUrl}/project-phases

Authorization: Bearer <token>

```

**Responses**

- `200 OK` – Successful operation.

- `400 Bad Request` – Validation error.

- `401 Unauthorized` – Missing or invalid token.

- `403 Forbidden` – Authenticated but not allowed to perform this action.

---

### Delete Project Phase

`DELETE /project-phases/:id`

- **Auth:** required (Bearer JWT)

**Example Request**

```http

DELETE {baseUrl}/project-phases/:id

Authorization: Bearer <token>

```

**Responses**

- `200 OK` – Successful operation.

- `400 Bad Request` – Validation error.

- `401 Unauthorized` – Missing or invalid token.

- `403 Forbidden` – Authenticated but not allowed to perform this action.

---

### Get Project Phase By Id

`GET /project-phases/:id`

- **Auth:** required (Bearer JWT)

**Example Request**

```http

GET {baseUrl}/project-phases/:id

Authorization: Bearer <token>

```

**Responses**

- `200 OK` – Successful operation.

- `401 Unauthorized` – Missing or invalid token.

- `403 Forbidden` – Authenticated but not allowed to perform this action.

---

### Update Project Phase

`PATCH /project-phases/:id`

- **Auth:** required (Bearer JWT)

**Example Request**

```http

PATCH {baseUrl}/project-phases/:id

Authorization: Bearer <token>

```

**Responses**

- `200 OK` – Successful operation.

- `400 Bad Request` – Validation error.

- `401 Unauthorized` – Missing or invalid token.

- `403 Forbidden` – Authenticated but not allowed to perform this action.

---

## Project Assignments

### List Project Assignments

`GET /project-assignments`

- **Auth:** required (Bearer JWT)

**Query Parameters**

| Name            | Type              | 
| --------------- | ----------------- |
| `projectId`     | integer           |
| `page`          | integer           |
| `pageSize`      | integer           |
| `sortOrder`     | string (ISO date) |
| `userId`        | integer           |
| `assignedFrom`  | string (ISO date) |
| `assignedTo`    | string (ISO date) |
| `sortBy`        | string (enum)     |

**Example Request**

```http

GET {baseUrl}/project-assignments?projectId=1&page=1&pageSize=20&sortOrder=asc&userId=1&assignedFrom=2024-01-01&assignedTo=2024-12-31&sortBy=id

Authorization: Bearer <token>

```

**Responses**

- `200 OK` – Successful operation.

- `401 Unauthorized` – Missing or invalid token.

- `403 Forbidden` – Authenticated but not allowed to perform this action.

---

### Add Project Assignment

`POST /project-assignments`

- **Auth:** required (Bearer JWT)

**Example Request**

```http

POST {baseUrl}/project-assignments

Authorization: Bearer <token>

```

**Responses**

- `200 OK` – Successful operation.

- `400 Bad Request` – Validation error.

- `401 Unauthorized` – Missing or invalid token.

- `403 Forbidden` – Authenticated but not allowed to perform this action.

---

### Remove Project Assignment

`DELETE /project-assignments/:id`

- **Auth:** required (Bearer JWT)

**Example Request**

```http

DELETE {baseUrl}/project-assignments/:id

Authorization: Bearer <token>

```

**Responses**

- `200 OK` – Successful operation.

- `400 Bad Request` – Validation error.

- `401 Unauthorized` – Missing or invalid token.

- `403 Forbidden` – Authenticated but not allowed to perform this action.

---


## Project Updates

### List Project Updates

`GET /project-updates`

- **Auth:** required (Bearer JWT)

**Query Parameters**

| Name            | Type              |
| --------------- | ----------------- |
| `projectId`     | integer           |
| `phaseId`       | integer           |
| `facilitatorId` | integer           |
| `createdFrom`   | string (ISO date) |
| `createdTo`     | string (ISO date) |
| `page`          | integer           |
| `pageSize`      | integer           |
| `sortOrder`     | string (ISO date) |
| `sortBy`        | string (enum)     |

**Example Request**

```http

GET {baseUrl}/project-updates?projectId=1&phaseId=1&facilitatorId=2&createdFrom=2025-01-01&createdTo=2025-12-31&page=1&pageSize=20&sortOrder=asc&sortBy=createdAt

Authorization: Bearer <token>

```

**Responses**

- `200 OK` ??" Successful operation.

- `400 Bad Request` ??" Validation error.

- `401 Unauthorized` ??" Missing or invalid token.

---

### Create Project Update

`POST /project-updates`

- **Auth:** required (Bearer JWT)

**Body Fields**

| Name                | Type              |
| ------------------- | ----------------- |
| `projectId`         | integer           |
| `phaseId`           | integer           |
| `reportDate`        | string (ISO date) |
| `participant`       | string            |
| `objective`         | string            |
| `progressHighlight` | string            |
| `teamMood`          | string            |

**Example Request**

```http

POST {baseUrl}/project-updates

Authorization: Bearer <token>

```

**Responses**

- `201 Created` ??" Successful operation.

- `400 Bad Request` ??" Validation error.

- `401 Unauthorized` ??" Missing or invalid token.

---

### Delete Project Update

`DELETE /project-updates/:id`

- **Auth:** required (Bearer JWT)

**Example Request**

```http

DELETE {baseUrl}/project-updates/:id

Authorization: Bearer <token>

```

**Responses**

- `200 OK` ??" Successful operation.

- `400 Bad Request` ??" Validation error.

- `401 Unauthorized` ??" Missing or invalid token.

- `403 Forbidden` ??" Authenticated but not allowed to perform this action.

- `404 Not Found` ??" Project update not found.

---

### Get Project Update By Id

`GET /project-updates/:id`

- **Auth:** required (Bearer JWT)

**Example Request**

```http

GET {baseUrl}/project-updates/:id

Authorization: Bearer <token>

```

**Responses**

- `200 OK` ??" Successful operation.

- `400 Bad Request` ??" Validation error.

- `401 Unauthorized` ??" Missing or invalid token.

- `404 Not Found` ??" Project update not found.

---

### Update Project Update

`PATCH /project-updates/:id`

- **Auth:** required (Bearer JWT)

**Body Fields**

| Name                | Type              |
| ------------------- | ----------------- |
| `phaseId`           | integer           |
| `reportDate`        | string (ISO date) |
| `participant`       | string            |
| `objective`         | string            |
| `progressHighlight` | string            |
| `teamMood`          | string            |

**Example Request**

```http

PATCH {baseUrl}/project-updates/:id

Authorization: Bearer <token>

```

**Responses**

- `200 OK` ??" Successful operation.

- `400 Bad Request` ??" Validation error.

- `401 Unauthorized` ??" Missing or invalid token.

- `403 Forbidden` ??" Authenticated but not allowed to perform this action.

- `404 Not Found` ??" Project update not found.

---

## Tickets

### List Tickets (with filters)

`GET /tickets`

Filters are optional; results are limited to tickets the viewer can see.

- **Auth:** required (Bearer JWT)

**Query Parameters**

| Name           | Type              |
| -------------- | ----------------- |
| `projectId`    | integer           |
| `requesterId`  | integer           |
| `status`       | string (enum)     |
| `priority`     | string (enum)     |
| `type`         | string (enum)     |
| `assigneeId`   | integer           |
| `search`       | string            |
| `page`         | integer           |
| `pageSize`     | integer           |
| `sortOrder`    | string (ISO date) |
| `dueFrom`      | string (ISO date) |
| `dueTo`        | string (ISO date) |
| `updatedSince` | string (ISO date) |
| `sortBy`       | string (enum)     |

**Example Request**

```http

GET {baseUrl}/tickets?projectId=1&requesterId=1&status=IN_PROGRESS&priority=MEDIUM&type=TASK&assigneeId=1&search=test&page=1&pageSize=20&sortOrder=asc&dueFrom=2024-01-01&dueTo=2024-12-31&updatedSince=2024-01-01&sortBy=id

Authorization: Bearer <token>

```

**Responses**

- `200 OK` – Successful operation.

- `401 Unauthorized` – Missing or invalid token.

- `403 Forbidden` – Authenticated but not allowed to perform this action.

---

### Create Ticket

`POST /tickets`

Admins can override `requesterId`; other roles default to the viewer. Assignees must already be assigned to the project.

- **Auth:** required (Bearer JWT)

**Body Fields**

| Name          | Type          |
| ------------- | ------------- |
| `projectId`   | integer       |
| `requesterId` | integer       |
| `type`        | string (enum) |
| `title`       | string        |
| `description` | string        |
| `actionPlan`  | string        |
| `priority`    | string (enum) |
| `status`      | string (enum) |
| `startDate`   | string (ISO date) |
| `dueDate`     | string (ISO date) |
| `assigneeIds` | integer[]     |

**Example Request**

```http

POST {baseUrl}/tickets

Authorization: Bearer <token>

```

**Responses**

- `200 OK` – Successful operation.

- `400 Bad Request` – Validation error.

- `401 Unauthorized` – Missing or invalid token.

- `403 Forbidden` – Authenticated but not allowed to perform this action.

---

### Delete Ticket

`DELETE /tickets/:id`

- **Auth:** required (Bearer JWT)

**Example Request**

```http

DELETE {baseUrl}/tickets/:id

Authorization: Bearer <token>

```

**Responses**

- `200 OK` – Successful operation.

- `400 Bad Request` – Validation error.

- `401 Unauthorized` – Missing or invalid token.

- `403 Forbidden` – Authenticated but not allowed to perform this action.

---

### Get Ticket By Id

`GET /tickets/:id`

- **Auth:** required (Bearer JWT)

**Example Request**

```http

GET {baseUrl}/tickets/:id

Authorization: Bearer <token>

```

**Responses**

- `200 OK` – Successful operation.

- `401 Unauthorized` – Missing or invalid token.

- `403 Forbidden` – Authenticated but not allowed to perform this action.

---

### Update Ticket

`PATCH /tickets/:id`

Only admins/project managers/requesters/assignees (or developers on their own tasks) can update. Admins alone can change the requester.

- **Auth:** required (Bearer JWT)

**Body Fields**

| Name          | Type          |
| ------------- | ------------- |
| `projectId`   | integer       |
| `requesterId` | integer       |
| `type`        | string (enum) |
| `title`       | string        |
| `description` | string        |
| `actionPlan`  | string        |
| `priority`    | string (enum) |
| `status`      | string (enum) |
| `startDate`   | string (ISO date) |
| `dueDate`     | string (ISO date) |
| `assigneeIds` | integer[]     |

**Example Request**

```http

PATCH {baseUrl}/tickets/:id

Authorization: Bearer <token>

```

**Responses**

- `200 OK` – Successful operation.

- `400 Bad Request` – Validation error.

- `401 Unauthorized` – Missing or invalid token.

- `403 Forbidden` – Authenticated but not allowed to perform this action.

---

## Ticket Assignees

### List Ticket Assignees

`GET /ticket-assignees`

- **Auth:** required (Bearer JWT)

**Query Parameters**

| Name           | Type              | 
| -------------- | ----------------- |
| `ticketId`     | integer           |
| `page`         | integer           |
| `pageSize`     | integer           |
| `sortOrder`    | string (ISO date) |
| `userId`       | integer           |
| `assignedFrom` | string (ISO date) |
| `assignedTo`   | string (ISO date) |
| `sortBy`       | string (enum)     |

**Example Request**

```http

GET {baseUrl}/ticket-assignees?ticketId=1&page=1&pageSize=20&sortOrder=asc&userId=1&assignedFrom=2024-01-01&assignedTo=2024-12-31&sortBy=id

Authorization: Bearer <token>

```

**Responses**

- `200 OK` – Successful operation.

- `401 Unauthorized` – Missing or invalid token.

- `403 Forbidden` – Authenticated but not allowed to perform this action.

---

### Add Ticket Assignee

`POST /ticket-assignees`

- **Auth:** required (Bearer JWT)

**Example Request**

```http

POST {baseUrl}/ticket-assignees

Authorization: Bearer <token>

```

**Responses**

- `200 OK` – Successful operation.

- `400 Bad Request` – Validation error.

- `401 Unauthorized` – Missing or invalid token.

- `403 Forbidden` – Authenticated but not allowed to perform this action.

---

### Remove Ticket Assignee

`DELETE /ticket-assignees/:id`

- **Auth:** required (Bearer JWT)

**Example Request**

```http

DELETE {baseUrl}/ticket-assignees/:id

Authorization: Bearer <token>

```

**Responses**

- `200 OK` – Successful operation.

- `400 Bad Request` – Validation error.

- `401 Unauthorized` – Missing or invalid token.

- `403 Forbidden` – Authenticated but not allowed to perform this action.

---

## Comments

### List Comments

`GET /comments`

- **Auth:** required (Bearer JWT)

**Query Parameters**

| Name          | Type              | 
| ------------- | ----------------- |
| `ticketId`    | integer           |
| `page`        | integer           |
| `pageSize`    | integer           |
| `sortOrder`   | string (ISO date) |
| `authorId`    | integer           |
| `createdFrom` | string (ISO date) |
| `createdTo`   | string (ISO date) |
| `sortBy`      | string (enum)     |

**Example Request**

```http

GET {baseUrl}/comments?ticketId=1&page=1&pageSize=20&sortOrder=asc&authorId=1&createdFrom=2024-01-01&createdTo=2024-12-31&sortBy=id

Authorization: Bearer <token>

```

**Responses**

- `200 OK` – Successful operation.

- `401 Unauthorized` – Missing or invalid token.

- `403 Forbidden` – Authenticated but not allowed to perform this action.

---

### Create Comment

`POST /comments`

- **Auth:** required (Bearer JWT)

**Example Request**

```http

POST {baseUrl}/comments

Authorization: Bearer <token>

```

**Responses**

- `200 OK` – Successful operation.

- `400 Bad Request` – Validation error.

- `401 Unauthorized` – Missing or invalid token.

- `403 Forbidden` – Authenticated but not allowed to perform this action.

---

### Delete Comment

`DELETE /comments/:id`

- **Auth:** required (Bearer JWT)

**Example Request**

```http

DELETE {baseUrl}/comments/:id

Authorization: Bearer <token>

```

**Responses**

- `200 OK` – Successful operation.

- `400 Bad Request` – Validation error.

- `401 Unauthorized` – Missing or invalid token.

- `403 Forbidden` – Authenticated but not allowed to perform this action.

---

### Get Comment By Id

`GET /comments/:id`

- **Auth:** required (Bearer JWT)

**Example Request**

```http

GET {baseUrl}/comments/:id

Authorization: Bearer <token>

```

**Responses**

- `200 OK` – Successful operation.

- `401 Unauthorized` – Missing or invalid token.

- `403 Forbidden` – Authenticated but not allowed to perform this action.

---

### Update Comment

`PATCH /comments/:id`

- **Auth:** required (Bearer JWT)

**Example Request**

```http

PATCH {baseUrl}/comments/:id

Authorization: Bearer <token>

```

**Responses**

- `200 OK` – Successful operation.

- `400 Bad Request` – Validation error.

- `401 Unauthorized` – Missing or invalid token.

- `403 Forbidden` – Authenticated but not allowed to perform this action.

---

## Attachments

### List Attachments

`GET /attachments`

Returns attachments with a base64 payload.

- **Auth:** required (Bearer JWT)

**Query Parameters**

| Name           | Type              | 
| -------------- | ----------------- |
| `ticketId`     | integer           |
| `page`         | integer           |
| `pageSize`     | integer           |
| `sortOrder`    | string (ISO date) |
| `userId`       | integer           |
| `uploadedFrom` | string (ISO date) |
| `uploadedTo`   | string (ISO date) |
| `sortBy`       | string (enum)     |

**Example Request**

```http

GET {baseUrl}/attachments?ticketId=1&page=1&pageSize=20&sortOrder=asc&userId=1&uploadedFrom=2024-01-01&uploadedTo=2024-12-31&sortBy=id

Authorization: Bearer <token>

```

**Responses**

- `200 OK` – Successful operation.

- `401 Unauthorized` – Missing or invalid token.

- `403 Forbidden` – Authenticated but not allowed to perform this action.

---

### Upload Attachment

`POST /attachments`

Form-data upload: `file` is the binary, `ticketId` is text.

- **Auth:** required (Bearer JWT)

**Example Request**

```http

POST {baseUrl}/attachments

Authorization: Bearer <token>

```

**Responses**

- `200 OK` – Successful operation.

- `400 Bad Request` – Validation error.

- `401 Unauthorized` – Missing or invalid token.

- `403 Forbidden` – Authenticated but not allowed to perform this action.

---

### Delete Attachment

`DELETE /attachments/:id`

- **Auth:** required (Bearer JWT)

**Example Request**

```http

DELETE {baseUrl}/attachments/:id

Authorization: Bearer <token>

```

**Responses**

- `200 OK` – Successful operation.

- `400 Bad Request` – Validation error.

- `401 Unauthorized` – Missing or invalid token.

- `403 Forbidden` – Authenticated but not allowed to perform this action.

---

## Notifications

### List Notifications

`GET /notifications`

- **Auth:** required (Bearer JWT)

**Query Parameters**

| Name          | Type              |
| ------------- | ----------------- |
| `recipientId` | integer           |
| `targetType`  | string (enum)     |
| `targetId`    | integer           |
| `state`       | string (enum)     |
| `page`        | integer           |
| `pageSize`    | integer           |
| `sortOrder`   | string (ISO date) |
| `status`      | string (enum)     |
| `sentFrom`    | string (ISO date) |
| `sentTo`      | string (ISO date) |
| `sortBy`      | string (enum)     |

**Example Request**

```http

GET {baseUrl}/notifications?recipientId=1&targetType=TICKET&targetId=1&state=UNREAD&page=1&pageSize=20&sortOrder=asc&status=IN_PROGRESS&sentFrom=2024-01-01&sentTo=2024-12-31&sortBy=id

Authorization: Bearer <token>

```

**Responses**

- `200 OK` – Successful operation.

- `401 Unauthorized` – Missing or invalid token.

- `403 Forbidden` – Authenticated but not allowed to perform this action.

---

### Create Notification (admin)

`POST /notifications`

- **Auth:** required (Bearer JWT)

**Example Request**

```http

POST {baseUrl}/notifications

Authorization: Bearer <token>

```

**Responses**

- `200 OK` – Successful operation.

- `400 Bad Request` – Validation error.

- `401 Unauthorized` – Missing or invalid token.

- `403 Forbidden` – Authenticated but not allowed to perform this action.

---

### Delete Notification (admin)

`DELETE /notifications/:id`

- **Auth:** required (Bearer JWT)

**Example Request**

```http

DELETE {baseUrl}/notifications/:id

Authorization: Bearer <token>

```

**Responses**

- `200 OK` – Successful operation.

- `400 Bad Request` – Validation error.

- `401 Unauthorized` – Missing or invalid token.

- `403 Forbidden` – Authenticated but not allowed to perform this action.

---

### Get Notification By Id

`GET /notifications/:id`

- **Auth:** required (Bearer JWT)

**Example Request**

```http

GET {baseUrl}/notifications/:id

Authorization: Bearer <token>

```

**Responses**

- `200 OK` – Successful operation.

- `401 Unauthorized` – Missing or invalid token.

- `403 Forbidden` – Authenticated but not allowed to perform this action.

---

### Update Notification (admin)

`PATCH /notifications/:id`

- **Auth:** required (Bearer JWT)

**Example Request**

```http

PATCH {baseUrl}/notifications/:id

Authorization: Bearer <token>

```

**Responses**

- `200 OK` – Successful operation.

- `400 Bad Request` – Validation error.

- `401 Unauthorized` – Missing or invalid token.

- `403 Forbidden` – Authenticated but not allowed to perform this action.

---

### Resend Notification (admin; failed only)

`POST /notifications/:id/resend`

- **Auth:** required (Bearer JWT)

**Example Request**

```http

POST {baseUrl}/notifications/:id/resend

Authorization: Bearer <token>

```

**Responses**

- `200 OK` – Successful operation.

- `400 Bad Request` – Validation error.

- `401 Unauthorized` – Missing or invalid token.

- `403 Forbidden` – Authenticated but not allowed to perform this action.

---

### Update Notification State

`PATCH /notifications/:id/state`

Recipients can mark UNREAD -> READ; admins can set any state.

- **Auth:** required (Bearer JWT)

**Example Request**

```http

PATCH {baseUrl}/notifications/:id/state

Authorization: Bearer <token>

```

**Responses**

- `200 OK` – Successful operation.

- `400 Bad Request` – Validation error.

- `401 Unauthorized` – Missing or invalid token.

- `403 Forbidden` – Authenticated but not allowed to perform this action.

---

## Team Updates

### List Team Updates

`GET /team-updates`

- **Auth:** required (Bearer JWT)

**Query Parameters**

| Name          | Type              |
| ------------- | ----------------- |
| `projectId`   | integer           |
| `userId`      | integer           |
| `status`      | string (enum)     |
| `createdFrom` | string (ISO date) |
| `createdTo`   | string (ISO date) |
| `page`        | integer           |
| `pageSize`    | integer           |
| `sortOrder`   | string (ISO date) |
| `sortBy`      | string (enum)     |

**Example Request**

```http

GET {baseUrl}/team-updates?projectId=1&userId=1&status=IN_PROGRESS&createdFrom=2024-01-01&createdTo=2024-12-31&page=1&pageSize=20&sortOrder=asc&sortBy=createdAt

Authorization: Bearer <token>

```

**Responses**

- `200 OK` ƒ?" Successful operation.

- `400 Bad Request` ƒ?" Validation error.

- `401 Unauthorized` ƒ?" Missing or invalid token.

---

### Create Team Update

`POST /team-updates`

- **Auth:** required (Bearer JWT)

**Example Request**

```http

POST {baseUrl}/team-updates

Authorization: Bearer <token>

```

**Responses**

- `201 Created` ƒ?" Successful operation.

- `400 Bad Request` ƒ?" Validation error.

- `401 Unauthorized` ƒ?" Missing or invalid token.

- `404 Not Found` ƒ?" Project not found.

---

### Delete Team Update

`DELETE /team-updates/:id`

- **Auth:** required (Bearer JWT)

**Example Request**

```http

DELETE {baseUrl}/team-updates/:id

Authorization: Bearer <token>

```

**Responses**

- `200 OK` ƒ?" Successful operation.

- `400 Bad Request` ƒ?" Validation error.

- `401 Unauthorized` ƒ?" Missing or invalid token.

- `403 Forbidden` ƒ?" Authenticated but not allowed to perform this action.

- `404 Not Found` ƒ?" Team update not found.

---

### Get Team Update By Id

`GET /team-updates/:id`

- **Auth:** required (Bearer JWT)

**Example Request**

```http

GET {baseUrl}/team-updates/:id

Authorization: Bearer <token>

```

**Responses**

- `200 OK` ƒ?" Successful operation.

- `400 Bad Request` ƒ?" Validation error.

- `401 Unauthorized` ƒ?" Missing or invalid token.

- `404 Not Found` ƒ?" Team update not found.

---

### Update Team Update

`PATCH /team-updates/:id`

- **Auth:** required (Bearer JWT)

**Example Request**

```http

PATCH {baseUrl}/team-updates/:id

Authorization: Bearer <token>

```

**Responses**

- `200 OK` ƒ?" Successful operation.

- `400 Bad Request` ƒ?" Validation error.

- `401 Unauthorized` ƒ?" Missing or invalid token.

- `403 Forbidden` ƒ?" Authenticated but not allowed to perform this action.

- `404 Not Found` ƒ?" Team update not found.

---

## Dashboard

### Developer Dashboard

`GET /dashboard/developer`

Requires `DEVELOPER` role. Returns the developer dashboard metrics.

- **Auth:** required (Bearer JWT)

**Example Request**

```http

GET {baseUrl}/dashboard/developer

Authorization: Bearer <token>

```

**Responses**

- `200 OK` ƒ?" Successful operation.

- `401 Unauthorized` ƒ?" Missing or invalid token.

- `403 Forbidden` ƒ?" Authenticated but not allowed to perform this action.

- `404 Not Found` ƒ?" Dashboard not found.

---

### Project Manager Dashboard

`GET /dashboard/project-manager`

Requires `PROJECT_MANAGER` role. Returns the project manager dashboard metrics.

- **Auth:** required (Bearer JWT)

**Example Request**

```http

GET {baseUrl}/dashboard/project-manager

Authorization: Bearer <token>

```

**Responses**

- `200 OK` ƒ?" Successful operation.

- `401 Unauthorized` ƒ?" Missing or invalid token.

- `403 Forbidden` ƒ?" Authenticated but not allowed to perform this action.

- `404 Not Found` ƒ?" Dashboard not found.

---



`GET /dashboard/project-manager/dev-stat`

Requires `PROJECT_MANAGER` role. Returns developer dashboard rows for project managers.

- **Auth:** required (Bearer JWT)

**Example Request**

```http

GET {baseUrl}/dashboard/project-manager/dev-stat

Authorization: Bearer <token>

```

**Responses**

- `200 OK` ƒ?" Successful operation.

- `401 Unauthorized` ƒ?" Missing or invalid token.

- `403 Forbidden` ƒ?" Authenticated but not allowed to perform this action.

- `404 Not Found` ƒ?" Dashboards not found.

---


### Daily Cadence (Project Manager)

`GET /dashboard/project-manager/daily-cadence/:projectId`

Requires `PROJECT_MANAGER` role. Returns daily cadence metrics for the specified project.

- **Auth:** required (Bearer JWT)

**Example Request**

```http

GET {baseUrl}/dashboard/project-manager/daily-cadence/:projectId

Authorization: Bearer <token>

```

**Responses**

- `200 OK` - Successful operation.

- `400 Bad Request` - Invalid project id.

- `401 Unauthorized` - Missing or invalid token.

- `403 Forbidden` - Authenticated but not allowed to perform this action.

- `404 Not Found` - Daily cadence not found.

---

## Activity Logs

### Bulk Delete Activity Logs

`DELETE /activity-logs`

Requires at least `olderThan` or `targetType`.

- **Auth:** required (Bearer JWT)

**Query Parameters**

| Name         | Type          | 
| ------------ | ------------- |
| `olderThan`  | string        |
| `targetType` | string (enum) |

**Example Request**

```http

DELETE {baseUrl}/activity-logs?olderThan=2023-01-01&targetType=TICKET

Authorization: Bearer <token>

```

**Responses**

- `200 OK` – Successful operation.

- `400 Bad Request` – Validation error.

- `401 Unauthorized` – Missing or invalid token.

- `403 Forbidden` – Authenticated but not allowed to perform this action.

---

### List Activity Logs

`GET /activity-logs`

- **Auth:** required (Bearer JWT)

**Query Parameters**

| Name         | Type              | 
| ------------ | ----------------- |
| `targetType` | string (enum)     |
| `targetId`   | integer           |
| `userId`     | integer           |
| `action`     | string            |
| `page`       | integer           |
| `pageSize`   | integer           |
| `from`       | string (ISO date) |
| `to`         | string (ISO date) |
| `sortOrder`  | string (ISO date) |
| `sortBy`     | string (enum)     |

**Example Request**

```http

GET {baseUrl}/activity-logs?targetType=TICKET&targetId=1&userId=1&action=UPDATED&page=1&pageSize=20&from=2024-01-01&to=2024-12-31&sortOrder=asc&sortBy=id

Authorization: Bearer <token>

```

**Responses**

- `200 OK` – Successful operation.

- `401 Unauthorized` – Missing or invalid token.

- `403 Forbidden` – Authenticated but not allowed to perform this action.

---

### Delete Activity Log

`DELETE /activity-logs/:id`

- **Auth:** required (Bearer JWT)

**Example Request**

```http

DELETE {baseUrl}/activity-logs/:id

Authorization: Bearer <token>

```

**Responses**

- `200 OK` – Successful operation.

- `400 Bad Request` – Validation error.

- `401 Unauthorized` – Missing or invalid token.

- `403 Forbidden` – Authenticated but not allowed to perform this action.

---

### Get Activity Log By Id

`GET /activity-logs/:id`

- **Auth:** required (Bearer JWT)

**Example Request**

```http

GET {baseUrl}/activity-logs/:id

Authorization: Bearer <token>

```

**Responses**

- `200 OK` – Successful operation.

- `401 Unauthorized` – Missing or invalid token.

- `403 Forbidden` – Authenticated but not allowed to perform this action.

---
