"use client"

import { useDataContext } from "../DataProvider";
import { scrollToSection } from "@/helper";
import HeaderButtons from "./HeaderButtons";
import Nav from "./Nav";

export default function HebrewHeader() {
  const data = useDataContext()

  return (
    <>
      <HeaderButtons />
      <Nav />

      <button
        onClick={() => scrollToSection("home")}
        className="text-2xl text-brand-white font-bold transition-all hover:cursor-pointer hover:text-brand-white-darker"
      >
        {data.content.logo}
      </button>
    </>
  )
}