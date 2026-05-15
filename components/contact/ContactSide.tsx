"use client"

import { useDataContext } from "../DataProvider"
import Form from "./Form"

export default function ContactSide() {
  const data = useDataContext()

  return (
    <div className="flex flex-col items-center gap-7 lg:pt-20 w-[800px] text-brand-white">
      <h1
        className="text-4xl font-bold w-full"
      >
        {data.content.contact.h1}
      </h1>

      <Form />

      <div className="w-full text-3xl font-[600]">
        <h3>{data.content.contact.callTitle}</h3>
        <h3><bdi dir="ltr">{data.content.contact.callPhone}</bdi></h3>
      </div>
    </div>
  )
}