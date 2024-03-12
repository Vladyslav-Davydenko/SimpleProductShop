import ProductGenders from "./ui/sections/ProductGenders";
import { Suspense } from "react";
import { CardSquareSceleton } from "./ui/sceletons/sceletons";
import HorizontalMotionWrapper from "./ui/wrapeers/HorizontalMotionWrapper";
import Greetings from "./ui/sections/Greetings";
import Divider from "./ui/sections/Divider";

export default function Home() {
  return (
    <main className="h-[400vh] md:h-[900vh] flex items-center flex-col scroll-smooth">
      <Greetings />
      <Divider />
      <ProductGenders />
      <Suspense fallback={<CardSquareSceleton />}>
        <HorizontalMotionWrapper />
      </Suspense>
    </main>
  );
}
