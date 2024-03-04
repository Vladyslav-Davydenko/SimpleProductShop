"use client";

import { usePathname, useSearchParams } from "next/navigation";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { ChevronUpIcon } from "@heroicons/react/24/outline";

import clsx from "clsx";

export const gendersFilter = ["M", "F", "U"];

interface Props {
  genders: string[];
}

export default function GendersFilter({ genders }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const updateUrlParams = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    const genders = params.get("genders")?.split(",") || [];
    if (genders.includes(value)) {
      console.log();
      const updatedValue = genders.filter((gender) => gender !== value);
      if (updatedValue.length > 0)
        params.set("genders", updatedValue.join(","));
      else params.delete("genders");
    } else {
      const updatedValue = [...genders, value];
      params.set("genders", updatedValue.join(","));
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const handleToggleCheckBox = (value: string) => {
    updateUrlParams(value);
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
              checked={genders.includes(gender)}
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
