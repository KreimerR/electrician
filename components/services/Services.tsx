"use client"

import { useDataContext } from "../DataProvider"
import ServiceCards from "./ServiceCards"

export default function Services() {
  const data = useDataContext()

  return (
    <section
      id="services"
      className="2xl:h-screen bg-gray-800 flex flex-col justify-center 2xl:items-center gap-7 px-5 2xl:px-10 py-20 2xl:py-17"
    >
      <h1 className="text-4xl text-center text-brand-white font-bold">{data.content.services.h1}</h1>
      <ServiceCards />
    </section>
  )
}