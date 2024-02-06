import HorizontalMotion from "../ui/motions/HorizontalMotion";

export default function Products() {
  return (
    <main className="h-[800vh] flex items-center flex-col">
      <div className="flex h-[100vh] w-full items-center justify-center main-section ">
        <span className="font-semibold uppercase text-xl">Best Perfumes</span>
      </div>
      <HorizontalMotion />
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase">Next Section</span>
      </div>
    </main>
  );
}
