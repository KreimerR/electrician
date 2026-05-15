"use client"

import { scrollToSection } from "@/helper";
import { useDataContext } from "../DataProvider";
import Nav from "./Nav";
import HeaderButtons from "./HeaderButtons";

export default function Header() {
  const data = useDataContext()

  return (
    <header className="flex justify-between items-center w-screen fixed top-0 left-0 p-5 z-10">
      <button
        onClick={() => scrollToSection("home")}
        className="text-2xl text-brand-white font-bold transition-all hover:cursor-pointer hover:text-brand-white-darker drop-shadow-sm"
      >
        {data.content.logo}
      </button>

      <Nav modal={false} setIsMenuOpen={false} />
      <HeaderButtons />
    </header>
  )
}