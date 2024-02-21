import { CardType } from "./Card";

export type CartItem = {
  item: CardType;
  quantity: number | undefined;
};
