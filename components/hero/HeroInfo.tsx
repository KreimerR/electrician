"use client"

import ContactButton from "../ContactButton";
import { useDataContext } from "../DataProvider";

export default function HeroInfo() {
  const data = useDataContext()

  return (
    <div className="flex flex-col justify-center items-center h-full gap-5 p-10 z-5">
      <div className="flex flex-col gap-2 text-brand-white text-center drop-shadow-lg">
        <h1 className="text-4xl lg:text-5xl font-bold">{data.content.hero.h1}</h1>
        <h2 className="text-lg font-[600]">{data.content.hero.h2}</h2>
      </div>

      <ContactButton />
    </div>
  )
}