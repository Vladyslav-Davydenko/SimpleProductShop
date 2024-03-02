"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { ChevronUpIcon } from "@heroicons/react/24/outline";

import clsx from "clsx";

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
  const [isOpen, setIsOpen] = useState<boolean>(false);

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

  const divClasses = clsx({
    "py-8 border-t-2 border-white transition-all duration-300": true,
    "h-[34rem]": isOpen,
    "h-[5.5rem] overflow-hidden": !isOpen,
  });

  const iconClasses = clsx({
    "h-6 w-6 transition-all duration-300": true,
    "rotate-180": isOpen,
    "rotate-0": !isOpen,
  });

  return (
    <div className={divClasses}>
      <div
        className="flex justify-between items-center mb-10"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="uppercase font-semibold text-sm opacity-80">Brands</p>
        <ChevronUpIcon className={iconClasses} />
      </div>
      {brandsFilter.map((brand) => {
        return (
          <div key={brand} className="flex gap-2 py-2 hover:cursor-pointer ">
            <input
              type="checkbox"
              id={`${brand}-input`}
              onChange={() => {
                if (brands.includes(brand)) {
                  setBrands(brands.filter((b) => b !== brand));
                } else setBrands([...brands, brand]);
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
