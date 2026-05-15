"use client"

import { useDataContext } from "./DataProvider";
import { scrollToSection } from "@/helper";

export default function ContactButton() {
  const data = useDataContext()

  return (
    <button
      onClick={() => scrollToSection("contact")}
      className="py-2 px-4 bg-brand-white text-lg text-center text-brand-black font-[600] rounded-2xl transition-all hover:cursor-pointer hover:bg-brand-white-darker drop-shadow-sm"
    >
      {data.content.button}
    </button>
  )
}