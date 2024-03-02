"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Slider from "rc-slider";
import { useEffect, useRef, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

import { ChevronUpIcon } from "@heroicons/react/24/outline";

import clsx from "clsx";

export default function PriceRangeFilter() {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const defaultValues = [
    Number(params.get("minPrice")) || 0,
    Number(params.get("maxPrice")) || 2000,
  ];
  const [priceRange, setPriceRange] = useState(defaultValues);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const { replace } = useRouter();

  const updateUrlParams = useDebouncedCallback(() => {
    params.set("page", "1");
    params.set("minPrice", priceRange[0].toString());
    params.set("maxPrice", priceRange[1].toString());
    replace(`${pathname}?${params.toString()}`);
  }, 1000);

  // prevent calling the function before first render
  const isMounted = useRef(false);
  useEffect(() => {
    if (isMounted.current) {
      updateUrlParams();
    } else {
      isMounted.current = true;
    }
  }, [priceRange, updateUrlParams]);

  // useEffect(() => {
  //   if (!params.has("minPrice")) setPriceRange([0, priceRange[1]]);
  //   if (!params.has("maxPrice")) setPriceRange([priceRange[0], 2000]);
  // }, [params]);

  const handleSliderChange = (value: number | number[]) => {
    if (typeof value === "number") {
      setPriceRange([0, value]);
    } else {
      setPriceRange(value);
    }
  };

  const divClasses = clsx({
    "py-8 border-y-2 border-white transition-all duration-300": true,
    "h-[20rem]": isOpen,
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
        <p className="uppercase font-semibold text-sm opacity-80">
          Price Range
        </p>
        <ChevronUpIcon className={iconClasses} />
      </div>
      <div className="py-4 flex justify-between">
        <p>$ {priceRange[0]}</p>
        <p>$ {priceRange[1]}</p>
      </div>
      <Slider
        keyboard
        range
        dotStyle={{ color: "blue" }}
        min={100}
        max={2000}
        step={100}
        value={priceRange}
        onChange={handleSliderChange}
      />
    </div>
  );
}
