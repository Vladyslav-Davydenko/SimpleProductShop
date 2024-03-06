"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ArrowsUpDownIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { CardType } from "@/app/_types/Card";

interface SortingOptions {
  name: keyof CardType;
  nameUI: string;
  order: "asc" | "desc";
}

const sortingOptions: SortingOptions[] = [
  {
    name: "title",
    nameUI: "title: A-Z",
    order: "asc",
  },
  {
    name: "title",
    nameUI: "title: Z-A",
    order: "desc",
  },
  {
    name: "price",
    nameUI: "price: lowest-highest",
    order: "asc",
  },
  {
    name: "price",
    nameUI: "price: highest-lowest",
    order: "desc",
  },
  {
    name: "date",
    nameUI: "date: oldest-newest",
    order: "asc",
  },
  {
    name: "date",
    nameUI: "date: newest-oldest",
    order: "desc",
  },
];

interface Props {
  sortedBy: keyof CardType;
  sortingOrder: "asc" | "desc";
}

export default function ProductSearchUnderBar({
  sortedBy,
  sortingOrder,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [sortChosen, setSortChosen] = useState(sortedBy);
  const pathname = usePathname();
  const { replace } = useRouter();

  useEffect(() => {
    setSortChosen(sortedBy);
  }, [sortedBy]);

  // Process of extracting required filters and filtering them (looks awful)
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const filters = Array.from(params.keys());
  const filteredParams = filters.filter((param) => {
    if (param === "page") return;
    if (param === "sorted-by") return;
    if (param === "sorting-order") return;
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

  const handleChangeSort = (sort: SortingOptions) => {
    if (sort) {
      params.set("sorted-by", sort.name);
      params.set("sorting-order", sort.order);
    } else {
      params.delete("sorted-by");
      params.delete("sorting-order");
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
        <ul
          className={`absolute left-0 bottom-0 w-[12rem] p-4 pt-0 rounded-md backdrop-blur-md bg-black/70 z-10 translate-y-full -translate-x-[75%] overflow-hidden transition-all duration-300 ${
            isOpen ? "h-[24rem]" : "h-0"
          }`}
        >
          {sortingOptions.map((sortingOption) => {
            return (
              <li
                key={`sorting-${sortingOption.nameUI}`}
                className={`border-b-2 border-white ${
                  sortingOption.name === sortChosen &&
                  sortingOption.order === sortingOrder
                    ? "opacity-100"
                    : "opacity-70"
                } text-sm first-letter:uppercase px-2 py-4 hover:opacity-100 transition-opacity cursor-pointer`}
                onClick={() => handleChangeSort(sortingOption)}
              >
                {sortingOption.nameUI}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
