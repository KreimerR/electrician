import AboutImages from "./AboutImages"
import AboutInfo from "./AboutInfo"

export default function About() {
  return (
    <section
      id="about"
      className="lg:grid lg:grid-cols-[1fr_1fr] items-center h-screen relative"
    >
      <AboutImages />
      <AboutInfo />
    </section>
  )
}