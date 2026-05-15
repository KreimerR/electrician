import Image from "next/image"
import contactElectricianOtherSide from "@/public/contact/electrician-contact-other-side.png"
import ContactSide from "./ContactSide"

export default function Contact() {
  return (
    <section
      id="contact"
      className="lg:h-screen bg-gray-900 flex justify-between gap-5 px-5 py-20 lg:px-20 lg:pt-20 lg:pb-0"
    >
      <Image
        src={contactElectricianOtherSide}
        alt="Electrician"
        width={contactElectricianOtherSide.width}
        height={contactElectricianOtherSide.height}
        className="object-contain w-auto hidden lg:block rtl:scale-x-[-1]"
      />

      <ContactSide />
    </section>
  )
}