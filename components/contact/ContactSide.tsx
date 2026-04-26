"use client"

import { useDataContext } from "../DataProvider"
import Form from "./Form"

export default function ContactSide() {
  const data = useDataContext()

  return (
    <div className="flex flex-col items-center gap-7 lg:pt-20 w-[800px]">
      <h1
        className={`text-4xl text-brand-white font-bold w-full ${data.lang === "he" ? "text-right" : "text-left"}`}
      >
        {data.content.contact.h1}
      </h1>

      <Form />

      <div className="w-full">
        <h3
          className={`w-full text-3xl text-brand-white font-[600] ${data.lang === "he" && "text-right"}`}
        >
          {data.content.contact.callTitle}
        </h3>
        <h3
          className={`w-full text-3xl text-brand-white font-[600] ${data.lang === "he" && "text-right"}`}
        >
          {data.content.contact.callPhone}
        </h3>
      </div>
    </div>
  )
}