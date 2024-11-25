import { useRef, useState, useEffect } from "react";
import About from "./component/about/About";
import Contact from "./component/contact/Contact";
import Footers from "./component/footer/Footer";
import NavBar from "./component/header/NavBar";
import Hero from "./component/hero/Hero";
import Protfolio from "./component/protfolio/Protfolio";
import Qualification from "./component/qualification/Qualification";
import Skills from "./component/skills/Skills";
import Loading from "./Loading";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  
  // References for sections
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    projects: useRef(null),
    skills: useRef(null),
    contact: useRef(null),
  };

const [loding,setLoading]=useState(true);

useEffect(()=>{
  const fackdatafatch=()=>{
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }
  fackdatafatch();
},[])

  // Highlight active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Adding offset for better accuracy

      Object.entries(sectionRefs).forEach(([section, ref]) => {
        if (ref.current) {
          const { offsetTop, offsetHeight } = ref.current;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionRefs]);

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    sectionRefs[sectionId].current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
    {
      loding ? <> <Loading/> </>: <div className="px-[15px] lg:px-[0px] max-w-[968px] mx-auto">
      {/* Pass scrollToSection and activeSection to NavBar */}
      <NavBar scrollToSection={scrollToSection} activeSection={activeSection} />

      {/* Section components */}
      <section  ref={sectionRefs.home}>
        <Hero  scrollToSection={scrollToSection}/>
      </section>
      <section ref={sectionRefs.about}>
        <About />
      </section>
      <section ref={sectionRefs.skills}>
        <Skills />
      </section>
      <Qualification />
      <section ref={sectionRefs.projects}>
        <Protfolio />
      </section>
      <section ref={sectionRefs.contact}>
        <Contact />
      </section>

      <Footers scrollToSection={scrollToSection} activeSection={activeSection} />
    </div>
    }
    </>
  );
}

export default App;
