import { sql } from "@vercel/postgres";
import { CardType } from "../ui/motions/HorizontalMotion";

export async function fetchCard(id: number) {
  try {
    const data = await sql`
        SELECT perfumes.id, perfumes.title, perfumes.url, perfumes.price perfumes.price 
        FROM perfumes
        WHERE perfumes.id == ${id}
        `;

    console.log(data);
    return data.rows[0];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the latest invoices.");
  }
}
