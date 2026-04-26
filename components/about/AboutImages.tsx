"use client"

import Image from "next/image";
import aboutElectricianOtherSide from "@/public/about/electrician-about-other-side.png"
import aboutBackgroundOtherSide from "@/public/about/electrician-about-background-other-side.png"
import gradient from "@/public/assets/gradient.png"
import aboutElectrician from "@/public/about/electrician-about.png"
import aboutBackground from "@/public/about/electrician-about-background.png"
import gradientOtherSide from "@/public/assets/gradient-other-side.png"
import { useDataContext } from "../DataProvider";

export default function AboutImages() {
  const data = useDataContext()

  return (
    <>
      <Image
        src={data.lang === "he" ? aboutElectricianOtherSide : aboutElectrician}
        alt="Electrician"
        width={data.lang === "he" ? aboutElectricianOtherSide.width : aboutElectrician.width}
        height={data.lang === "he" ? aboutElectricianOtherSide.height : aboutElectrician.height}
        className="object-contain h-screen pt-15 hidden lg:block"
      />

      <Image
        src={data.lang === "he" ? gradient : gradientOtherSide}
        alt="Gradient"
        width={data.lang === "he" ? gradient.width : gradientOtherSide.width}
        height={data.lang === "he" ? gradient.height : gradientOtherSide.height}
        className={`
          absolute top-0 
          ${data.lang === "he" ? "left-0" : "right-0"} 
          object-cover lg:object-containt w-max h-screen z-[-1]
        `}
      />

      <Image
        src={data.lang === "he" ? aboutBackgroundOtherSide : aboutBackground}
        alt="Background"
        width={data.lang === "he" ? aboutBackgroundOtherSide.width : aboutBackground.width}
        height={data.lang === "he" ? aboutBackgroundOtherSide.height : aboutBackground.height}
        className="absolute top-0 left-0 object-cover w-screen h-screen z-[-2]"
      />
    </>
  )
}