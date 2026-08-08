import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Catering from "@/components/Catering";
import Menu from "@/components/Menu";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />

      <About />

      <Services />

      <Catering />

      <Menu />

      <Contact />

      <Footer />
    </main>
  );
}
