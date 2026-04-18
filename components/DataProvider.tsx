"use client"

import { createContext, useContext, ReactNode } from "react"
import { data } from "@/data"

const DataContext = createContext<any | null>(null)

export function DataProvider({ children, lang }: { children: ReactNode, lang: string }) {
  const content = data[lang as keyof typeof data]

  return (
    <DataContext.Provider value={{ content, lang }}>
      {children}
    </DataContext.Provider>
  )
}

export function useDataContext() {
  const context = useContext(DataContext)

  if (!context) throw new Error("useDataContext must be used within DataProvider")

  return context
}