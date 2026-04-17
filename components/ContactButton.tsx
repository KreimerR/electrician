"use client"

import Link from "next/link";
import { useContentContext } from "./ContentProvider";

export default function ContactButton() {
  const content = useContentContext()

  return (
    <Link
      href="#contact"
      className="py-2 px-4 bg-brand text-lg text-center text-brand-darker font-[600] rounded-2xl transition-all hover:cursor-pointer hover:bg-brand-dark"
    >
      {content.button}
    </Link>
  )
}