import PriceRangeFilter from "../filters/PriceRangeFilter";
import BrandFilter from "../filters/BrandFilter";
import GendersFilter from "../filters/GendersFilter";

interface Props {
  genders: string[];
  brands: string[];
}

export default function ProductFilters({ genders, brands }: Props) {
  return (
    <div className="w-[20%] flex flex-col gap-6 items-start justify-center h-full">
      <p className="uppercase font-semibold text-md opacity-80 mb-10">
        Filters
      </p>
      <div className="w-full">
        <BrandFilter brands={brands} />
        <GendersFilter genders={genders} />
        <PriceRangeFilter />
      </div>
    </div>
  );
}
