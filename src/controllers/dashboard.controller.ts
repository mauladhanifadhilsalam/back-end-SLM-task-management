import { Request, Response } from "express";
import {
  findDeveloperDashboard,
  findProjectManagerDashboard,
} from "../services/dashboard.service";

async function getDeveloperDashboard(req: Request, res: Response) {
  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const userId = Number(req.user.sub);
    const dashboard = await findDeveloperDashboard(userId);
    if (!dashboard) {
      return res.status(404).json({ message: "Dashboard not found" });
    }
    return res.status(200).json(dashboard);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

async function getProjectManagerDashboard(req: Request, res: Response) {
  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const userId = Number(req.user.sub);
    const dashboard = await findProjectManagerDashboard(userId);
    if (!dashboard) {
      return res.status(404).json({ message: "Dashboard not found" });
    }
    return res.status(200).json(dashboard[0]);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

export { getDeveloperDashboard, getProjectManagerDashboard };
