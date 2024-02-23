"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useCart } from "@/app/_providers/Cart";

const links = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "About", href: "/about" },
];

export default function NavBar() {
  const { cartTotal, cartIsEmpty } = useCart();

  const pathName = usePathname();

  const cartClasses = clsx({
    "hover:opacity-100 transition-opacity duration-300 bg-blue-400 rounded-full px-6 py-2 text-white":
      true,
    "opacity-80": "/cart" !== pathName,
    "opacity-100": "/cart" === pathName,
  });
  return (
    <nav className="flex justify-between items-center py-4 px-20 fixed right-0 left-0 top-0 backdrop-blur-md bg-black/50 z-20">
      <div>
        <p className=" uppercase text-xl font-bold">ProductStore</p>
      </div>
      <div className="flex gap-10 items-center">
        {links.map((link) => {
          const classNames = clsx({
            "hover:opacity-100 transition-opacity duration-300": true,
            "opacity-80": link.href !== pathName,
            "opacity-100": link.href === pathName,
          });
          return (
            <Link key={link.href} href={link.href} className={classNames}>
              <p className=" text-lg font-semibold">{link.name}</p>
            </Link>
          );
        })}
        <Link key="/cart" href="/cart" className={cartClasses + " relative"}>
          {!cartIsEmpty && (
            <span className=" bg-red-600 rounded-full p-1 absolute block w-8 h-8 text-center -top-3 -right-3">
              {cartTotal}
            </span>
          )}
          <p className=" text-lg font-semibold">Cart</p>
        </Link>
      </div>
    </nav>
  );
}
