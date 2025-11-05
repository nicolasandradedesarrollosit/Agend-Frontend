'use client'

import {
    Button
} from '@heroui/button'

import {
    Link
} from '@heroui/link'

import { useState, useEffect } from 'react'

function Navbar() {

    const [currentPath, setCurrentPath] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            <div className="relative w-full">
                <nav className="flex flex-row w-full min-h-[10vh] justify-between md:justify-evenly items-center px-6 md:px-12 lg:px-20 xl:px-32 bg-transparent">
                    <div>
                        <p className="text-xl md:text-2xl font-bold text-black">AGEND</p>
                    </div>
                    
                    <button 
                        className="md:hidden flex flex-col gap-1.5 !mr-4 p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className="w-6 h-0.5 bg-black"></span>
                        <span className="w-6 h-0.5 bg-black"></span>
                        <span className="w-6 h-0.5 bg-black"></span>
                    </button>

                    <div className="hidden md:flex flex-row gap-10 items-center">
                        <Link underline={currentPath === "/" ? "always" : "hover"} href="/"  className="text-black/80 transition delay-150 hover:text-black font-medium transition-colors">
                            Inicio
                        </Link>
                        <Link underline={currentPath === "/about" ? "always" : "none"} href="/about" className="text-black/80 transition delay-150 hover:text-black font-medium transition-colors">
                            Sobre Nosotros
                        </Link>
                        <Button 
                            as={Link}
                            href="/auth"
                            size="md"
                            className="bg-black text-white font-semibold rounded-lg hover:bg-black/90 transition-colors !px-4" 
                            variant="solid"
                            endContent={icon}
                        >
                            Iniciar Sesion | Registrarse
                        </Button>
                    </div>
                </nav>

                {isMenuOpen && (
                    <div className="md:hidden absolute top-full left-1/2 -translate-x-1/2 w-9/10 bg-black shadow-2xl z-1 flex justify-center rounded-xl !p-4">
                        <div className="flex flex-col items-center gap-3 py-4 px-6 w-full max-w-sm">
                            <Link 
                                underline={currentPath === "/" ? "always" : "hover"} 
                                href="/"  
                                className="text-white/90 hover:text-white font-medium transition-colors text-sm py-1"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Inicio
                            </Link>
                            <Link 
                                underline={currentPath === "/about" ? "always" : "none"} 
                                href="/about" 
                                className="text-white/90 hover:text-white font-medium transition-colors text-sm py-1"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Sobre Nosotros
                            </Link>
                            <Button 
                                as={Link}
                                href="/auth"
                                size="lg"
                                className="bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-colors w-4/5 mt-1 h-30s" 
                                variant="solid"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Iniciar Sesion
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Navbar