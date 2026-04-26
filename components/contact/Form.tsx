"use client"

import { useDataContext } from "../DataProvider"
import Input from "./Input"

export default function Form() {
  const data = useDataContext()

  return (
    <form className="w-full flex flex-col items-center gap-3">
      <label
        className={`w-full text-3xl text-brand-white font-[600] ${data.lang === "he" && "text-right"}`}
      >
        {data.content.contact.form.label}
      </label>

      <Input
        type="text"
        placeholder={data.content.contact.form.name}
        lang={data.lang}
        element="input"
      />

      <Input
        type="email"
        placeholder={data.content.contact.form.email}
        lang={data.lang}
        element="input"
      />

      <Input
        type="none"
        placeholder={data.content.contact.form.message}
        lang={data.lang}
        element="textarea"
      />

      <Input
        type="none"
        placeholder={data.content.contact.form.submit}
        lang={data.lang}
        element="submit"
      />
    </form>
  )
}