import Image, { StaticImageData } from "next/image";
import { scrollToSection } from "@/helper";

export default function ServiceCard({ icon, title, lang }: { icon: StaticImageData, title: string, lang: "en" | "he" | "ru" }) {
  return (
    <div
      onClick={() => scrollToSection("contact")}
      className="grid grid-rows-[1fr_1fr] 2xl:w-[300px] relative"
    >
      <Image
        src={icon}
        alt="Service card"
        width={icon.width}
        height={icon.height}
        className="object-cover w-full h-[90px] 2xl:h-[140px] rounded-t-2xl"
      />

      <div
        className="absolute top-0 left-0 w-full h-[180px] 2xl:w-[300px] 2xl:h-[270px] bg-black opacity-0 rounded-2xl transition-all hover:cursor-pointer hover:opacity-20"
      />

      <div className="p-3 bg-brand-white rounded-b-2xl 2xl:h-[130px]">
        <h3
          className={`
            text-2xl text-brand-black font-bold 
            ${lang === "he" && "text-right"}
          `}
        >
          {title}
        </h3>
      </div>
    </div>
  )
}