"use client"
import { Hero } from "../components/Hero-Highlight";
import Navbar from "../components/Navbar";
import Tech from "../components/Tech";
import About from "../components/About"
import { ContactForm } from "../components/Contact";

export default function Home() {
  return (
    <>
      <div className="relative">
        <Navbar />
        <Hero />
        <About/>
        <Tech/>
        <ContactForm/>
      </div>


    </>

  );
}
