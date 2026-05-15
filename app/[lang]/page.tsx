import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Hero from "@/components/hero/Hero";
import Info from "@/components/Info";
import Services from "@/components/services/Services";

export default function Landing() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Info type="first" />
      <About />
      <Info type="second" />
      <Services />
      <Contact />
    </div>
  )
}