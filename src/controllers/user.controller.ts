import { Request, Response } from "express";
import { z } from "zod";
import { hashPassword } from "../utils/auth";
import {
  findUsers,
  findUser,
  createUser,
  editUser,
  deleteUser,
} from "../services/user.service";

const userSchema = z.object({
  email: z.email(),
  fullName: z.string(),
  role: z.enum(["PROJECT_MANAGER", "DEVELOPER"]),
  password: z.string().min(8),
  isActive: z.boolean().optional(),
});

async function getAllUsers(_req: Request, res: Response) {
  try {
    const users = await findUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}

async function getUserById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const user = await findUser({ id: Number(id) });
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}

async function insertUser(req: Request, res: Response) {
  const parsed = userSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json(parsed.error.format());
  const { fullName, role, email, password } = parsed.data;

  const existing = await findUser({ email });
  if (existing) return res.status(409).json({ message: "Email already used" });

  const passwordHash = await hashPassword(password);
  const user = await createUser({ fullName, role, email, passwordHash });

  res.status(201).json(user);
}

async function updateUser(req: Request, res: Response) {
  const { id } = req.params;
  const user = await findUser({ id: Number(id) });
  if (!user) return res.status(404).json({ message: "User not found" });

  const parsed = userSchema.partial().safeParse(req.body);
  if (!parsed.success) return res.status(400).json(parsed.error.format());
  const { fullName, role, email, password, isActive } = parsed.data;

  if (email && email !== user.email) {
    const existing = await findUser({ email });
    if (existing)
      return res.status(409).json({ message: "Email already used" });
  }

  // Prisma ignores undefined values
  // so it's fine to pass undefined values
  const newUser = await editUser(Number(id), {
    fullName,
    role,
    email,
    isActive,
    passwordHash: password ? await hashPassword(password) : undefined,
  });

  res.status(200).json(newUser);
}

async function deleteUserById(req: Request, res: Response) {
  const { id } = req.params;
  const user = await findUser({ id: Number(id) });
  if (!user) return res.status(404).json({ message: "User not found" });

  await deleteUser(Number(id));
  res.status(204).send();
}

export { getAllUsers, getUserById, insertUser, updateUser, deleteUserById };
