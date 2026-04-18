export const languages = [
  {
    href: "/he",
    title: "עבר",
  },
  {
    href: "/en",
    title: "Eng",
  },
  {
    href: "/ru",
    title: "Рус",
  },
]

export const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  element?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  })
}
