"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const gendersFilter = ["M", "F", "U"];

export default function GendersFilter() {
  const [genders, setGenders] = useState<string[]>([]);
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
  return (
    <div className="py-8 border-t-2 border-white">
      <p className="uppercase font-semibold text-sm opacity-80 mb-10">
        Genders
      </p>
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
