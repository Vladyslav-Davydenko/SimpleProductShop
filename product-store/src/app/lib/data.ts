import { unstable_noStore as noStore } from "next/cache";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const ITEMS_PER_PAGE = 9;
export async function fetchFilteredPerfumes(
  query: string,
  currentPage: number,
  minPrice: number,
  maxPrice: number,
  brands: string[]
) {
  noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    const perfumes = await prisma.perfume.findMany({
      select: {
        id: true,
        title: true,
        url: true,
        brand: true,
        // gender: perfume.gender,
        // rating: perfume.rating,
        price: true,
        description: true,
      },
      where: {
        OR: [
          { title: { contains: query, mode: "insensitive" } },
          { description: { contains: query, mode: "insensitive" } },
        ],
        AND: [
          { price: { gte: minPrice, lte: maxPrice } },
          { brand: { in: brands, mode: "insensitive" } },
        ],
      },
      orderBy: {
        date: "desc",
      },
      take: ITEMS_PER_PAGE,
      skip: offset,
    });

    return perfumes;
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
        brand: true,
        price: true,
        description: true,
      },
      orderBy: {
        date: "desc",
      },
      take: 7,
    });

    return perfumes;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the latest perfumes.");
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

    const totalPages = Math.ceil(count / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch total number of perfumes.");
  }
}
