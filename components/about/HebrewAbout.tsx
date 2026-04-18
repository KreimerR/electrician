"use client"

import aboutElectricianOtherSide from "@/public/electrician-about-other-side.png"
import aboutBackgroundOtherSide from "@/public/electrician-about-background-other-side.png"
import gradient from "@/public/gradient.png"
import Image from "next/image"
import { useDataContext } from "../DataProvider"

export default function HebrewAbout() {
  const data = useDataContext()

  return (
    <section
      id="about"
      className="grid grid-cols-[1fr_1fr] items-center h-screen"
      style={{ backgroundImage: `url("${aboutBackgroundOtherSide.src}")` }}
    >
      <div
        className="flex flex-col justify-center gap-4 h-screen pr-20 text-right"
        style={{ backgroundImage: `url("${gradient.src}")` }}
      >
        <h1 className="text-5xl text-brand-white font-bold">{data.content.about.h1}</h1>
        <p className="text-lg text-brand-white font-[600]">{data.content.about.p}</p>
        <h3 className="text-2xl text-brand-white font-bold">{data.content.about.h3}</h3>
      </div>

      <Image
        src={aboutElectricianOtherSide}
        alt="Electrician"
        width={aboutElectricianOtherSide.width}
        height={aboutElectricianOtherSide.height}
        className="object-contain h-screen pt-15"
      />
    </section >
  )
}