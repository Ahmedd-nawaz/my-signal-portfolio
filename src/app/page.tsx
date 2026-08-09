import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
export default function Home() {
  return (
    <>
      <main className="bg-dark-bg">
        <Hero />
          <About />
          <Skills />
          <Projects />
          <Process />
      </main>
    </>
  );
}