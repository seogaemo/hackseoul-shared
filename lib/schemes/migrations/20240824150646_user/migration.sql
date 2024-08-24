-- CreateEnum
CREATE TYPE "Role" AS ENUM ('UNSPECIFIED', 'ADMIN', 'DISTRIBUTOR');

-- CreateTable
CREATE TABLE "User" (
    "uid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("uid")
);
