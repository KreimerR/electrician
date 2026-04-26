import Image from "next/image";
import contactElectrician from "@/public/contact/electrician-contact.png"
import ContactSide from "./ContactSide";

export default function HebrewContact() {
  return (
    <>
      <ContactSide />
      <Image
        src={contactElectrician}
        alt="Electrician"
        width={contactElectrician.width}
        height={contactElectrician.height}
        className="object-contain w-auto hidden lg:block"
      />
    </>
  )
}