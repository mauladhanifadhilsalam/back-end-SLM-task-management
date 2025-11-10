import { Request, Response } from "express";
import { z } from "zod";
import { hashPassword, verifyPassword } from "../utils/auth";
import {
  findUsers,
  findUser,
  createUser,
  editUser,
  deleteUser,
  editPassword,
} from "../services/user.service";

const passwordSchema = z
  .string()
  .min(8, { message: "Password must be at least 8 characters long." })
  .refine((val) => /[a-z]/.test(val), {
    message: "Password must contain at least one lowercase letter.",
  })
  .refine((val) => /[A-Z]/.test(val), {
    message: "Password must contain at least one uppercase letter.",
  })
  .refine((val) => /\d/.test(val), {
    message: "Password must contain at least one number.",
  })
  .refine((val) => /[^A-Za-z0-9]/.test(val), {
    message: "Password must contain at least one special character.",
  });

const userSchema = z.object({
  email: z.email(),
  fullName: z.string(),
  role: z.enum(["PROJECT_MANAGER", "DEVELOPER"]),
  password: passwordSchema,
  isActive: z.boolean().optional(),
});

const changePasswordSchema = z.object({
  email: z.email(),
  password: z.string(),
  newPassword: passwordSchema
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
  res.status(200).send({ message: "User deleted successfully" });
}

async function changePassword(req: Request, res: Response) {
  const parsed = changePasswordSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json(parsed.error.format());
  const { email, password, newPassword } = parsed.data;

  const user = await findUser({ email });
  if (!user) return res.status(404).json({ message: "User not found" });

  const isVerified = await verifyPassword(password, user.passwordHash);

  if (!isVerified) {
    return res.status(401).json({ message: "Invalid password" });
  }

  const isPasswordSame = await verifyPassword(newPassword, user.passwordHash);

  if (isPasswordSame) {
    return res
      .status(400)
      .json({ message: "New password cannot be the same as the old one" });
  }

  const passwordHash = await hashPassword(newPassword);

  await editPassword(Number(user.id), passwordHash);
  res.status(200).send({ message: "Password changed successfully" });
}

export {
  getAllUsers,
  getUserById,
  insertUser,
  updateUser,
  deleteUserById,
  changePassword,
};
