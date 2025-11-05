import {
    Accordion,
    AccordionItem
} from "@heroui/accordion"

import Footer from "@/common/components/Footer"

function ThirdSection() {
    const faqs = [
    {
        question: "¿Cómo solicito un turno?",
        answer: "Puede solicitar un turno ingresando con su usuario, seleccionando la especialidad y el profesional deseado, y eligiendo una fecha y horario disponible."
    },
    {
        question: "¿Necesito tener usuario para sacar un turno?",
        answer: "Sí, es necesario registrarse para gestionar sus turnos y acceder al historial de consultas médicas."
    },
    {
        question: "¿Puedo cancelar un turno?",
        answer: "Sí, puede cancelar su turno desde la sección Mis Turnos hasta 24 horas antes del horario asignado."
    },
    {
        question: "¿Cómo sé si mi turno fue confirmado?",
        answer: "Una vez completada la solicitud, recibirá una notificación en el sistema y un correo de confirmación con los detalles del turno."
    },
    {
        question: "¿Puedo sacar un turno para otra persona?",
        answer: "Sí, si la persona está vinculada a su cuenta como familiar o responsable, puede solicitar turnos en su nombre."
    },
    {
        question: "¿Qué hago si no hay turnos disponibles?",
        answer: "Puede activar la opción de alerta para ser notificado cuando se liberen nuevos turnos para la especialidad o profesional seleccionado."
    },
    {
        question: "¿Qué documentación debo llevar al turno?",
        answer: "Debe presentar su DNI y credencial de cobertura médica. En caso de estudios especiales, puede ser necesario presentar órdenes o autorizaciones."
    }
];

    return (
        <>
            <section className="overflow-x-hidden h-screen w-full flex flex-col items-center bg-gradient-ground-500 snap-start snap-always">
                <div className="flex flex-col items-center h-[75vh] w-full px-6 sm:px-8 md:px-12 lg:px-16">
                    <p className="text-3xl sm:text-4xl md:text-5xl font-semibold !mt-12 text-white/90 text-center">Preguntas frecuentes</p>
                    <div className="!mt-12 w-full sm:w-4/5 md:w-3/5 lg:w-2/5 max-w-3xl">
                        <Accordion variant='bordered'>
                            {faqs.map((item, index) => (
                                <AccordionItem classNames={{
                                    base: "!p-4 w-full",
                                    title: "font-normal text-medium",
                                    trigger: "px-2 py-0 flex-row gap-4",
                                    indicator: "text-medium text-white/90",
                                    content: "text-small !mt-4"
                                }} key={index} aria-label={item.question} title={item.question}>
                                    {item.answer}
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
                <Footer />
            </section>
        </>
    )
}

export default ThirdSection