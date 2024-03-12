"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useCart } from "@/app/_providers/Cart";

import { Bars3Icon } from "@heroicons/react/24/outline";
import { useState } from "react";

const links = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "About", href: "/about" },
];

export default function NavBar() {
  const { cartTotal, cartIsEmpty } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const pathName = usePathname();

  const cartClasses = clsx({
    "hover:opacity-100 transition-opacity duration-300 bg-blue-500 rounded-full px-6 py-2 text-white":
      true,
    "opacity-80": "/cart" !== pathName,
    "opacity-100": "/cart" === pathName,
  });
  return (
    <nav>
      <div
        className={`flex flex-col md:hidden gap-10 items-center fixed top-0 left-0 overflow-hidden backdrop-blur-md bg-black/50 pt-20 pb-10 z-20 transition-all duration-300 ${
          isOpen ? "w-[35%] p-4" : "w-[0px] p-0"
        }`}
      >
        {links.map((link) => {
          const classNames = clsx({
            "hover:opacity-100 transition-opacity duration-300 border-b-2 border-white pb-4 w-full text-start":
              true,
            "opacity-90": link.href !== pathName,
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
      <div className="flex justify-between items-center py-4 pr-6 md:px-20 fixed right-0 left-0 top-0 backdrop-blur-md bg-black/50 z-20">
        <div
          className="md:hidden p-2 cursor-pointer relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Bars3Icon className="w-6 h-6 ml-6" />
          {!cartIsEmpty && (
            <span className=" bg-red-600 rounded-full absolute block w-5 h-5 text-sm text-center -top-3 -right-3">
              {cartTotal}
            </span>
          )}
        </div>
        <div>
          <Link href={"/"} className=" uppercase text-xl font-bold">
            ProductStore
          </Link>
        </div>
        <div className="hidden md:flex gap-10 items-center">
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
      </div>
    </nav>
  );
}
