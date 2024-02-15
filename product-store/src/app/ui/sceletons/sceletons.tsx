// Loading animation
const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-gray-900/60 before:to-transparent";

export const CardVerticalSceleton = () => {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-xl bg-black p-2 shadow-sm h-[450px] w-[30%] border-white border-2`}
    ></div>
  );
};

export const CardSquareSceleton = () => {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-xl bg-black p-2 shadow-sm h-[450px] w-[450px] border-white border-2`}
    ></div>
  );
};
