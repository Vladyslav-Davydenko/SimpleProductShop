"use client";

import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";

import Card from "../card/Card";

export type CardType = {
  url: string;
  title: string;
  id: number;
};

const cards: CardType[] = [
  {
    url: "/perfumes/alfred-guzman-v6Rj0WB6F0I-unsplash.jpg",
    title: "Alfred Guzman",
    id: 1,
  },
  {
    url: "/perfumes/jeroen-den-otter-2b0JeJTEclQ-unsplash.jpg",
    title: "Jeroen Den Otter",
    id: 2,
  },
  {
    url: "/perfumes/laura-chouette-4sKdeIMiFEI-unsplash.jpg",
    title: "Laura Chouette",
    id: 3,
  },
  {
    url: "/perfumes/marisa-garrido-3aql6Y9LKFo-unsplash.jpg",
    title: "Marisa Garrido",
    id: 4,
  },
  {
    url: "/perfumes/laura-chouette-gbT2KAq1V5c-unsplash.jpg",
    title: "Laura Chouette",
    id: 5,
  },
  {
    url: "/perfumes/vishal-banik-OhBmysUAjio-unsplash.jpg",
    title: "Maxim Lozyanko",
    id: 6,
  },
  {
    url: "/perfumes/parth-natani-uqJdOfHGb-w-unsplash.jpg",
    title: "Alfred Guzman",
    id: 7,
  },
];

export default function HorizontalMotion() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-60%"]);

  return (
    <section
      ref={targetRef}
      className="relative h-[600vh] border-t-2 border-b-2 border-white w-full"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
}
