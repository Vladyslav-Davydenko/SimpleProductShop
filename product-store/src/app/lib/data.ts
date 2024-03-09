import { unstable_noStore as noStore } from "next/cache";

import { PrismaClient } from "@prisma/client";

import { defaultBrands, defaultGenders } from "./placeholder-data";
import { CardType } from "../_types/Card";

const prisma = new PrismaClient();

const ITEMS_PER_PAGE = 9;
export async function fetchFilteredPerfumes(
  query: string,
  currentPage: number,
  minPrice: number,
  maxPrice: number,
  brands: string,
  genders: string,
  sortedBy: keyof CardType = "date",
  sortingOrder: "asc" | "desc"
) {
  // noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  const filteredBrands = brands.split(",")[0]
    ? brands.split(",")
    : defaultBrands;
  const filteredGenders = genders.split(",")[0]
    ? genders.split(",")
    : defaultGenders;

  try {
    const perfumes = await prisma.perfume.findMany({
      select: {
        id: true,
        title: true,
        url: true,
        brand: true,
        gender: true,
        rating: true,
        price: true,
        description: true,
        date: true,
      },
      where: {
        OR: [
          { title: { contains: query, mode: "insensitive" } },
          { description: { contains: query, mode: "insensitive" } },
        ],
        AND: [
          { price: { gte: minPrice, lte: maxPrice } },
          { brand: { in: filteredBrands, mode: "insensitive" } },
          { gender: { in: filteredGenders, mode: "insensitive" } },
        ],
      },
      orderBy: {
        [sortedBy]: sortingOrder,
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
  // noStore();
  try {
    const perfumes = await prisma.perfume.findMany({
      select: {
        id: true,
        title: true,
        url: true,
        brand: true,
        gender: true,
        rating: true,
        price: true,
        description: true,
        date: true,
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
  maxPrice: number,
  brands: string,
  genders: string
) {
  // noStore();
  const filteredBrands = brands.split(",")[0]
    ? brands.split(",")
    : defaultBrands;
  const filteredGenders = genders.split(",")[0]
    ? genders.split(",")
    : defaultGenders;

  try {
    const count = await prisma.perfume.count({
      where: {
        OR: [
          { title: { contains: query, mode: "insensitive" } },
          { description: { contains: query, mode: "insensitive" } },
        ],
        AND: [
          { price: { gte: minPrice, lte: maxPrice } },
          { brand: { in: filteredBrands, mode: "insensitive" } },
          { gender: { in: filteredGenders, mode: "insensitive" } },
        ],
      },
    });

    const totalPages = Math.ceil(count / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch total number of perfumes.");
  }
}
