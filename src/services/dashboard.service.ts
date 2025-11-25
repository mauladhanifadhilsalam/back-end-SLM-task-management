import prisma from "../db/prisma";

async function findDeveloperDashboard(userId: number) {
  return await prisma.developerDashboard.findUnique({
    where: {
      userId,
    },
  });
}

async function refreshDashboard() {
  return await prisma.$executeRaw`REFRESH MATERIALIZED VIEW developer_dashboard`;
}
export { findDeveloperDashboard, refreshDashboard };
