import { Suspense } from "react";
import { Metadata } from "next";

import Search from "../ui/search/Search";
import ProductsGrid from "../ui/products/ProductsGrid";
import Pagination from "../ui/navigation/Pagination";
import ProductFilters from "../ui/products/ProductFilters";
import ProductSearchUnderBar from "../ui/products/ProductSearchUnderBar";

import { ProductsGridSceleton } from "../ui/sceletons/sceletons";
import { fetchPerfumesPages } from "../lib/data";
import { type CardType } from "../_types/Card";

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
    "sorted-by"?: string;
    "sorting-order": "asc" | "desc";
  };
}

export default async function Page({ searchParams }: Props) {
  const query = searchParams?.query || "";
  const page = Number(searchParams?.page) || 1;
  const minPrice = Number(searchParams?.minPrice) || 0;
  const maxPrice = Number(searchParams?.maxPrice) || 2000;
  const brands = searchParams?.brands || "";
  const genders = searchParams?.genders || "";
  const sortedBy = (searchParams?.["sorted-by"] || "id") as keyof CardType;
  const sortingOrder = searchParams?.["sorting-order"] || "asc";

  const totalPages = await fetchPerfumesPages(
    query,
    minPrice,
    maxPrice,
    brands,
    genders
  );
  return (
    <main className="flex flex-col min-h-[100vh] w-full">
      <div className="p-6 md:p-20 pt-20 h-full w-full gap-6 flex justify-center items-center md:items-start ">
        <ProductFilters
          genders={genders}
          brands={brands}
          minPrice={minPrice}
          maxPrice={maxPrice}
        />
        <div className="w-[80%] flex flex-col gap-6 items-center justify-center h-full">
          <div className=" flex justify-start px-6">
            <Suspense>
              <Search />
            </Suspense>
          </div>
          <ProductSearchUnderBar
            sortedBy={sortedBy}
            sortingOrder={sortingOrder}
          />
          <Suspense fallback={<ProductsGridSceleton />}>
            <ProductsGrid
              query={query}
              page={page}
              minPrice={minPrice}
              maxPrice={maxPrice}
              brands={brands}
              genders={genders}
              sortedBy={sortedBy}
              sortingOrder={sortingOrder}
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
