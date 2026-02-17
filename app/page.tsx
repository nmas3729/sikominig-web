import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import Mission from "./components/Mission";
import Access from "./components/Access";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Media from "./components/Media";
import WorkedWith from "./components/WorkedWith";
import About from "./components/About";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Partners />
      <Mission />
      <Access />
      <Services />
      <Stats />
      <Media />
      <WorkedWith />
      <About />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
