import { Request, Response } from "express";
import { hashPassword, verifyPassword } from "../utils/auth";
import {
  findUsers,
  findUser,
  createUser,
  editUser,
  deleteUser,
  editPassword,
} from "../services/user.service";
import { userSchema, changePasswordSchema, userQuerySchema } from "../schemas/user.schema";
import { ActivityTargetType } from "@prisma/client";
import { requireViewer } from "../utils/permissions";
import { recordActivity, toActivityDetails } from "../services/activity-log.service";
import { findUserById } from "../services/auth.service";

async function getAllUsers(req: Request, res: Response) {
  try {
    const parsed = userQuerySchema.safeParse(req.query);
    if (!parsed.success) {
      return res.status(400).json(parsed.error.format());
    }

    const users = await findUsers(parsed.data);
    res.status(200).json(users);
  } catch {
    res.status(500).json({ message: "Internal server error" });
  }
}

async function getUserById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const user = await findUser({ id: Number(id) });
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch {
    res.status(500).json({ message: "Internal server error" });
  }
}

async function insertUser(req: Request, res: Response) {
  const viewer = requireViewer(req, res);
  if (!viewer) {
    return;
  }

  const parsed = userSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json(parsed.error.format());
  const { fullName, role, email, password } = parsed.data;

  const existing = await findUser({ email });
  if (existing) return res.status(409).json({ message: "Email already used" });

  const passwordHash = await hashPassword(password);
  const user = await createUser({ fullName, role, email, passwordHash });

  await recordActivity({
    userId: viewer.id,
    action: "USER_CREATED",
    targetType: ActivityTargetType.USER,
    targetId: user.id,
    details: toActivityDetails({ fullName, email, role }),
  });

  res.status(201).json(user);
}

async function updateUser(req: Request, res: Response) {
  const viewer = requireViewer(req, res);
  if (!viewer) {
    return;
  }

  const { id } = req.params;
  const user = await findUser({ id: Number(id) });
  if (!user) return res.status(404).json({ message: "User not found" });

  const parsed = userSchema.partial().safeParse(req.body);
  if (!parsed.success) return res.status(400).json(parsed.error.format());
  const { fullName, role, email, password, isActive } = parsed.data;

  if (email && email !== user.email) {
    const existing = await findUser({ email });
    if (existing) return res.status(409).json({ message: "Email already used" });
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

  await recordActivity({
    userId: viewer.id,
    action: "USER_UPDATED",
    targetType: ActivityTargetType.USER,
    targetId: newUser.id,
    details: toActivityDetails({
      changedBy: viewer.id,
      changes: {
        fullName,
        role,
        email,
        isActive,
        passwordUpdated: Boolean(password),
      },
    }),
  });

  res.status(200).json(newUser);
}

async function deleteUserById(req: Request, res: Response) {
  const viewer = requireViewer(req, res);
  if (!viewer) {
    return;
  }

  const { id } = req.params;
  const user = await findUser({ id: Number(id) });
  if (!user) return res.status(404).json({ message: "User not found" });

  await deleteUser(Number(id));
  await recordActivity({
    userId: viewer.id,
    action: "USER_DELETED",
    targetType: ActivityTargetType.USER,
    targetId: user.id,
    details: toActivityDetails({ removedUserEmail: user.email }),
  });
  res.status(200).send({ message: "User deleted successfully" });
}

async function changePassword(req: Request, res: Response) {
  const viewer = requireViewer(req, res);
  if (!viewer) {
    return;
  }

  const parsed = changePasswordSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json(parsed.error.format());
  const { password, newPassword } = parsed.data;

  const user = await findUserById(viewer.id);
  if (!user) return res.status(404).json({ message: "User not found" });

  const isVerified = await verifyPassword(password, user.passwordHash);

  if (!isVerified) {
    return res.status(401).json({ message: "Invalid password" });
  }

  const isPasswordSame = await verifyPassword(newPassword, user.passwordHash);

  if (isPasswordSame) {
    return res.status(400).json({ message: "New password cannot be the same as the old one" });
  }

  const passwordHash = await hashPassword(newPassword);

  await editPassword(Number(user.id), passwordHash);
  await recordActivity({
    userId: viewer.id,
    action: "USER_PASSWORD_CHANGED",
    targetType: ActivityTargetType.USER,
    targetId: user.id,
    details: toActivityDetails({
      targetUserId: user.id,
      initiatedBy: viewer.id,
    }),
  });
  res.status(200).send({ message: "Password changed successfully" });
}

export { getAllUsers, getUserById, insertUser, updateUser, deleteUserById, changePassword };
