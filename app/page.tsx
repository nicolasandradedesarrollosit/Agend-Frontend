import Hero from "@/app/_components/Hero";
import FirstSection from "@/app/_components/FirstSection";

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
    <div className={`h-screen overflow-y-scroll ${isMobile ? "snap-none" : "snap-y snap-mandatory"}`}>
      <Hero />
      <FirstSection />
    </div>
  )
}

export default Home;
