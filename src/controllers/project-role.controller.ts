import { Request, Response } from "express";
import {
  createProjectRole,
  deleteProjectRole,
  findProjectRoleByCode,
  findProjectRoles,
  updateProjectRole,
} from "../services/project-role.service";
import {
  projectRoleQuerySchema,
  projectRoleSchema,
  projectRoleUpdateSchema,
} from "../schemas/project-role.schema";

async function getProjectRoles(req: Request, res: Response) {
  try {
    const parsed = projectRoleQuerySchema.safeParse(req.query);
    if (!parsed.success) {
      return res.status(400).json(parsed.error.format());
    }

    const roles = await findProjectRoles(parsed.data);
    res.status(200).json(roles);
  } catch {
    res.status(500).json({ message: "Internal server error" });
  }
}

async function getProjectRoleByCode(req: Request, res: Response) {
  try {
    const code = req.params.code;
    const role = await findProjectRoleByCode(code);
    if (!role) {
      return res.status(404).json({ message: "Project role not found" });
    }

    res.status(200).json(role);
  } catch {
    res.status(500).json({ message: "Internal server error" });
  }
}

async function addProjectRole(req: Request, res: Response) {
  try {
    const parsed = projectRoleSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json(parsed.error.format());
    }

    const { code, name } = parsed.data;
    const existing = await findProjectRoleByCode(code);
    if (existing) {
      return res.status(409).json({ message: "Project role already exists" });
    }

    const created = await createProjectRole({ code, name });
    res.status(201).json(created);
  } catch {
    res.status(500).json({ message: "Internal server error" });
  }
}

async function editProjectRole(req: Request, res: Response) {
  try {
    const code = req.params.code;
    const parsed = projectRoleUpdateSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json(parsed.error.format());
    }

    const { code: nextCode, name: nextName } = parsed.data;
    const existing = await findProjectRoleByCode(code);
    if (!existing) {
      return res.status(404).json({ message: "Project role not found" });
    }

    if (nextCode && nextCode !== code) {
      const conflict = await findProjectRoleByCode(nextCode);
      if (conflict) {
        return res.status(409).json({ message: "Project role already exists" });
      }
    }

    const updated = await updateProjectRole(code, {
      ...(nextCode ? { code: nextCode } : {}),
      ...(nextName ? { name: nextName } : {}),
    });
    res.status(200).json(updated);
  } catch {
    res.status(500).json({ message: "Internal server error" });
  }
}

async function removeProjectRole(req: Request, res: Response) {
  try {
    const code = req.params.code;
    const existing = await findProjectRoleByCode(code);
    if (!existing) {
      return res.status(404).json({ message: "Project role not found" });
    }

    await deleteProjectRole(code);
    res.status(200).json({ message: "Project role deleted successfully" });
  } catch {
    res.status(500).json({ message: "Internal server error" });
  }
}

export {
  getProjectRoles,
  getProjectRoleByCode,
  addProjectRole,
  editProjectRole,
  removeProjectRole,
};
