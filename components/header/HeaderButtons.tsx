"use client"

import ContactButton from "../ContactButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import HeaderLanguages from "./HeaderLanguages"
import ModalMenu from "./ModalMenu"

export default function HeaderButtons() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  return (
    <>
      <div className="hidden lg:flex items-center gap-3">
        <HeaderLanguages modal={false} />
        <ContactButton />
      </div>

      <button
        className="block lg:hidden text-2xl text-brand-white drop-shadow-sm transition-all hover:cursor-pointer hover:text-brand-white-darker z-40"
        onClick={() => setIsMenuOpen((prev: boolean) => !prev)}
      >
        <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} />
      </button>

      <ModalMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </>
  )
}