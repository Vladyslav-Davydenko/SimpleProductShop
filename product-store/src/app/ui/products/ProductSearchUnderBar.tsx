"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ArrowsUpDownIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { CardType } from "@/app/_types/Card";

const sortingOptions: (keyof CardType)[] = ["title", "price", "date"];

interface Props {
  sortedBy: keyof CardType;
}

export default function ProductSearchUnderBar({ sortedBy }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [sortChosen, setSortChosen] = useState(sortedBy);
  const pathname = usePathname();
  const { replace } = useRouter();

  useEffect(() => {
    setSortChosen(sortedBy);
    console.log(sortChosen);
  }, [sortedBy]);

  // Process of extracting required filters and filtering them (looks awful)
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const filters = Array.from(params.keys());
  const filteredParams = filters.filter((param) => {
    if (param === "page") return;
    if (param === "sortedBy") return;
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

  const handleChangeSort = (sort: keyof CardType) => {
    if (sort) {
      params.set("sortedBy", sort);
    } else {
      params.delete("sortedBy");
    }
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
      <div className="relative">
        <button
          className="flex gap-1 items-center opacity-80 hover:opacity-100 transition-all duration-300 rounded-full px-3 py-2 hover:-translate-y-0.5 active:translate-y-0.5 disabled:bg-gray-500 disabled:transform-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <ArrowsUpDownIcon className="h-6 w-6" />
        </button>
        <div
          className={`absolute left-0 bottom-0 w-36 backdrop-blur-md bg-black/50 z-20 translate-y-full -translate-x-[75%] overflow-hidden transition-all duration-300 ${
            isOpen ? "h-36" : "h-0"
          }`}
        >
          <ul>
            {sortingOptions.map((sortingOption) => {
              return (
                <li
                  key={`sorting-${sortingOption}`}
                  className={`border-b-2 border-white ${
                    sortingOption === sortChosen ? "opacity-100" : "opacity-70"
                  } text-sm uppercase p-2 hover:opacity-100 transition-opacity cursor-pointer`}
                  onClick={() => {
                    handleChangeSort(sortingOption);
                    setIsOpen(false);
                  }}
                >
                  {sortingOption}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
