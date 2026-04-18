import About from "@/components/about/About";
import Hero from "@/components/Hero";
import Info from "@/components/Info";

export default function Landing() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Info />
      <About />
    </div>
  )
}