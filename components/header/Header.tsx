"use client"

import { useDataContext } from "../DataProvider";
import Nav from "./Nav";
import HeaderButtons from "./HeaderButtons";
import { scrollToSection } from "@/helper";

export default function Header() {
  const data = useDataContext()

  return (
    <header className="flex justify-between items-center w-screen fixed top-0 left-0 p-5">
      <button
        onClick={() => scrollToSection("home")}
        className="text-2xl text-brand-white font-bold transition-all hover:cursor-pointer hover:text-brand-white-darker"
      >
        {data.content.logo}
      </button>

      <Nav />
      <HeaderButtons />
    </header>
  )
}