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
        </>
    )
}

export default Navbar