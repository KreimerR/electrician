"use client"

import { useDataContext } from "../DataProvider"
import Input from "./Input"

export default function Form() {
  const data = useDataContext()

  const inputsData = [
    {
      type: "text",
      placeholder: data.content.contact.form.name,
      lang: data.lang,
      element: "input",
    },
    {
      type: "email",
      placeholder: data.content.contact.form.email,
      lang: data.lang,
      element: "input",
    },
    {
      type: "none",
      placeholder: data.content.contact.form.message,
      lang: data.lang,
      element: "textarea",
    },
    {
      type: "none",
      placeholder: data.content.contact.form.submit,
      lang: data.lang,
      element: "submit",
    },
  ]

  return (
    <form className="w-full flex flex-col items-center gap-3">
      <label
        className="w-full text-3xl text-brand-white font-[600]"
      >
        {data.content.contact.form.label}
      </label>

      {inputsData.map((
        el: {
          type: string,
          placeholder: string,
          lang: "en" | "he" | "ru",
          element: string
        },
        index: number
      ) => (
        <Input
          key={index}
          type={el.type}
          placeholder={el.placeholder}
          lang={el.lang}
          element={el.element}
        />
      ))}
    </form>
  )
}