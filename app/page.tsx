import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Capabilities from "./components/Capabilities";
import Quote from "./components/Quote";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Media from "./components/Media";
import Partners from "./components/Partners";
import About from "./components/About";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ui/ScrollToTop";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Mission />
      <Capabilities />
      <Quote />
      <Services />
      <Stats />
      <Media />
      <Partners />
      <About />
      <Team />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
