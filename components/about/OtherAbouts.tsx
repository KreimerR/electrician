import AboutInfo from "./AboutInfo"
import AboutImages from "./AboutImages"

export default function OtherAbouts() {
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