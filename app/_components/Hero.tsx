import {
    Button
} from "@heroui/button"

import {
    Alert
} from "@heroui/alert"

import Navbar from "@/common/components/Navbar";

function Hero() {    

    return (
        <>
            <header className="h-screen snap-start snap-always overflow-x-hidden">
                <section className="flex flex-col h-full w-full bg-gradient-ground-200">
                    <Navbar />
                    <article className="flex flex-col gap-4 md:gap-8 flex-1 justify-center items-center text-center mt-16 md:!mt-32 px-4 md:px-8">
                        <div className="flex flex-col items-center gap-4 md:gap-8 max-w-full md:max-w-3xl lg:max-w-4xl">
                            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-black/90 text-shadow-primary">
                                Bienvenido a Agend,
                            </p>
                            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black/90 text-shadow-primary px-4">
                                gestión de citas para hospitales y clínicas.
                            </p>
                            <p className="text-black/60 max-w-full md:max-w-2xl text-base md:text-lg lg:text-xl font-semibold px-4">
                                Simplifica la programación de citas médicas con nuestra plataforma fácil de usar.
                            </p>
                        </div>
                        <div className="flex flex-col items-center sm:flex-row gap-4 !md:gap-6 !mt-6 md:!mt-12 w-full sm:w-auto px-4">
                            <Button size="lg" color="secondary" variant="ghost" className="!px-4 w-4/5 sm:w-auto">
                                Registrarse
                            </Button>
                            <Button size="lg" color="secondary" variant="flat" className="!px-4 text-black/90 w-4/5 sm:w-auto">
                                Contacto
                            </Button>
                        </div>
                        <div className="w-4/5 sm:w-4/5 md:w-3/5 lg:w-2/5 h-auto px-4">
                            <Alert variant="solid" color="secondary" title={"Responderemos tus dudas en menos de 24 horas!"} className="w-full !mt-8 md:!mt-16 h-15 !px-4" />
                        </div>
                    </article>
                </section>
            </header>
        </>
    )
}

export default Hero;