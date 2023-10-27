-- CreateTable
CREATE TABLE "pets" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "dono" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "breed" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "birthdate" DATE NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "pets_pkey" PRIMARY KEY ("id")
);
