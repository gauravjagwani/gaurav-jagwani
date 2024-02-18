import Image from "next/image";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Work from "@/components/Work";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <About />
      <Contact />
    </main>
  );
}
