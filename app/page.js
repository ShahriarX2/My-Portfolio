import { cn } from "@/lib/utils";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { Spotlight } from "@/components/ui/Spotlight";

export default function Home() {
  return (
    <main className="font-sans">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}