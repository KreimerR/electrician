import Image from "next/image";
import aboutElectrician from "@/public/about/electrician-about.png"
import aboutBackground from "@/public/about/electrician-about-background.png"
import gradientOtherSide from "@/public/assets/gradient-other-side.png"

export default function AboutImages() {
  return (
    <>
      <Image
        src={aboutElectrician}
        alt="Electrician"
        width={aboutElectrician.width}
        height={aboutElectrician.height}
        className="object-contain h-screen pt-15 hidden lg:block rtl:scale-x-[-1]"
      />

      <Image
        src={gradientOtherSide}
        alt="Gradient"
        width={gradientOtherSide.width}
        height={gradientOtherSide.height}
        className="absolute top-0 ltr:right-0 rtl:left-0 object-cover lg:object-containt w-max h-screen z-[-1] rtl:scale-x-[-1]"
      />

      <Image
        src={aboutBackground}
        alt="Background"
        width={aboutBackground.width}
        height={aboutBackground.height}
        className="absolute top-0 left-0 object-cover w-screen h-screen z-[-2] rtl:scale-x-[-1]"
      />
    </>
  )
}