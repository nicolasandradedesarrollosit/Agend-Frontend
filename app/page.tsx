'use client'

import Hero from "@/app/_components/Hero";
import FirstSection from "@/app/_components/FirstSection";
import SecondSection from "@/app/_components/SecondSection";
import ThirdSection from "@/app/_components/ThirdSection";

import {
  useState,
  useEffect
} from "react";

function Home() {
  const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    
  return (
    <div className={`h-screen overflow-x-hidden overflow-y-scroll ${isMobile ? "snap-none" : "snap-y snap-mandatory"}`}>
      <Hero />
      <FirstSection />
      <div className="bg-gradient-ground-500 h-auto w-full">
        <SecondSection />
        <ThirdSection />
      </div>
    </div>
  )
}

export default Home;
