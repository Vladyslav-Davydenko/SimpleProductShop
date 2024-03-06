import { CardType } from "./Card";

export interface SortingOptions {
  name: keyof CardType;
  nameUI: string;
  order: "asc" | "desc";
}
