import "../styles/index.css"
import HeroBanner from "../features/components/HeroBanner"
import GoalsSection from "../components/GoalsSection"
import AboutSection from "../components/AboutSection"
import SessionSelector from "../components/SessionSelector"
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Home() {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollTo = params.get("scrollTo");
    if (scrollTo) {
      setTimeout(() => {
        const el = document.getElementById(scrollTo);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 200);
    }
  }, [location.search]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-50 ">
      <HeroBanner/>
      <GoalsSection />
      <AboutSection />
      <SessionSelector/>
    </div>
  )
}

export default Home
