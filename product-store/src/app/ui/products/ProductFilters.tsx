"use client";

import PriceRangeFilter from "../filters/PriceRangeFilter";
import BrandFilter from "../filters/BrandFilter";
import GendersFilter from "../filters/GendersFilter";

interface Props {
  genders: string;
  brands: string;
  minPrice: number;
  maxPrice: number;
}

export default function ProductFilters({
  genders,
  brands,
  minPrice,
  maxPrice,
}: Props) {
  return (
    <div className="w-[20%] flex flex-col gap-6 items-start justify-center h-full">
      <p className="uppercase font-semibold text-md opacity-80 mb-10">
        Filters
      </p>
      <div className="w-full">
        <BrandFilter brands={brands} />
        <GendersFilter genders={genders} />
        <PriceRangeFilter minPrice={minPrice} maxPrice={maxPrice} />
      </div>
    </div>
  );
}
