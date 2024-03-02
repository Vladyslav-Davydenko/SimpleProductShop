"use client";

import { ArrowsUpDownIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function ProductSearchUnderBar() {
  const pathname = usePathname();
  const { replace } = useRouter();

  // Process of extracting required filters and filtering them (looks awful)
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const filters = Array.from(params.keys());
  const filteredParams = filters.filter((param) => {
    if (param === "page") return;
    if (param === "minPrice" && params.get("minPrice") === "0") return;
    if (param === "maxPrice" && params.get("maxPrice") === "2000") return;
    return param;
  });

  const handleClearFilter = (filter: string) => {
    if (filter === "minPrice") params.set("minPrice", "0");
    else if (filter === "maxPrice") params.set("maxPrice", "2000");
    else params.delete(filter);
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex justify-between items-center px-6 py-2 w-full">
      <div className="flex gap-2 items-center">
        <p>Filters: </p>
        <div className="flex gap-2 items-center">
          {filteredParams.map((filter) => {
            return (
              <button
                key={`${filter}-button`}
                className="flex gap-1 items-center opacity-80 hover:opacity-100 transition-all duration-300 bg-blue-500 rounded-full px-3 py-2 text-white hover:-translate-y-0.5 active:translate-y-0.5 disabled:bg-gray-500 disabled:transform-none"
                onClick={() => handleClearFilter(filter)}
              >
                {filter}
                <XMarkIcon className="h-4 w-4" />
              </button>
            );
          })}
        </div>
      </div>
      <ArrowsUpDownIcon className="h-6 w-6" />
    </div>
  );
}
