import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Container from "../components/container";
import { SunIcon, EyeIcon, HeartIcon } from "@heroicons/react/24/solid";

// import Image from "next/image";

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

const slideInFromTopVariants = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const hoverEffect = {
  scale: 1.05,
  transition: {
    duration: 0.3,
  },
};

export default function Nosotros() {
  const missionRef = useRef(null);
  const missionInView = useInView(missionRef, {
    triggerOnce: true,
    threshold: 0.1,
  });

  const visionRef = useRef(null);
  const visionInView = useInView(visionRef, {
    triggerOnce: true,
    threshold: 0.1,
  });

  const valuesRef = useRef(null);
  const valuesInView = useInView(valuesRef, {
    triggerOnce: true,
    threshold: 0.1,
  });

  const upperSectionRef = useRef(null);
  const upperSectionInView = useInView(upperSectionRef, {
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Container>
      <div className="w-full h-full md:mt-10 px-4">
        {/* Sección superior con imagen y texto */}
        <motion.div
          ref={upperSectionRef}
          initial="hidden"
          animate={upperSectionInView ? "visible" : "hidden"}
          variants={slideInFromTopVariants}
          className="flex flex-col md:flex-row items-center justify-center md:space-x-8 space-y-8 md:space-y-0"
        >
          {/* Imagen */}
          <motion.div
            variants={fadeInVariants}
            className="flex items-center justify-center w-full md:w-1/2"
          >
            <img
              src="https://via.placeholder.com/600x300"
              alt="Altiora Team"
              className="rounded-lg shadow-md"
            />
          </motion.div>

          {/* Texto */}
          <motion.div
            variants={fadeInVariants}
            className="w-full md:w-1/2 flex flex-col items-start"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Somos Altiora
            </h2>
            <p className="text-lg text-gray-700 dark:text-white">
              Somos una empresa con el sueño de crecer en el ámbito tecnológico.
              Nuestra sede se encuentra en San Salvador de Jujuy, y nuestra
              misión es proporcionar acceso a herramientas tecnológicas a
              emprendedores y empresas.
            </p>
          </motion.div>
        </motion.div>

        {/* Secciones de Misión, Visión y Valores */}
        <motion.div
          initial="hidden"
          animate={
            missionInView || visionInView || valuesInView ? "visible" : "hidden"
          }
          variants={slideInFromTopVariants}
          className="flex flex-col space-y-12 mt-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Misión */}
            <motion.div
              ref={missionRef}
              variants={fadeInVariants}
              whileHover={hoverEffect}
              className="p-8 rounded-lg shadow-md flex flex-col justify-evenly items-center text-center bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700"
            >
              <div className="flex flex-col items-center mb-4">
                <SunIcon className="h-16 w-16 text-white mb-4" />
                <h2 className="text-3xl font-bold text-white mb-4">Misión</h2>
              </div>
              <p className="text-lg text-white">
                Queremos hacer que las tecnologías más avanzadas sean accesibles
                para todos los emprendedores y empresas, ayudándolos a hacer
                crecer sus proyectos y mejorar su rendimiento. En Altiora, nos
                apasiona ver a nuestros clientes alcanzar nuevas alturas y
                aprovechar al máximo las herramientas tecnológicas.
              </p>
            </motion.div>

            {/* Visión */}
            <motion.div
              ref={visionRef}
              variants={fadeInVariants}
              whileHover={hoverEffect}
              className="p-8 rounded-lg shadow-md flex flex-col justify-evenly items-center text-center bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700"
            >
              <div className="flex flex-col items-center mb-4">
                <EyeIcon className="h-16 w-16 text-white mb-4" />
                <h2 className="text-3xl font-bold text-white mb-4">Visión</h2>
              </div>
              <p className="text-lg text-white">
                Aspiramos a ser reconocidos como una empresa innovadora con un
                modelo de negocio accesible e intuitivo. En los próximos cinco
                años, esperamos expandir nuestros servicios a toda Latinoamérica
                y ser líderes en la democratización de la tecnología.
              </p>
            </motion.div>

            {/* Valores */}
            <motion.div
              ref={valuesRef}
              variants={fadeInVariants}
              whileHover={hoverEffect}
              className="p-8 rounded-lg shadow-md flex flex-col justify-evenly items-center text-center bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700"
            >
              <div className="flex flex-col items-center mb-4">
                <HeartIcon className="h-16 w-16 text-white mb-4" />
                <h2 className="text-3xl font-bold text-white mb-4">Valores</h2>
              </div>
              <div className="space-y-2 text-lg text-white">
                <p>
                  <strong>Innovación:</strong> Fomentamos la creatividad y la
                  adopción de nuevas tecnologías.
                </p>
                <p>
                  <strong>Calidad:</strong> Nos comprometemos a entregar
                  productos y servicios de alta calidad.
                </p>
                <p>
                  <strong>Accesibilidad:</strong> Hacemos que las tecnologías
                  avanzadas sean accesibles para todos.
                </p>
                <p>
                  <strong>Compromiso:</strong> Satisfacemos las necesidades de
                  nuestros clientes, ayudándoles a alcanzar sus objetivos.
                </p>
                <p>
                  <strong>Transparencia:</strong> Actuamos con honestidad y
                  claridad en todas nuestras interacciones.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Container>
  );
}
