'use client'

import {
    Button
} from "@heroui/button"

import {
    Link
} from "@heroui/link"

import {
    Alert
} from "@heroui/alert"

import { useEffect, useState } from "react"

function Hero() {
    const [currentPath, setCurrentPath] = useState("")

    useEffect(() => {
        setCurrentPath(window.location.pathname)
    }, [])

    const icon = (
        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <path fill="#FFFFFF" d="M5 5a5 5 0 0 1 10 0v2A5 5 0 0 1 5 7V5zM0 16.68A19.9 19.9 0 0 1 10 14c3.64 0 7.06.97 10 2.68V20H0v-3.32z"/>
        </svg>
    )

    return (
        <>
            <header className="h-screen snap-start snap-always">
                <section className="flex flex-col h-full w-full bg-gradient-ground-200">
                    <nav className="flex flex-row w-full h-[10vh] justify-evenly items-center px-8 bg-transparent">
                        <div>
                            <p className="text-2xl font-bold text-black">AGEND</p>
                        </div>
                        <div className="flex flex-row gap-10 items-center">
                            <Link underline={currentPath === "/" ? "always" : "hover"} href="/"  className="text-black/80 transition delay-150 hover:text-black font-medium transition-colors">
                                Inicio
                            </Link>
                            <Link underline={currentPath === "/about" ? "always" : "none"} href="/about" className="text-black/80 transition delay-150 hover:text-black font-medium transition-colors">
                                Sobre Nosotros
                            </Link>
                            <Button 
                                as={Link}
                                href="/auth"
                                className="bg-black text-white w-55 font-semibold rounded-lg hover:bg-black/90 transition-colors" 
                                variant="solid"
                                endContent={icon}
                            >
                                Iniciar Sesion | Registrarse
                            </Button>
                        </div>
                    </nav>
                    
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
                            <Button size="lg" color="secondary" variant="solid" className="!px-4 text-black/50">
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