"use client";

import { FC, ReactNode } from "react";

import { CartProvider } from "./Cart";

interface ProviderProps {
  children: ReactNode;
}

export const Providers: FC<ProviderProps> = ({ children }) => {
  return <CartProvider>{children}</CartProvider>;
};
