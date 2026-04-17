"use client"

import Link from "next/link";
import { useContentContext } from "./ContentProvider";
import Nav from "./Nav";
import ContactButton from "./ContactButton";

export default function Header() {
  const content = useContentContext()

  const languages = [
    {
      href: "/he",
      title: "עבר"
    },
    {
      href: "/en",
      title: "Eng"
    },
    {
      href: "/ru",
      title: "Рус"
    },
  ]

  return (
    <header className="flex justify-between items-center w-screen fixed top-0 left-0 p-5">
      <Link
        href="/"
        className="text-2xl text-brand font-bold"
      >
        {content.logo}
      </Link>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <Nav />
      </div>

      <div className="flex items-center gap-3">
        {languages.map((el: { href: string, title: string }, index: number) =>
          <Link
            key={index}
            href={el.href}
            className="text-lg text-brand font-[600] transition-all hover:text-brand-dark"
          >
            {el.title}
          </Link>
        )}

        <ContactButton />
      </div>
    </header>
  )
}