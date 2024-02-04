"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "About", href: "/about" },
  { name: "Cart", href: "/cart" },
];

export default function NavBar() {
  const pathName = usePathname();
  return (
    <nav className="flex justify-between items-center py-4 px-20 fixed right-0 left-0">
      <div>
        <p className=" uppercase text-xl font-bold">ProductStore</p>
      </div>
      <div className="flex gap-10 items-center">
        {links.map((link) => {
          const classNames = clsx({
            "hover:opacity-100 transition-opacity duration-300": true,
            "opacity-80": link.href !== pathName,
            "opacity-100": link.href === pathName,
            "bg-blue-400 rounded-full px-6 py-2 text-white":
              link.name === "Cart",
          });
          return (
            <Link key={link.href} href={link.href} className={classNames}>
              <p className=" text-lg font-semibold">{link.name}</p>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
