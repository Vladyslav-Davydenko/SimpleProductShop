import { fetchFilteredPerfumes } from "@/app/lib/data";

import ProductItem from "./ProductItem";
import { type CardType } from "@/app/_types/Card";

interface PoductsGridProps {
  query: string;
  page: number;
  minPrice: number;
  maxPrice: number;
  brands: string;
  genders: string;
  sortedBy: keyof CardType;
  sortingOrder: "asc" | "desc";
}

export default async function ProductsGrid({
  query,
  page,
  minPrice,
  maxPrice,
  brands,
  genders,
  sortedBy,
  sortingOrder,
}: PoductsGridProps) {
  const perfumes = await fetchFilteredPerfumes(
    query,
    page,
    minPrice,
    maxPrice,
    brands,
    genders,
    sortedBy,
    sortingOrder
  );
  return (
    <div className=" w-full grid grid-cols-3 place-items-center gap-8">
      {perfumes.length > 0 ? (
        perfumes.map((perfume) => (
          <ProductItem key={perfume.id + page} product={perfume} />
        ))
      ) : (
        <div className="flex items-center justify-center text-md opacity-80 col-span-3">
          <p>Nothing here</p>
        </div>
      )}
    </div>
  );
}
