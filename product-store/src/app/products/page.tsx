import { Suspense } from "react";
import { Metadata } from "next";

import Search from "../ui/search/Search";
import ProductsGrid from "../ui/products/ProductsGrid";
import Pagination from "../ui/navigation/Pagination";

import { ProductsGridSceleton } from "../ui/sceletons/sceletons";
import { fetchPerfumesPages } from "../lib/data";

export const metadata: Metadata = {
  title: "Perfumes",
};

interface Props {
  searchParams?: {
    query?: string;
    page?: string;
  };
}

export default async function Page({ searchParams }: Props) {
  const query = searchParams?.query || "";
  const page = Number(searchParams?.page) || 1;

  const totalPages = await fetchPerfumesPages(query);
  return (
    <main className="flex flex-col min-h-[100vh] w-full items-center justify-center">
      <div className="p-20 h-full w-full flex gap-6 justify-center items-center">
        <div className="w-[20%] flex items-start justify-center border h-full">
          Filters
        </div>
        <div className="w-[80%] flex flex-col gap-6 items-center justify-center h-full">
          <div className=" flex justify-start px-6">
            <Suspense>
              <Search />
            </Suspense>
          </div>
          <Suspense fallback={<ProductsGridSceleton />}>
            <ProductsGrid query={query} page={page} />
          </Suspense>
          <Suspense>
            <Pagination totalPages={totalPages} />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
