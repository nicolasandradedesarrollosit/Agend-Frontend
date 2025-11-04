import Hero from "@/app/_components/Hero";
import FirstSection from "@/app/_components/FirstSection";

function Home() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <Hero />
      <FirstSection />
    </div>
  )
}

export default Home;
