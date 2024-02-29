"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Slider from "rc-slider";
import { useEffect, useRef, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

export default function ProductFilters() {
  const [priceRange, setPriceRange] = useState<number[]>([0, 100]);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const updateUrlParams = useDebouncedCallback(() => {
    const params = new URLSearchParams(searchParams);
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

  const handleSliderChange = (value: number | number[]) => {
    if (typeof value === "number") {
      setPriceRange([0, value]);
    } else {
      setPriceRange(value);
    }
  };
  return (
    <div className="w-[20%] flex flex-col gap-6 items-start justify-center h-full">
      <p className="uppercase font-semibold text-md opacity-80 mb-10">
        Filters
      </p>
      <div className="w-full ">
        <div className="py-8 border-t-2 border-white">
          <p className="uppercase font-semibold text-sm opacity-80 mb-10">
            Price Range
          </p>
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
      </div>
    </div>
  );
}
