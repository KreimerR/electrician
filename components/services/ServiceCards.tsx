"use client"

import { StaticImageData } from "next/image"
import { useDataContext } from "../DataProvider"
import ServiceCard from "./ServiceCard"

export default function ServiceCards() {
  const data = useDataContext()

  return (
    <div className="flex flex-col gap-5 2xl:grid 2xl:grid-cols-[1fr_1fr_1fr_1fr] 2xl:gap-7">
      {data.content.services.serviceCards.map((el: { icon: StaticImageData, title: string }, index: number) =>
        <ServiceCard key={index} icon={el.icon} title={el.title} lang={data.lang} />
      )}
    </div>
  )
} 