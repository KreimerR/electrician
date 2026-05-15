"use client"

import { useDataContext } from "./DataProvider"
import { useEffect, useRef } from "react"

export default function Info({ type }: { type: "first" | "second" }) {
  const data = useDataContext()
  const items = type === "first"
    ? data.content.firstInfo
    : data.content.secondInfo

  const tickerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ticker = tickerRef.current
    if (!ticker) return

    const pause = () => ticker.style.animationPlayState = "paused"
    const play = () => ticker.style.animationPlayState = "running"

    ticker.addEventListener("mouseenter", pause)
    ticker.addEventListener("mouseleave", play)

    return () => {
      ticker.removeEventListener("mouseenter", pause)
      ticker.removeEventListener("mouseleave", play)
    }
  }, [])

  const title = (el: string, index: number, count: number) => {
    return (
      <div
        key={`${type}-${count}-${index}`}
        className="bg-gray-800 text-2xl text-brand-white text-center font-bold px-8 py-3 rounded-2xl"
      >
        {el}
      </div>
    )
  }

  return (
    <section
      className="bg-brand-black py-6 overflow-hidden"
      dir="ltr"
    >
      <div
        ref={tickerRef}
        className="flex gap-8 md:gap-12 lg:gap-16 animate-ticker"
      >
        {new Array(1, 2, 3, 4).map((number: number) => items.map((el: string, index: number) => title(el, index, number)))}
      </div>
    </section>
  )
}