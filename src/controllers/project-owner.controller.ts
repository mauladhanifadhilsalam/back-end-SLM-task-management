import { Request, Response } from "express";
import { z } from "zod";
import {
  findProjectOwners,
  findProjectOwner,
  createProjectOwner,
  editProjectOwner,
  deleteProjectOwner,
} from "../services/project-owner.service";

const projectOwnerSchema = z.object({
  name: z.string(),
  company: z.string(),
  email: z.email(),
  phone: z.e164(),
  address: z.string(),
});

async function getAllProjectOwners(_req: Request, res: Response) {
  try {
    const users = await findProjectOwners();
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

  res.status(201).json(owner);
}

async function updateProjectOwner(req: Request, res: Response) {
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

  res.status(200).json(newProjectOwner);
}

async function deleteProjectOwnerById(req: Request, res: Response) {
  const { id } = req.params;
  const owner = await findProjectOwner({ id: Number(id) });
  if (!owner)
    return res.status(404).json({ message: "Project owner not found" });

  await deleteProjectOwner(Number(id));
  res.status(200).send({ message: "Project owner deleted successfully" });
}

export {
  getAllProjectOwners,
  getProjectOwnerById,
  insertProjectOwner,
  updateProjectOwner,
  deleteProjectOwnerById,
};
