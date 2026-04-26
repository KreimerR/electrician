"use client"

import { scrollToSection } from "@/helper";
import { useDataContext } from "../DataProvider";
import HeaderButtons from "./HeaderButtons";
import Nav from "./Nav";

export default function OtherHeaders() {
  const data = useDataContext()

  return (
    <>
      <button
        onClick={() => scrollToSection("home")}
        className="text-2xl text-brand-white font-bold transition-all hover:cursor-pointer hover:text-brand-white-darker"
      >
        {data.content.logo}
      </button>

      <Nav />
      <HeaderButtons />
    </>
  )
}