"use client"

import { useDataContext } from "./DataProvider"

export default function Info({ type }: { type: "first" | "second" }) {
  const data = useDataContext()

  const title = (el: string, index: number) => {
    return (
      <div
        key={index}
        className="w-full bg-gray-800 text-center p-2 rounded-2xl"
      >
        <h3
          className="text-2xl text-brand-white font-bold"
        >
          {el}
        </h3>
      </div>
    )
  }

  return (
    <section className="2xl:h-[100px] bg-brand-black px-5 py-5 2xl:py-0 2xl:px-10 flex flex-col 2xl:flex-row 2xl:justify-between items-center gap-5">
      {type === "first" ? (
        data.content.firstInfo.map((el: string, index: number) => title(el, index))
      ) : (
        data.content.secondInfo.map((el: string, index: number) => title(el, index))
      )}
    </section>
  )
}