import Nav from "@/app/components/Nav"
import Hero from "@/app/components/Hero"
import About from "@/app/components/About"
import Experience from "@/app/components/Experience"
import Projects from "@/app/components/Projects"
import PersonalProjects from "@/app/components/PersonalProjects"
import Skills from "@/app/components/Skills"
import Contact from "@/app/components/Contact"

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <PersonalProjects />
        <Skills />
        <Contact />
      </main>
    </>
  )
}
