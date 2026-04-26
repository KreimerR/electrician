import Image from "next/image";
import contactElectricianOtherSide from "@/public/contact/electrician-contact-other-side.png"
import ContactSide from "./ContactSide";

export default function OtherContacts() {
  return (
    <>
      <Image
        src={contactElectricianOtherSide}
        alt="Electrician"
        width={contactElectricianOtherSide.width}
        height={contactElectricianOtherSide.height}
        className="object-contain w-auto hidden lg:block"
      />
      <ContactSide />
    </>
  )
}