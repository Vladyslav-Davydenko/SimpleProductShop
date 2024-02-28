// import { sql } from "@vercel/postgres";
// import { CardType } from "../_types/Card";

import { unstable_noStore as noStore } from "next/cache";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const ITEMS_PER_PAGE = 9;
export async function fetchFilteredPerfumes(
  query: string,
  currentPage: number,
  minPrice: number,
  maxPrice: number
) {
  noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    // const perfumes = await sql<CardType>`
    // SELECT perfumes.id, perfumes.title, perfumes.url, perfumes.price, perfumes.description
    // FROM perfumes
    // WHERE
    // (perfumes.title ILIKE ${`%${query}%`} OR
    // perfumes.description ILIKE ${`%${query}%`} OR
    // perfumes.price::text ILIKE ${`%${query}%`})
    // AND
    // (perfumes.price BETWEEN ${minPrice} AND ${maxPrice})
    // ORDER BY perfumes.date DESC
    // LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    // `;

    const perfumes = await prisma.perfume.findMany({
      select: {
        id: true,
        title: true,
        url: true,
        price: true,
        description: true,
      },
      where: {
        OR: [
          { title: { contains: query, mode: "insensitive" } },
          { description: { contains: query, mode: "insensitive" } },
        ],
        AND: [{ price: { gte: minPrice, lte: maxPrice } }],
      },
      orderBy: {
        date: "desc",
      },
      take: ITEMS_PER_PAGE,
      skip: offset,
    });

    const formattedPerfumes = perfumes.map((perfume) => ({
      ...perfume,
      price: parseInt(perfume.price.toString()),
    }));

    return formattedPerfumes;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch perfumes.");
  }
}

export async function fetchLatestPerfumes() {
  noStore();
  try {
    const perfumes = await prisma.perfume.findMany({
      select: {
        id: true,
        title: true,
        url: true,
        price: true,
        description: true,
      },
      orderBy: {
        date: "desc",
      },
      take: 7,
    });
    // const cards = await sql<CardType>`
    //     SELECT perfumes.id, perfumes.title, perfumes.url, perfumes.price, perfumes.description
    //     FROM perfumes
    //     ORDER BY perfumes.date DESC
    //     LIMIT 7
    //     `;

    // Convert Decimal type to number or string
    const formattedPerfumes = perfumes.map((perfume) => ({
      ...perfume,
      price: parseInt(perfume.price.toString()),
    }));

    return formattedPerfumes;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the latest invoices.");
  }
}

export async function fetchPerfumesPages(
  query: string,
  minPrice: number,
  maxPrice: number
) {
  noStore();
  try {
    const count = await prisma.perfume.count({
      where: {
        OR: [
          { title: { contains: query, mode: "insensitive" } },
          { description: { contains: query, mode: "insensitive" } },
        ],
        AND: [{ price: { gte: minPrice, lte: maxPrice } }],
      },
    });
    //   const count = await sql`SELECT COUNT(*)
    //   FROM perfumes
    //   WHERE
    //   (perfumes.title ILIKE ${`%${query}%`} OR
    //   perfumes.description ILIKE ${`%${query}%`} OR
    //   perfumes.price::text ILIKE ${`%${query}%`})
    //   AND
    //   (perfumes.price BETWEEN ${minPrice} AND ${maxPrice})
    // `;

    const totalPages = Math.ceil(count / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch total number of invoices.");
  }
}
