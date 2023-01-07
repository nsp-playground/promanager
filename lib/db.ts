import { PrismaClient } from "@prisma/client";

declare global {
  // eslint-disable-next-line no-var
  var cachedPrisma: PrismaClient;
}

let prisma: PrismaClient;
if (process.env.NODE_ENV === "production") {
  // in production, we always want to use a brand new DB instance
  prisma = new PrismaClient();
} else {
  // in development, we want to store a DB instance and reuse it
  // this way, we don't create too many DB connections
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient();
  }
  prisma = global.cachedPrisma;
}

export const db = prisma;
