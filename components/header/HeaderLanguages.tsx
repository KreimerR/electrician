import { languages } from "@/helper"
import Link from "next/link"

export default function HeaderLanguages({ modal }: { modal: boolean }) {
  return (
    languages.map((el: { href: string, title: string }, index: number) =>
      <Link
        key={index}
        href={el.href}
        className={`text-lg text-brand-white font-[600] transition-all hover:text-brand-white-darker drop-shadow-sm ${modal && "w-full block"}`}
      >
        {el.title}
      </Link>
    )
  )
}