"use client"

import { useDataContext } from "../DataProvider";
import { scrollToSection } from "@/helper";

export default function Nav() {
  const data = useDataContext()

  return (
    <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <ul className="flex items-center gap-5">
        {data.content.nav.map((el: { id: string, title: string }, index: number) =>
          <li key={index}>
            <button
              onClick={() => scrollToSection(el.id)}
              className="text-lg text-brand-white font-[600] transition-all hover:cursor-pointer hover:text-brand-white-darker"
            >
              {el.title}
            </button>
          </li>
        )}
      </ul>
    </nav>
  )
}