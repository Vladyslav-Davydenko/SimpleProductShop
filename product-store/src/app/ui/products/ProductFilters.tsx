import PriceRangeFilter from "../filters/PriceRangeFilter";
import BrandFilter from "../filters/BrandFilter";

export default function ProductFilters() {
  return (
    <div className="w-[20%] flex flex-col gap-6 items-start justify-center h-full">
      <p className="uppercase font-semibold text-md opacity-80 mb-10">
        Filters
      </p>
      <div className="w-full ">
        <PriceRangeFilter />
        <BrandFilter />
      </div>
    </div>
  );
}
