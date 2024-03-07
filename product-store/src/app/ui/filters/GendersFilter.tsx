"use client";

import { usePathname, useSearchParams } from "next/navigation";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { ChevronUpIcon } from "@heroicons/react/24/outline";

import clsx from "clsx";
import { useDebouncedCallback } from "use-debounce";

export const gendersFilter = ["M", "F", "U"];

interface Props {
  genders: string;
}

export default function GendersFilter({ genders }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [filteredGenders, setFilteredGenders] = useState(
    genders.split(",")[0] ? genders.split(",") : []
  );
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const updateUrlParams = useDebouncedCallback(() => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (filteredGenders && filteredGenders[0]) {
      params.set("genders", filteredGenders.join(","));
    } else {
      params.delete("genders");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 500);

  useEffect(() => {
    updateUrlParams();
  }, [filteredGenders, updateUrlParams]);

  useEffect(() => {
    if (genders.split(",")[0]) setFilteredGenders(genders.split(","));
    else setFilteredGenders([]);
  }, [genders]);

  const handleToggleCheckBox = (value: string) => {
    if (filteredGenders.includes(value))
      setFilteredGenders(filteredGenders.filter((gender) => gender !== value));
    else setFilteredGenders([...filteredGenders, value]);
  };

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
              checked={filteredGenders.includes(gender)}
              onChange={() => {
                handleToggleCheckBox(gender);
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
