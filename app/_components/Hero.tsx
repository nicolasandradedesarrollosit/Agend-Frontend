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
            <header className="h-screen snap-start snap-always">
                <section className="flex flex-col h-full w-full bg-gradient-ground-200">
                    <Navbar />
                    <article className="flex flex-col gap-8 flex-1 justify-center items-center text-center !mt-32">
                        <div className="flex flex-col items-center gap-8 max-w-1/2">
                            <p className="text-7xl font-bold text-black/90 text-shadow-primary">
                                Bienvenido a Agend,
                            </p>
                            <p className="text-5xl font-bold text-black/90 text-shadow-primary">
                                gestión de citas para hospitales y clínicas.
                            </p>
                            <p className="text-black/60 w-max-2/3 text-xl font-semibold">
                                Simplifica la programación de citas médicas con nuestra plataforma fácil de usar.
                            </p>
                        </div>
                        <div className="flex flex-row gap-6 !mt-12">
                            <Button size="lg" color="secondary" variant="ghost" className="!px-4">
                                Registrarse
                            </Button>
                            <Button size="lg" color="secondary" variant="solid" className="!px-4 text-black/90">
                                Contacto
                            </Button>
                        </div>
                        <div className="w-1/4 h-auto">
                            <Alert variant="solid" color="secondary" title={"Responderemos tus dudas en menos de 24 horas!"} className="w-full !mt-16 h-15" />
                        </div>
                    </article>
                </section>
            </header>
        </>
    )
}

export default Hero;