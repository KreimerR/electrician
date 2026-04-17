"use client"

import { createContext, useContext, ReactNode } from "react"
import { data } from "@/data"

const ContentContext = createContext<any | null>(null)

export function ContentProvider({ children, lang }: { children: ReactNode, lang: string }) {
  const content = data[lang as keyof typeof data]

  return (
    <ContentContext.Provider value={content}>
      {children}
    </ContentContext.Provider>
  )
}

export function useContentContext() {
  const context = useContext(ContentContext)

  if (!context) throw new Error("useContentContext must be used within ContentProvider")

  return context
}