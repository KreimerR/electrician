import Image from "next/image";
import heroBackground from "@/public/hero/electrician-background.png"
import heroElectrician from "@/public/hero/electrician-transparent.png"
import gradient from "@/public/assets/gradient.png"

export default function HeroImages() {
  return (
    <>
      <Image
        src={heroElectrician}
        alt="Electrician"
        width={heroElectrician.width}
        height={heroElectrician.height}
        className="object-contain h-screen pt-15 hidden lg:block z-5 rtl:scale-x-[-1]"
      />

      <Image
        src={gradient}
        alt="Gradient"
        width={gradient.width}
        height={gradient.height}
        className="absolute top-0 ltr:left-0 rtl:right-0 object-cover lg:object-contain w-max h-screen z-[-1] rtl:scale-x-[-1]"
      />

      <Image
        src={heroBackground}
        alt="Background"
        width={heroBackground.width}
        height={heroBackground.height}
        className="absolute top-0 left-0 object-right lg:object-center object-cover w-screen h-screen z-[-2] rtl:scale-x-[-1]"
      />
    </>
  )
}