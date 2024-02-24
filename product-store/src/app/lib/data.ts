import { sql } from "@vercel/postgres";
import { CardType } from "../_types/Card";

export async function fetchPefumes(): Promise<CardType[]> {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Wait 4s");
    }, 4000);
  });
  try {
    const cards = await sql<CardType>`
        SELECT perfumes.id, perfumes.title, perfumes.url, perfumes.price, perfumes.description 
        FROM perfumes
        ORDER BY perfumes.date DESC
        LIMIT 8
        `;

    return cards.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the latest invoices.");
  }
}
