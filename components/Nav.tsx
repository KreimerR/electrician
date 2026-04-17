"use client"

import Link from "next/link";
import { useContentContext } from "./ContentProvider";

export default function Nav() {
  const content = useContentContext()

  return (
    <nav>
      <ul className="flex items-center gap-5">
        {content.nav.map((el: { id: string, title: string }, index: number) =>
          <li key={index}>
            <Link
              href={el.id}
              scroll={false}
              className="text-lg text-brand font-[600] transition-all hover:text-brand-dark"
            >
              {el.title}
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}