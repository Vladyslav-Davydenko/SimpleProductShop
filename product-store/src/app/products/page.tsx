import { Suspense } from "react";
import { Metadata } from "next";

import Search from "../ui/search/Search";
import ProductsGrid from "../ui/products/ProductsGrid";
import Pagination from "../ui/navigation/Pagination";
import ProductFilters from "../ui/products/ProductFilters";
import ProductSearchUnderBar from "../ui/products/ProductSearchUnderBar";

import { ProductsGridSceleton } from "../ui/sceletons/sceletons";
import { fetchPerfumesPages } from "../lib/data";

export const metadata: Metadata = {
  title: "Perfumes",
};

interface Props {
  searchParams?: {
    query?: string;
    page?: string;
    minPrice?: string;
    maxPrice?: string;
    brands?: string;
    genders?: string;
  };
}

export default async function Page({ searchParams }: Props) {
  const query = searchParams?.query || "";
  const page = Number(searchParams?.page) || 1;
  const minPrice = Number(searchParams?.minPrice) || 0;
  const maxPrice = Number(searchParams?.maxPrice) || 2000;
  const brands = searchParams?.brands?.split(",") || [
    "Stronger with you",
    "Creed",
    "Goldea",
    "Ck be",
    "Allure",
    "Red Diamond",
    "Park Avenue",
    "Jaguar",
    "Versace",
    "Coco",
  ];
  const filteredBrands = searchParams?.brands?.split(",") || [];
  const genders = searchParams?.genders?.split(",") || ["M", "F", "U"];
  const gendersFilter = searchParams?.genders?.split(",") || [];

  const totalPages = await fetchPerfumesPages(
    query,
    minPrice,
    maxPrice,
    brands,
    genders
  );
  return (
    <main className="flex flex-col min-h-[100vh] w-full items-center justify-center">
      <div className="p-20 h-full w-full flex gap-6 justify-center items-start">
        <ProductFilters genders={gendersFilter} brands={filteredBrands} />
        <div className="w-[80%] flex flex-col gap-6 items-center justify-center h-full">
          <div className=" flex justify-start px-6">
            <Suspense>
              <Search />
            </Suspense>
          </div>
          <ProductSearchUnderBar />
          <Suspense fallback={<ProductsGridSceleton />}>
            <ProductsGrid
              query={query}
              page={page}
              minPrice={minPrice}
              maxPrice={maxPrice}
              brands={brands}
              genders={genders}
            />
          </Suspense>
          <Suspense>
            <Pagination totalPages={totalPages} />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
