import VerticalCard from "../card/VerticalCard";

export default function ProductGenders() {
  return (
    <div
      className="flex flex-col h-[200vh] w-full items-center justify-center main-section gap-6 py-6 md:gap-32"
      id="product-content"
    >
      <div className="h-[10%] flex items-center justify-center">
        <p className="text-4xl font-bold tracking-wide text-center my-10 px-10">
          Perfumes for everyone
        </p>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-3 h-full w-[80%] gap-8 place-content-center">
        <div className="md:col-span-2 flex items-center justify-center order-2 md:order-1">
          <p className="leading-relaxed text-center md:text-start tracking-wider">
            Explore a collection of premium perfumes designed for everyone. Our
            scents are crafted with precision, offering a unique blend of
            fragrance notes that captivate the senses.
          </p>
        </div>
        <div className="order-1 md:order-2">
          <VerticalCard
            url="/perfumes/womans-perfume-min.jpg"
            title="Blue De Chanel"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis a
              culpa"
          />
        </div>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-3 h-full w-[80%] gap-8 place-content-center">
        <div>
          <VerticalCard
            url="/perfumes/mans-perfume-min.jpg"
            title="Blue De Chanel"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis a
              culpa"
          />
        </div>
        <div className="md:col-span-2 flex items-center justify-center">
          <p className="leading-relaxed text-center md:text-end tracking-wider order-1">
            Indulge in the art of perfumery with scents that define your
            identity. Our collection caters to diverse tastes and preferences,
            ensuring that there is a perfect fragrance for every individual.
          </p>
        </div>
      </div>
    </div>
  );
}
