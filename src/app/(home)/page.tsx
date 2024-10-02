"use client"
import { Hero } from "../components/Hero-Highlight";
import Navbar from "../components/Navbar";
import Tech from "../components/Tech";
import About from "../components/About"
import { ContactForm } from "../components/Contact";
import Projects from "../components/Projects";

export default function Home() {
  return (
    
      <div className="relative">
        <Navbar />
        <Hero />
        <About/>
        <Tech/>
        <Projects/>
        <ContactForm/>
      </div>

  );
}
