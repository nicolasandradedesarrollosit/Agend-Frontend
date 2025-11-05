'use client'

import Hero from "@/app/_components/Hero";
import FirstSection from "@/app/_components/FirstSection";
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
      <ThirdSection />
    </div>
  )
}

export default Home;
