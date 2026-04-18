"use client"

import aboutElectrician from "@/public/electrician-about.png"
import aboutBackground from "@/public/electrician-about-background.png"
import gradientOtherSide from "@/public/gradient-other-side.png"
import Image from "next/image"
import { useDataContext } from "../DataProvider"

export default function OtherAbouts() {
  const data = useDataContext()

  return (
    <section
      id="about"
      className="grid grid-cols-[1fr_1fr] items-center h-screen"
      style={{ backgroundImage: `url("${aboutBackground.src}")` }}
    >
      <Image
        src={aboutElectrician}
        alt="Electrician"
        width={aboutElectrician.width}
        height={aboutElectrician.height}
        className="object-contain h-screen pt-15"
      />

      <div
        className="flex flex-col justify-center gap-4 h-screen pr-20"
        style={{ backgroundImage: `url("${gradientOtherSide.src}")` }}
      >
        <h1 className="text-5xl text-brand-white font-bold">{data.content.about.h1}</h1>
        <p className="text-lg text-brand-white font-[600]">{data.content.about.p}</p>
        <h3 className="text-2xl text-brand-white font-bold">{data.content.about.h3}</h3>
      </div>
    </section>
  )
}