export default function Input({
  type,
  placeholder,
  lang,
  element
}: {
  type: string,
  placeholder: string,
  lang: "en" | "he" | "ru",
  element: "input" | "textarea" | "submit"
}) {
  if (element === "textarea") {
    return (
      <textarea
        placeholder={placeholder}
        className={`w-full bg-brand-white text-2xl font-[600] text-brand-black p-3 rounded-2xl rounded-br-none ${lang === "he" && "text-right"}`}
      />
    )
  } else if (element === "input") {
    return (
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full bg-brand-white text-2xl font-[600] text-brand-black p-3 rounded-2xl ${lang === "he" && "text-right"}`}
      />
    )
  } else if (element === "submit") {
    return (
      <input
        type="submit"
        value={placeholder}
        className="w-full bg-brand-white text-2xl font-[600] text-brand-black p-3 rounded-2xl transition-all hover:cursor-pointer hover:bg-brand-white-darker"
      />
    )
  }
}