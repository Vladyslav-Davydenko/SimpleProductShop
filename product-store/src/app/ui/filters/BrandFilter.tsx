"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";

const brandsFilter = [
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

  const updateUrlParams = () => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="py-8 border-t-2 border-white">
      <p className="uppercase font-semibold text-sm opacity-80 mb-10">Brands</p>
      {brandsFilter.map((brand) => {
        return (
          <div
            key={brand}
            className=" p-2 opacity-80  hover:cursor-pointer hover:opacity-100"
          >
            <label className="flex gap-2 uppercase text-sm">
              <input type="checkbox" />
              {brand}
            </label>
          </div>
        );
      })}
    </div>
  );
}
