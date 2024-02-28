import { PrismaClient } from "@prisma/client";
import { perfumes } from "../app/lib/placeholder-data";

const prisma = new PrismaClient();

async function main() {
  try {
    const insertedPerfumes = await Promise.all(
      perfumes.map(async (perfume) => {
        return prisma.perfume.upsert({
          where: {
            id: perfume.id,
          },
          update: {},
          create: {
            id: perfume.id,
            title: perfume.title,
            url: perfume.url,
            price: perfume.price,
            description: perfume.description,
            date: perfume.date,
          },
        });
      })
    );

    console.log(`Seeded ${insertedPerfumes.length} perfumes`);
  } catch (error) {
    console.error("Error seeding perfumes:", error);
    throw error;
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
