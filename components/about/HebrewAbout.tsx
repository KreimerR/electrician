import AboutInfo from "./AboutInfo"
import AboutImages from "./AboutImages"

export default function HebrewAbout() {
  return (
    <section
      id="about"
      className="lg:grid lg:grid-cols-[1fr_1fr] items-center h-screen relative"
    >
      <AboutInfo />
      <AboutImages />
    </section >
  )
}