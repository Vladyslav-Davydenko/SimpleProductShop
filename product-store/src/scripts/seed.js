const { db } = require("@vercel/postgres");
const { perfumes } = require("../app/lib/placeholder-data");

async function seedPerfumes(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS perfumes (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        url TEXT NOT NULL UNIQUE,
        price NUMERIC NOT NULL,
        date DATE NOT NULL
      );
    `;

    console.log(`Created "perfumes" table`);

    // Insert data into the "users" table
    const insertedPerfumes = await Promise.all(
      perfumes.map(async (perfume) => {
        return client.sql`
          INSERT INTO perfumes (id, title, url, price, description, date)
          VALUES (${perfume.id}, ${perfume.title}, ${perfume.url}, ${perfume.price}, ${perfume.description}, ${perfume.date})
          ON CONFLICT (id) DO NOTHING;
        `;
      })
    );

    console.log(`Seeded ${insertedPerfumes.length} perfumes`);

    return {
      createTable,
      perfumes: insertedPerfumes,
    };
  } catch (error) {
    console.error("Error seeding perfumes:", error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedPerfumes(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
