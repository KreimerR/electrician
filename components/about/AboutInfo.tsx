"use client"

import { useDataContext } from "../DataProvider"

export default function AboutInfo() {
  const data = useDataContext()

  return (
    <div className={`flex flex-col justify-center gap-4 h-screen lg:pr-20 px-5 lg:px-0 ${data.lang === "he" && "text-right"} z-5`}>
      <h1 className="text-5xl text-brand-white font-bold">{data.content.about.h1}</h1>
      <p className="text-lg text-brand-white font-semibold">{data.content.about.p}</p>
      <h3 className="text-2xl text-brand-white font-bold">{data.content.about.h3}</h3>
    </div>
  )
}