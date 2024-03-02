import { fetchFilteredPerfumes } from "@/app/lib/data";

import ProductItem from "./ProductItem";

interface PoductsGridProps {
  query: string;
  page: number;
  minPrice: number;
  maxPrice: number;
  brands: string[];
  genders: string[];
}

export default async function ProductsGrid({
  query,
  page,
  minPrice,
  maxPrice,
  brands,
  genders,
}: PoductsGridProps) {
  const perfumes = await fetchFilteredPerfumes(
    query,
    page,
    minPrice,
    maxPrice,
    brands,
    genders
  );
  return (
    <div className=" w-full grid grid-cols-3 place-items-center gap-8">
      {perfumes.map((perfume) => (
        <ProductItem key={perfume.id + page} product={perfume} />
      ))}
    </div>
  );
}
