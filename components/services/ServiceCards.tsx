"use client"

import { StaticImageData } from "next/image"
import { useDataContext } from "../DataProvider"
import ServiceCard from "./ServiceCard"

export default function ServiceCards() {
  const data = useDataContext()

  return (
    <div className="flex flex-col gap-5 lg:flex-row lg:flex-wrap lg:justify-center">
      {data.content.services.serviceCards.map((el: { icon: StaticImageData, title: string }, index: number) =>
        <ServiceCard key={index} icon={el.icon} title={el.title} />
      )}
    </div>
  )
}