"use client"

import { useDataContext } from "./DataProvider"

export default function Footer() {
  const data = useDataContext()

  return (
    <footer className="bg-gray-950 w-full p-10 text-lg text-white text-center font-[600]">
      © {new Date().getFullYear()} {data.content.footer}
    </footer>
  )
}