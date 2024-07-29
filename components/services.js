import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Container from "../components/container";
import Link from "next/link";
import { CodeBracketIcon, Cog6ToothIcon } from "@heroicons/react/24/solid"; // Importando íconos de Heroicons
import designIcon from "../public/ux-s-user.jpg";
import softwareIcon from "../public/software.jpg";

const fadeInVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const infiniteRotate = {
  animate: {
    rotate: [0, 360],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

export default function Services() {
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });

  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { once: true });

  return (
    <Container className="py-0 pb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-bold leading-8 text-00B4D8-900">
            Nuestros Servicios
          </h2>
        </div>

        <div className="mt-10">
          <div className="grid md:grid-cols-2 gap-4">
            <motion.div
              ref={ref1}
              variants={fadeInVariants}
              initial="hidden"
              animate={isInView1 ? "visible" : "hidden"}
              className="p-4 w-full relative group bg-cover bg-center flex justify-center items-center"
              style={{
                backgroundImage: `url(${designIcon.src})`,
                color: "#00B4D8",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="h-80 w-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden transition duration-500 ease-in-out transform hover:scale-105 flex justify-center items-center">
                <div className="h-full w-full bg-gray-900 bg-opacity-50 hover:bg-opacity-75 flex flex-col justify-center items-center p-4 relative">
                  <motion.div
                    className="absolute top-4 right-4 text-white"
                    {...infiniteRotate}
                  >
                    <CodeBracketIcon className="h-10 w-10" />
                  </motion.div>
                  <h2 className="text-center tracking-widest text-xl title-font font-medium mb-1 transition duration-500 ease-in-out opacity-100 group-hover:opacity-0">
                    Sitios Web que Transforman tu Negocio
                  </h2>
                  <h2 className="text-center title-font text-lg font-medium text-white mb-3 transition duration-500 ease-in-out opacity-100 group-hover:opacity-0">
                    ¿Quieres destacar en el mundo digital?
                  </h2>
                  <p className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out flex flex-col justify-center items-center text-center font-bold p-4">
                    Descubre los beneficios de tener un sitio web diseñado
                    profesionalmente. Desde landing pages económicas perfectas
                    para vender tus productos estrella, hasta sitios web
                    tradicionales con 4, 8, y 12 secciones o más. Nuestros
                    paquetes se adaptan a tus necesidades y presupuesto,
                    brindándote una presencia en línea que atrae y convierte
                    visitantes en clientes leales.
                    <Link href="/sitiosWeb">
                      <button className="mt-4 opacity-100 justify-center items-center transition duration-500 ease-in-out bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Ver Paquetes
                      </button>
                    </Link>
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              ref={ref2}
              variants={fadeInVariants}
              initial="hidden"
              animate={isInView2 ? "visible" : "hidden"}
              className="p-4 w-full relative group bg-cover bg-center flex justify-center items-center"
              style={{
                backgroundImage: `url(${softwareIcon.src})`,
                color: "#00B4D8",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="h-80 w-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden transition duration-500 ease-in-out transform hover:scale-105 flex justify-center items-center">
                <div className="h-full w-full bg-gray-900 bg-opacity-50 hover:bg-opacity-75 flex flex-col justify-center items-center p-4 relative">
                  <motion.div
                    className="absolute top-4 right-4 text-white"
                    {...infiniteRotate}
                  >
                    <Cog6ToothIcon className="h-10 w-10" />
                  </motion.div>
                  <h2 className="text-center tracking-widest text-xl title-font font-medium mb-1 transition duration-500 ease-in-out opacity-100 group-hover:opacity-0">
                    Desarrollo de Software a Medida
                  </h2>
                  <h2 className="text-center title-font text-lg font-medium text-white mb-3 transition duration-500 ease-in-out opacity-100 group-hover:opacity-0">
                    ¿Necesitas una solución de software personalizada para tu
                    negocio?
                  </h2>
                  <p className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out flex flex-col justify-center items-center text-center font-bold p-4">
                    Conoce nuestras soluciones personalizadas para desarrollar
                    aplicaciones que se ajustan perfectamente a tus
                    requerimientos. Utilizamos las últimas tecnologías y
                    metodologías ágiles para garantizar que tu proyecto sea un
                    éxito. Explora las especificaciones detalladas de nuestros
                    servicios y las tecnologías con las que trabajamos, desde
                    desarrollo frontend hasta backend robusto.
                    <Link href="/fabricaSoft">
                      <button className="mt-4 opacity-100 justify-center items-center transition duration-500 ease-in-out bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Explorar Tecnologías
                      </button>
                    </Link>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Container>
  );
}
