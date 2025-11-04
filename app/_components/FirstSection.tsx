'use client'
import {
    Button
} from "@heroui/button"

import {
    Link
} from "@heroui/link"

import {
    Image
} from "@heroui/image"

import {
    useState,
    useEffect
} from "react"

function FirstSection() {

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
        <>
            <section className="bg-dark-950 min-h-screen h-auto md:h-screen snap-start snap-always flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 px-4 sm:px-6 md:px-12 py-12 md:py-0">
                <div className="flex flex-col gap-6 md:gap-8 w-full md:w-2/5 text-center md:text-left">
                    <p className="text-white/90 text-3xl sm:text-4xl md:text-5xl font-bold">Consigue resultados excepcionales con Agend.</p>
                    <div>
                        <p className="text-white/60 text-base sm:text-lg max-w-full md:max-w-md mx-auto md:mx-0">Optimiza la gestión de citas médicas y mejora la experiencia del paciente.</p>
                    </div>
                    <div className="w-full flex justify-center sm:justify-start !mb-12">
                    <Button as={Link} href="/auth" className="w-4/5 sm:w-2/3 md:w-1/2 mx-auto md:mx-0" variant="flat" color="secondary">Comenzar Ahora</Button>
                    </div>
                </div>
                <div className="relative w-full md:w-2/5 h-[300px] sm:h-[400px] md:h-[500px] flex items-center justify-center">
                    <div className="absolute top-0 left-0 sm:left-4 md:left-0 z-10 transform -rotate-6">
                        <Image 
                            src="/image-1.png" 
                            alt="First Section Image" 
                            width={isMobile ? 250 : 350}
                            height={isMobile ? 200 : 300}
                            className="rounded-2xl shadow-2xl sm:w-[300px] md:w-[350px]"
                        />
                    </div>
                    <div className="absolute bottom-0 right-0 sm:right-4 md:right-0 z-20 transform rotate-6">
                        <Image 
                            src="/image-2.png" 
                            alt="Second Section Image" 
                            width={isMobile ? 250 : 350}
                            height={isMobile ? 200 : 300}
                            className="rounded-2xl shadow-2xl sm:w-[300px] md:w-[350px]"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default FirstSection