import Link from "next/link"
import ContactButton from "../ContactButton"
import { languages } from "@/helper"

export default function HeaderButtons() {
  return (
    <div className="flex items-center gap-3">
      {languages.map((el: { href: string, title: string }, index: number) =>
        <Link
          key={index}
          href={el.href}
          className="text-lg text-brand-white font-[600] transition-all hover:text-brand-white-darker"
        >
          {el.title}
        </Link>
      )}

      <ContactButton />
    </div>
  )
}