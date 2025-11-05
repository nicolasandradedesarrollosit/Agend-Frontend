import {
    Link
} from "@heroui/link"

function Footer() {
    return (
        <>
            <footer className="w-full flex flex-col items-center h-[25vh] bg-dark-950">
                <div className="w-full h-1/2 md:h-3/5 flex flex-col md:flex-row">
                    <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center items-center gap-2 md:gap-4">
                        <p className="text-base md:text-xl font-bold uppercase">agend</p>
                        <div className="flex flex-row gap-3 md:gap-4">
                            <a href="">
                                <svg className="w-4 h-4 md:w-5 md:h-5" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24">
                                <path fill="#FFFFFF" d="M12 0C8.74 0 8.333.015 7.053.072C5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053C.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 0 0 1.384 2.126A5.868 5.868 0 0 0 4.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 0 0 2.126-1.384a5.86 5.86 0 0 0 1.384-2.126c.296-.765.499-1.636.558-2.913c.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 0 0-1.384-2.126A5.847 5.847 0 0 0 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071c1.17.055 1.805.249 2.227.415c.562.217.96.477 1.382.896c.419.42.679.819.896 1.381c.164.422.36 1.057.413 2.227c.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 0 1-.899 1.382a3.744 3.744 0 0 1-1.38.896c-.42.164-1.065.36-2.235.413c-1.274.057-1.649.07-4.859.07c-3.211 0-3.586-.015-4.859-.074c-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 0 1-1.379-.899a3.644 3.644 0 0 1-.9-1.38c-.165-.42-.359-1.065-.42-2.235c-.045-1.26-.061-1.649-.061-4.844c0-3.196.016-3.586.061-4.861c.061-1.17.255-1.814.42-2.234c.21-.57.479-.96.9-1.381c.419-.419.81-.689 1.379-.898c.42-.166 1.051-.361 2.221-.421c1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 1 0 0 12.324a6.162 6.162 0 1 0 0-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4s4 1.79 4 4s-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 0 1-2.88 0a1.44 1.44 0 0 1 2.88 0z"/>
                                </svg>
                            </a>
                            <a href="">
                                <svg className="w-4 h-4 md:w-5 md:h-5" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 432 432">
                                    <path fill="#FFFFFF" d="M364.5 65Q427 127 427 214.5T364.5 364T214 426q-54 0-101-26L0 429l30-109Q2 271 2 214q0-87 62-149T214 3t150.5 62zM214 390q73 0 125-51.5T391 214T339 89.5T214 38T89.5 89.5T38 214q0 51 27 94l4 6l-18 65l67-17l6 3q42 25 90 25zm97-132q9 5 10 7q4 6-3 25q-3 8-15 15.5t-21 9.5q-18 2-33-2q-17-6-30-11q-8-4-15.5-8.5t-14.5-9t-13-9.5t-11.5-10t-10.5-10.5t-8.5-9.5t-7-8.5t-5.5-7t-3.5-5L128 222q-22-29-22-55q0-24 19-44q6-7 14-7q6 0 10 1q8 0 12 9q2 3 6 13l7 17.5l3 8.5q3 5 1 9q-3 7-5 9l-3 3l-3 3.5l-2 2.5q-6 6-3 11q13 22 30 37q13 11 43 26q7 3 11-1q12-15 17-21q4-6 12-3q6 3 36 17z"/>
                                </svg>
                            </a>
                            <a href="">
                                <svg className="w-4 h-4 md:w-5 md:h-5" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 20 20">
                                    <path fill="#FFFFFF" d="M17.04 17.043h-2.962v-4.64c0-1.107-.023-2.531-1.544-2.531c-1.544 0-1.78 1.204-1.78 2.449v4.722H7.793V7.5h2.844v1.3h.039c.397-.75 1.364-1.54 2.808-1.54c3.001 0 3.556 1.974 3.556 4.545v5.238ZM4.447 6.194c-.954 0-1.72-.771-1.72-1.72s.767-1.72 1.72-1.72a1.72 1.72 0 0 1 0 3.44Zm1.484 10.85h-2.97V7.5h2.97v9.543ZM18.521 0H1.476C.66 0 0 .645 0 1.44v17.12C0 19.355.66 20 1.476 20h17.042c.815 0 1.482-.644 1.482-1.44V1.44C20 .646 19.333 0 18.518 0h.003Z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-row gap-3 md:gap-4 justify-center items-center">
                        <Link className="text-xs md:text-sm" color="foreground">Sobre Nosotros</Link>
                        <Link className="text-xs md:text-sm" color="foreground">Documentacion</Link>
                    </div>
                </div>
                <div className="w-full h-1/2 md:h-2/5 px-4 md:px-8 lg:px-16 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
                    <div className="flex flex-col text-center md:text-left">
                        <p className="text-white/70 font-semibold text-xs md:text-sm">© 2024 Agend. Todos los derechos reservados.</p>
                        <p className="text-white/50 text-xs md:text-sm">Powered by <a className="font-bold text-white" href="https://andart-coral.vercel.app">© Andart</a></p>
                    </div>
                    <div className="flex flex-row gap-2 md:gap-4 text-xs md:text-sm">
                        <Link color="foreground" href="/privacy" size="sm">Politicas de privacidad</Link>
                        <Link color="foreground" href="/terms" size="sm">Terminos y condiciones</Link>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer