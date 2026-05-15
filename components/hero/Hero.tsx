import HeroImages from "./HeroImages"
import HeroInfo from "./HeroInfo"

export default function Hero() {
  return (
    <section
      id="home"
      className="lg:grid lg:grid-cols-[1fr_1fr] items-center h-screen"
    >
      <HeroInfo />
      <HeroImages />
    </section>
  )
}