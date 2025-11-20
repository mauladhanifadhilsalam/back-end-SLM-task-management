import prisma from "../src/db/prisma";
import seedProjectOwner from "./seeders/project-owner.seeder";
import seedProject from "./seeders/project.seeder";
import seedTicket from "./seeders/ticket.seeder";
import seedComment from "./seeders/comment.seeder";
import seedNotification from "./seeders/notification.seeder";
import seedUser from "./seeders/user.seeder";

async function resetSequences() {
  console.log("Resetting ID sequences...");
  const tableNames = [
    "Notification",
    "Attachment",
    "Comment",
    "TicketAssignee",
    "Ticket",
    "ProjectAssignment",
    "ProjectPhase",
    "Project",
    "ProjectOwner",
    "User"
  ];

  for (const table of tableNames) {
    await prisma.$executeRawUnsafe(
      `ALTER SEQUENCE "${table}_id_seq" RESTART WITH 1;`
    );
  }

  console.log("Sequences reset complete.");
}

async function main() {
  console.log("Starting database seed...");

  await prisma.notification.deleteMany();
  await prisma.attachment.deleteMany();
  await prisma.comment.deleteMany();
  await prisma.ticketAssignee.deleteMany();
  await prisma.ticket.deleteMany();
  await prisma.projectAssignment.deleteMany();
  await prisma.projectPhase.deleteMany();
  await prisma.project.deleteMany();
  await prisma.projectOwner.deleteMany();
  await prisma.user.deleteMany();

  console.log("Cleared existing data");

  await resetSequences();

  await seedUser();
  await seedProjectOwner();
  await seedProject();
  await seedTicket();
  await seedComment();
  await seedNotification();

  console.log("Seed completed successfully!");
}

main()
  .catch((e) => {
    console.error("Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
