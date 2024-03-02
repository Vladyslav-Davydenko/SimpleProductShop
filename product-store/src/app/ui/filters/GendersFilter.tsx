"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { ChevronUpIcon } from "@heroicons/react/24/outline";

import clsx from "clsx";

export const gendersFilter = ["M", "F", "U"];

export default function GendersFilter() {
  const [genders, setGenders] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const updateUrlParams = useDebouncedCallback(() => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (genders && genders[0]) params.set("genders", genders.join(","));
    else params.delete("genders");
    replace(`${pathname}?${params.toString()}`);
  }, 500);

  useEffect(() => {
    updateUrlParams();
  }, [genders, updateUrlParams]);

  const divClasses = clsx({
    "py-8 border-t-2 border-white transition-all duration-300": true,
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
        <p className="uppercase font-semibold text-sm opacity-80">Genders</p>
        <ChevronUpIcon className={iconClasses} />
      </div>
      {gendersFilter.map((gender) => {
        return (
          <div key={gender} className="flex gap-2 p-2 hover:cursor-pointer ">
            <input
              type="checkbox"
              id={`${gender}-input`}
              onChange={() => {
                if (genders.includes(gender))
                  setGenders(genders.filter((b) => b !== gender));
                else setGenders([...genders, gender]);
              }}
            />
            <label htmlFor={`${gender}-input`} className="hover:cursor-pointer">
              {gender === "M" ? "Male" : gender === "F" ? "Female" : "Unisex"}
            </label>
          </div>
        );
      })}
    </div>
  );
}
