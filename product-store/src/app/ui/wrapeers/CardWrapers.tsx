import HorizontalMotion, { CardType } from "../motions/HorizontalMotion";

import { fetchPefumes } from "@/app/lib/data";

export default async function CardWrapper() {
  const cards: CardType[] = await fetchPefumes();
  return <HorizontalMotion cards={cards} />;
}
