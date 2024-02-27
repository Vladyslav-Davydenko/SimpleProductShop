import { fetchLatestPerfumes } from "@/app/lib/data";
import HorizontalMotion from "../motions/HorizontalMotion";

export default async function HorizontalMotionWrapper() {
  const cards = await fetchLatestPerfumes();
  return <HorizontalMotion cards={cards} />;
}
