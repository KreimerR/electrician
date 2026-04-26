"use client"

import { useDataContext } from "../DataProvider"
import HebrewContact from "./HebrewContact"
import OtherContacts from "./OtherContacts"

export default function Contact() {
  const data = useDataContext()

  return (
    <section
      id="contact"
      className="lg:h-screen bg-gray-900 flex justify-between gap-5 px-5 py-20 lg:px-20 lg:pt-20 lg:pb-0"
    >
      {data.lang === "he" ? <HebrewContact /> : <OtherContacts />}
    </section>
  )
}