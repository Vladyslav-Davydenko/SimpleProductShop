import HorizontalMotion from "../ui/motions/HorizontalMotion";

export default function Products() {
  return (
    <div className="mt-24">
      <div className="flex h-[100dvh] items-center justify-center">
        <span className="font-semibold uppercase text-xl">Best Perfumes</span>
      </div>
      <HorizontalMotion />
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase">Next Section</span>
      </div>
    </div>
  );
}
