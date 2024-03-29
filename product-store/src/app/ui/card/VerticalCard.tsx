import Image from "next/image";

interface VerticalCardProps {
  url: string;
  title: string;
  description: string;
}

export default function VerticalCard({
  url,
  title,
  description,
}: VerticalCardProps) {
  return (
    <div
      className={`group relative h-[350px]  md:h-[450px] w-[100%] overflow-hidden bg-neutral-200 group border-white border-2`}
    >
      <Image
        src={url}
        alt={title}
        sizes="100%"
        style={{ objectFit: "cover" }}
        priority={true}
        fill
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute bottom-0 w-full h-[40%] bg-gradient-to-t from-black/100 to-black/50 py-8 px-6 text-white backdrop-blur-sm translate-y-48 group-hover:translate-y-0 transition-all group-hover:scale-105 duration-500">
        <div className="flex gap-3">
          <div className="flex flex-col gap-6 w-[100%]">
            <p className="uppercase text-xl font-semibold tracking-wide">
              {title}
            </p>
            <p className="text-sm text-gray-400">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
