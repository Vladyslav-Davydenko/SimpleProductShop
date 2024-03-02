"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const brandsFilter = [
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

export default function BrandFilter() {
  const [brands, setBrands] = useState<string[]>([]);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const updateUrlParams = useDebouncedCallback(() => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (brands && brands[0]) params.set("brands", brands.join(","));
    else params.delete("brands");
    replace(`${pathname}?${params.toString()}`);
  }, 500);

  useEffect(() => {
    updateUrlParams();
  }, [brands, updateUrlParams]);

  return (
    <div className="py-8 border-t-2 border-white">
      <p className="uppercase font-semibold text-sm opacity-80 mb-10">Brands</p>
      {brandsFilter.map((brand) => {
        return (
          <div key={brand} className="flex gap-2 p-2 hover:cursor-pointer ">
            <input
              type="checkbox"
              id={`${brand}-input`}
              onChange={() => {
                if (brands.includes(brand))
                  setBrands(brands.filter((b) => b !== brand));
                else setBrands([...brands, brand]);
              }}
            />
            <label htmlFor={`${brand}-input`} className="hover:cursor-pointer">
              {brand}
            </label>
          </div>
        );
      })}
    </div>
  );
}
