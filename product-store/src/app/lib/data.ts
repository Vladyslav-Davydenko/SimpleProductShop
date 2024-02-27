import { sql } from "@vercel/postgres";
import { CardType } from "../_types/Card";

import { unstable_noStore as noStore } from "next/cache";

const ITEMS_PER_PAGE = 9;
export async function fetchFilteredPerfumes(
  query: string,
  currentPage: number
): Promise<CardType[]> {
  // noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    const perfumes = await sql<CardType>`
    SELECT perfumes.id, perfumes.title, perfumes.url, perfumes.price, perfumes.description 
    FROM perfumes
    WHERE
    perfumes.title ILIKE ${`%${query}%`} OR
    perfumes.description ILIKE ${`%${query}%`} OR
    perfumes.price::text ILIKE ${`%${query}%`}
    ORDER BY perfumes.date DESC
    LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

    return perfumes.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch perfumes.");
  }
}

export async function fetchLatestPerfumes(): Promise<CardType[]> {
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
