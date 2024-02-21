"use client";

import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { Suspense } from "react";
import { CardSquareSceleton } from "../sceletons/sceletons";

import Card from "../card/Card";
import { CardType } from "@/app/_types/Card";

interface HorizontalMotionProps {
  cards: CardType[];
}

export default function HorizontalMotion({ cards }: HorizontalMotionProps) {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-60%"]);

  return (
    <section
      ref={targetRef}
      className="relative h-[600vh] border-b-white border-t-white border-2"
    >
      <div className="sticky top-0 flex h-screen w-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8">
          {cards.map((card) => {
            return (
              <Suspense key={card.id} fallback={<CardSquareSceleton />}>
                <Card card={card} key={card.id} />{" "}
              </Suspense>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
