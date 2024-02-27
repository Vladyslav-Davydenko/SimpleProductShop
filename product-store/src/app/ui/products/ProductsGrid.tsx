import { fetchFilteredPerfumes } from "@/app/lib/data";

import ProductItem from "./ProductItem";

interface PoductsGridProps {
  query: string;
  page: number;
}

export default async function ProductsGrid({ query, page }: PoductsGridProps) {
  const perfumes = await fetchFilteredPerfumes(query, page);
  return (
    <div className=" w-full min-h-screen grid grid-cols-3 place-items-center gap-8">
      {perfumes.map((perfume) => (
        <ProductItem key={perfume.id + page} product={perfume} />
      ))}
    </div>
  );
}
