import About from "@/components/about/About";
import Hero from "@/components/Hero";
import FirstInfo from "@/components/info/FirstInfo";
import SecondInfo from "@/components/info/SecondInfo";
import Services from "@/components/Services";

export default function Landing() {
  return (
    <div className="flex flex-col">
      <Hero />
      <FirstInfo />
      <About />
      <SecondInfo />
      <Services />
    </div>
  )
}