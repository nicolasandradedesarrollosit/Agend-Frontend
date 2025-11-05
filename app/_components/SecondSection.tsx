import {
    Card,
    CardHeader,
    CardBody,
    CardFooter
} from '@heroui/card'

import {
    Button
} from '@heroui/button'

import {
    Divider
} from '@heroui/divider'


function SecondSection() {

    const plans = [
        {
            title: "Plan Básico",
            price: "Gratis",
            description: "Ideal para pequeñas clínicas o profesionales independientes que buscan una solución sencilla para gestionar citas médicas.",
            features: [
            "Hasta 50 citas mensuales",
            "1 usuario",
            "Gestión básica de citas",
            "Integración con Google Maps",
            "Confirmación automática de cita por correo electrónico",
            "Vista de agenda semanal",
            "Historial básico de pacientes (nombre, contacto, última cita)",
            "Soporte básico por correo electrónico",
            "Sin pagos en línea ni recordatorios automáticos"
            ]
        },
        {
            title: "Plan Plus",
            price: "$4.99",
            description: "Perfecto para clínicas medianas que necesitan más funcionalidades, capacidad multiusuario y gestión más automatizada.",
            features: [
            "Todo lo del Plan Básico",
            "Hasta 500 citas mensuales",
            "Hasta 5 usuarios",
            "Integración con correo electrónico para recordatorios automáticos",
            "Pagos en línea habilitados",
            "Sincronización con Google Calendar",
            "Gestión de múltiples profesionales o sucursales",
            "Exportación de reportes en Excel o PDF",
            "Reportes y análisis de negocio",
            "Soporte prioritario por correo electrónico"
            ]
        },
        {
            title: "Plan Pro",
            price: "$8.99",
            description: "Ideal para grandes clínicas y hospitales que requieren capacidades completas de gestión, análisis avanzado y soporte dedicado.",
            features: [
            "Todo lo del Plan Plus",
            "Citas ilimitadas",
            "Usuarios ilimitados",
            "Recordatorios automáticos por WhatsApp, SMS y correo electrónico",
            "Gestión avanzada de pacientes (historial clínico, observaciones, archivos adjuntos)",
            "Panel analítico avanzado (ocupación, cancelaciones, ingresos, rendimiento)",
            "Integraciones externas mediante API (ERP, historias clínicas, etc.)",
            "Facturación automática y emisión de comprobantes",
            "Soporte dedicado 24/7 por chat en vivo y correo"
            ]
        }
    ]

    const svg = (
        <svg className="h-3 w-3 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 15 15">
            <path fill="currentColor" fillRule="evenodd" d="M0 7.5a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0Zm7.072 3.21l4.318-5.398l-.78-.624l-3.682 4.601L4.32 7.116l-.64.768l3.392 2.827Z" clipRule="evenodd"/>
        </svg>
    )

    return (
        <>
            <section className="overflow-x-hidden min-h-screen h-auto !py-6 md:!py-8 w-full flex flex-col items-center snap-start snap-always !gap-6 md:!gap-8">
                <p className="text-3xl sm:text-4xl md:text-5xl font-semibold !mt-2 md:!mt-4 text-white/90 text-center !px-4">Planes de suscripción</p>
                <div className="flex flex-col lg:flex-row gap-6 md:gap-8 w-full max-w-7xl justify-center items-center lg:items-stretch !px-4 !pb-4 md:!pb-6">
                    {plans.map((plan, index) => (
                        <Card 
                            className="w-full max-w-[350px] lg:w-[350px] bg-white/5 backdrop-blur-2xl border border-white/10 flex flex-col items-center shadow-xl" 
                            isBlurred
                            key={index}
                        >
                            <CardHeader className="flex flex-col justify-center w-full gap-3 md:gap-4 !px-5 !py-5">
                                <div className="flex flex-col gap-2">
                                    <p className="text-white/90 text-lg md:text-xl font-semibold">{plan.title}</p>
                                    <p className="text-white/60 text-xs leading-relaxed">{plan.description}</p>
                                </div>
                                <div className="flex flex-row justify-start w-full items-end gap-1">
                                    <p className="font-bold text-3xl md:text-4xl text-white/90">{plan.price}</p>
                                    <p className="text-white/50 text-xs mb-1">{plan.price === 'Gratis' ? '' : '/mes'}</p>
                                </div>
                            </CardHeader>
                            <Divider className="bg-white/10" />
                            <CardBody className="flex flex-col items-center !mt-4 !px-5 !py-5 !gap-2.5">
                                {plan.features.map((feature, idx) => (
                                    <div key={idx} className="flex flex-row w-9/10 items-start !gap-2">
                                        <div className="!mt-0.5 text-primary-400">
                                            {svg}
                                        </div>
                                        <p className="text-white/80 text-xs leading-relaxed flex-1">{feature}</p>
                                    </div>
                                ))}
                            </CardBody>
                            <CardFooter className="flex justify-center !px-5 !pb-5 !pt-2">
                                <Button 
                                    className="w-full text-sm font-semibold text-white" 
                                    variant={index === 1 ? "bordered" : "solid"} 
                                    color="primary" 
                                    size="md"
                                    onPress={() => console.log('Contactarse')}
                                >
                                    Contactarse
                                </Button>
                            </CardFooter>    
                        </Card>
                    ))}
                </div>
            </section>
        </>
    )
}

export default SecondSection