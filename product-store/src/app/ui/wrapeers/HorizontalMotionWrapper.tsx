import { fetchPefumes } from "@/app/lib/data";
import HorizontalMotion from "../motions/HorizontalMotion";

export default async function HorizontalMotionWrapper() {
  const cards = await fetchPefumes();
  return <HorizontalMotion cards={cards} />;
}
