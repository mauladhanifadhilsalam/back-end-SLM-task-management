import { Request, Response } from "express";
import {
  findProjectOwners,
  findProjectOwner,
  createProjectOwner,
  editProjectOwner,
  deleteProjectOwner,
} from "../services/project-owner.service";
import {
  projectOwnerSchema,
  projectOwnerQuerySchema,
} from "../schemas/project-owner.schema";
import { requireViewer } from "../utils/permissions";
import { ActivityTargetType } from "@prisma/client";
import {
  recordActivity,
  toActivityDetails,
} from "../services/activity-log.service";

async function getAllProjectOwners(req: Request, res: Response) {
  try {
    const parsed = projectOwnerQuerySchema.safeParse(req.query);
    if (!parsed.success) {
      return res.status(400).json(parsed.error.format());
    }

    const users = await findProjectOwners(parsed.data);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}

async function getProjectOwnerById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const owner = await findProjectOwner({ id: Number(id) });
    if (!owner)
      return res.status(404).json({ message: "Project owner not found" });
    res.status(200).json(owner);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}

async function insertProjectOwner(req: Request, res: Response) {
  const viewer = requireViewer(req, res);
  if (!viewer) {
    return;
  }

  const parsed = projectOwnerSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json(parsed.error.format());
  const { name, company, email, phone, address } = parsed.data;

  const existing = await findProjectOwner({ email });
  if (existing)
    return res
      .status(409)
      .json({ message: "Project owner with this email already exist" });

  const owner = await createProjectOwner({
    name,
    company,
    email,
    phone,
    address,
  });

  await recordActivity({
    userId: viewer.id,
    action: "PROJECT_OWNER_CREATED",
    targetType: ActivityTargetType.PROJECT_OWNER,
    targetId: owner.id,
    details: toActivityDetails({ name, email }),
  });

  res.status(201).json(owner);
}

async function updateProjectOwner(req: Request, res: Response) {
  const viewer = requireViewer(req, res);
  if (!viewer) {
    return;
  }

  const { id } = req.params;
  const owner = await findProjectOwner({ id: Number(id) });
  if (!owner)
    return res.status(404).json({ message: "Project owner not found" });

  const parsed = projectOwnerSchema.partial().safeParse(req.body);
  if (!parsed.success) return res.status(400).json(parsed.error.format());
  const { name, company, email, phone, address } = parsed.data;

  if (email && email !== owner.email) {
    const existing = await findProjectOwner({ email });
    if (existing)
      return res
        .status(409)
        .json({ message: "Project owner with this email already exist" });
  }

  const newProjectOwner = await editProjectOwner(Number(id), {
    name,
    company,
    email,
    phone,
    address,
  });

  await recordActivity({
    userId: viewer.id,
    action: "PROJECT_OWNER_UPDATED",
    targetType: ActivityTargetType.PROJECT_OWNER,
    targetId: newProjectOwner.id,
    details: toActivityDetails({
      changedFields: Object.keys(parsed.data),
    }),
  });

  res.status(200).json(newProjectOwner);
}

async function deleteProjectOwnerById(req: Request, res: Response) {
  const viewer = requireViewer(req, res);
  if (!viewer) {
    return;
  }

  const { id } = req.params;
  const owner = await findProjectOwner({ id: Number(id) });
  if (!owner)
    return res.status(404).json({ message: "Project owner not found" });

  await deleteProjectOwner(Number(id));
  await recordActivity({
    userId: viewer.id,
    action: "PROJECT_OWNER_DELETED",
    targetType: ActivityTargetType.PROJECT_OWNER,
    targetId: owner.id,
    details: toActivityDetails({ name: owner.name }),
  });
  res.status(200).send({ message: "Project owner deleted successfully" });
}

export {
  getAllProjectOwners,
  getProjectOwnerById,
  insertProjectOwner,
  updateProjectOwner,
  deleteProjectOwnerById,
};
