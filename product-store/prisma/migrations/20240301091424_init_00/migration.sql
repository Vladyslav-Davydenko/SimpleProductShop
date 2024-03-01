-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- CreateTable
CREATE TABLE "Perfume" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "title" VARCHAR(255) NOT NULL,
    "brand" VARCHAR(255),
    "gender" VARCHAR(255) NOT NULL DEFAULT 'U',
    "rating" INTEGER,
    "description" TEXT,
    "url" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "date" DATE NOT NULL,

    CONSTRAINT "Perfume_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Perfume_url_key" ON "Perfume"("url");
