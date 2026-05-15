"use client"

import { useDataContext } from "../DataProvider";
import { scrollToSection } from "@/helper";

export default function Nav({ modal, setIsMenuOpen }: { modal: boolean, setIsMenuOpen: any | boolean }) {
  const data = useDataContext()

  const openSection = (el: string) => {
    if (setIsMenuOpen !== false) {
      setIsMenuOpen(false)
    }

    scrollToSection(el)
  }

  return (
    <nav className={modal ? "w-full" : "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block"}>
      <ul className={`flex ${modal ? "flex-col gap-2" : "items-center gap-5"}`}>
        {data.content.nav.map((el: { id: string, title: string }, index: number) =>
          <li key={index}>
            <button
              onClick={() => modal ? openSection(el.id) : scrollToSection(el.id)}
              className="text-lg text-brand-white font-[600] transition-all hover:cursor-pointer hover:text-brand-white-darker drop-shadow-sm"
            >
              {el.title}
            </button>
          </li>
        )}
      </ul>
    </nav>
  )
}