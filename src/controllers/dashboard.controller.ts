import { Request, Response } from "express";
import {
  findAllDeveloperDashboards,
  findDeveloperDashboard,
  findDailyCadence,
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

async function getAllDeveloperDashboards(_req: Request, res: Response) {
  try {
    const dashboards = await findAllDeveloperDashboards();
    if (!dashboards) {
      return res.status(404).json({ message: "Dashboards not found" });
    }
    return res.status(200).json(dashboards);
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

async function getDailyCadence(req: Request, res: Response) {
  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const projectId = Number(req.params.projectId);
    if (!Number.isInteger(projectId) || projectId <= 0) {
      return res.status(400).json({ message: "Invalid project id" });
    }
    const cadence = await findDailyCadence(projectId);
    if (!cadence || cadence.length === 0) {
      return res.status(404).json({ message: "Daily cadence not found" });
    }
    return res.status(200).json(cadence[0]);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

export {
  getDeveloperDashboard,
  getAllDeveloperDashboards,
  getProjectManagerDashboard,
  getDailyCadence,
};
