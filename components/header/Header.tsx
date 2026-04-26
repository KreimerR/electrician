"use client"

import { useDataContext } from "../DataProvider";
import HebrewHeader from "./HebrewHeader";
import OtherHeaders from "./OtherHeaders";

export default function Header() {
  const data = useDataContext()

  return (
    <header className="flex justify-between items-center w-screen fixed top-0 left-0 p-5 z-10">
      {data.lang === "he" ? <HebrewHeader /> : <OtherHeaders />}
    </header>
  )
}