"use client"

import { useDataContext } from "../DataProvider"
import HebrewAbout from "./HebrewAbout"
import OtherAbouts from "./OtherAbouts"

export default function About() {
  const data = useDataContext()

  return data.lang === "he" ? <HebrewAbout /> : <OtherAbouts />
}