"use client"

import { useDataContext } from "../DataProvider"

export default function AboutInfo() {
  const data = useDataContext()

  return (
    <div className="flex flex-col justify-center gap-4 h-screen lg:pr-20 px-5 lg:px-0 z-5 text-brand-white drop-shadow-lg">
      <h1 className="text-5xl font-bold">{data.content.about.h1}</h1>
      <p className="text-lg font-semibold">{data.content.about.p}</p>
      <h3 className="text-2xl font-bold">{data.content.about.h3}</h3>
    </div>
  )
}