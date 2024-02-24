"use client";

export default function Greetings() {
  const handleGoShooping = () => {
    const scrollToItem = document.querySelector(
      "#product-content"
    ) as HTMLElement;
    if (scrollToItem) {
      window.scrollTo({
        top: scrollToItem.offsetTop - 20,
      });
    }
  };
  return (
    <div className=" min-h-full flex items-center justify-center flex-col gap-8 main-section min-w-full">
      <h1 className=" text-4xl font-bold tracking-wide text-center">
        Welcome to Product store
      </h1>
      <p className="w-[80%] md:w-[50%] leading-relaxed text-center tracking-wider">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates
        esse, ex soluta sapiente labore ut modi fugiat, sit illo ipsa minus
        dolorem aperiam. Aperiam, suscipit vero commodi porro cupiditate nihil!
      </p>
      <button
        className=" opacity-80 hover:opacity-100 transition-opacity duration-300 bg-blue-400 rounded-full px-6 py-2 text-white text-center"
        onClick={handleGoShooping}
      >
        Go Shopping
      </button>
    </div>
  );
}
