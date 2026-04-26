"use client"

import heroBackground from "@/public/hero/electrician-background.png"
import heroElectrician from "@/public/hero/electrician-transparent.png"
import gradient from "@/public/assets/gradient.png"
import Image from "next/image"
import { useDataContext } from "./DataProvider"
import ContactButton from "./ContactButton"

export default function Hero() {
  const data = useDataContext()

  return (
    <section
      id="home"
      className="lg:grid lg:grid-cols-[1fr_1fr] items-center h-screen"
    >
      <div className="flex flex-col justify-center items-center h-full gap-5 p-10 z-5">
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl text-brand-white text-center font-bold">{data.content.hero.h1}</h1>
          <h2 className="text-lg text-brand-white text-center font-[600]">{data.content.hero.h2}</h2>
        </div>

        <ContactButton />
      </div>

      <Image
        src={heroElectrician}
        alt="Electrician"
        width={heroElectrician.width}
        height={heroElectrician.height}
        className="object-contain h-screen pt-15 hidden lg:block z-5"
      />

      <Image
        src={gradient}
        alt="Gradient"
        width={gradient.width}
        height={gradient.height}
        className="absolute top-0 left-0 object-cover lg:object-contain w-max h-screen z-[-1]"
      />

      <Image
        src={heroBackground}
        alt="Background"
        width={heroBackground.width}
        height={heroBackground.height}
        className="absolute top-0 left-0 object-right lg:object-center object-cover w-screen h-screen z-[-2]"
      />
    </section>
  )
}