"use client"

import heroBackground from "@/public/electrician-background.png"
import heroElectrician from "@/public/electrician-transparent.png"
import gradient from "@/public/gradient.png"
import Image from "next/image"
import { useContentContext } from "./ContentProvider"
import ContactButton from "./ContactButton"

export default function Hero() {
  const content = useContentContext()

  return (
    <section
      className="grid grid-cols-[1fr_1fr] items-center max-h-screen"
      style={{ backgroundImage: `url("${heroBackground.src}")` }}
    >
      <div
        className="flex flex-col justify-center items-center h-full gap-5 p-10"
        style={{ backgroundImage: `url("${gradient.src}")` }}
      >
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl text-brand text-center font-bold">{content.hero.h1}</h1>
          <h2 className="text-lg text-brand text-center font-[600]">{content.hero.h2}</h2>
        </div>

        <ContactButton />
      </div>

      <Image
        src={heroElectrician}
        alt="Electrician"
        width={heroElectrician.width}
        height={heroElectrician.height}
        className="object-contain max-h-screen pt-15"
      />
    </section>
  )
}