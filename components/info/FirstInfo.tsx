"use client"

import { useDataContext } from "../DataProvider"

export default function FirstInfo() {
  const data = useDataContext()

  return (
    <section className="h-[100px] bg-brand-black px-20 flex justify-between items-center gap-5">
      {data.content.firstInfo.map((el: string, index: number) =>
        <h1 key={index} className="text-2xl text-brand-white font-bold">{el}</h1>
      )}
    </section>
  )
}