import Container from "../components/container";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// ANIMACIONES
const textAnimation = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const sectionVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const sectionAnimation = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Nosotros() {
  const refIntro = useRef(null);
  const isInViewIntro = useInView(refIntro, { once: true });

  const refMission = useRef(null);
  const isInViewMission = useInView(refMission, { once: true });

  const refVision = useRef(null);
  const isInViewVision = useInView(refVision, { once: true });

  const refValues = useRef(null);
  const isInViewValues = useInView(refValues, { once: true });

  return (
    <Container>
      <div className="w-full h-full md:mt-10 px-4">
        <div className="flex flex-col space-y-12">
          {/* Introducción */}
          <motion.div
            className="flex flex-col items-center"
            ref={refIntro}
            variants={sectionVariants}
            initial="hidden"
            animate={isInViewIntro ? "show" : "hidden"}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4"
              variants={textAnimation}
              initial="hidden"
              animate={isInViewIntro ? "visible" : "hidden"}
            >
              Introducción
            </motion.h2>
            <motion.p
              className="text-lg text-gray-700 dark:text-white text-center"
              variants={textAnimation}
              initial="hidden"
              animate={isInViewIntro ? "visible" : "hidden"}
            >
              Somos Altiora, una empresa con el sueño de crecer en el mundo IT. Estamos ubicados en San Salvador de Jujuy y tenemos como misión dar acceso a herramientas tecnológicas a emprendedores y empresas.
            </motion.p>
          </motion.div>

          {/* Misión */}
          <motion.div
            className="flex flex-col items-center"
            ref={refMission}
            variants={sectionVariants}
            initial="hidden"
            animate={isInViewMission ? "show" : "hidden"}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4"
              variants={textAnimation}
              initial="hidden"
              animate={isInViewMission ? "visible" : "hidden"}
            >
              Misión
            </motion.h2>
            <motion.p
              className="text-lg text-gray-700 dark:text-white text-center"
              variants={textAnimation}
              initial="hidden"
              animate={isInViewMission ? "visible" : "hidden"}
            >
              Nuestra misión es proporcionar acceso a herramientas tecnológicas a emprendedores y empresas para que puedan potenciar sus proyectos y negocios. Queremos que nuestros clientes tengan acceso a tecnologías avanzadas para mejorar su alcance y efectividad en el mercado.
            </motion.p>
          </motion.div>

          {/* Visión */}
          <motion.div
            className="flex flex-col items-center"
            ref={refVision}
            variants={sectionVariants}
            initial="hidden"
            animate={isInViewVision ? "show" : "hidden"}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4"
              variants={textAnimation}
              initial="hidden"
              animate={isInViewVision ? "visible" : "hidden"}
            >
              Visión
            </motion.h2>
            <motion.p
              className="text-lg text-gray-700 dark:text-white text-center"
              variants={textAnimation}
              initial="hidden"
              animate={isInViewVision ? "visible" : "hidden"}
            >
              Queremos ser reconocidos como una empresa con un modelo de negocio sencillo, accesible e intuitivo, enfocado en hacer crecer los emprendimientos de nuestros clientes. En cinco años, esperamos tener empleados programadores trabajando con nosotros y ofrecer nuestros servicios a toda Latinoamérica, siendo percibidos como líderes en la democratización de la tecnología.
            </motion.p>
          </motion.div>

          {/* Valores */}
          <motion.div
            className="flex flex-col items-center"
            ref={refValues}
            variants={sectionVariants}
            initial="hidden"
            animate={isInViewValues ? "show" : "hidden"}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4"
              variants={textAnimation}
              initial="hidden"
              animate={isInViewValues ? "visible" : "hidden"}
            >
              Valores
            </motion.h2>
            <motion.div
              className="space-y-4 text-lg text-gray-700 dark:text-white text-center"
              variants={sectionAnimation}
              initial="hidden"
              animate={isInViewValues ? "visible" : "hidden"}
            >
              <p><strong>Innovación:</strong> Fomentamos la creatividad y la adopción de nuevas tecnologías para ofrecer soluciones innovadoras.</p>
              <p><strong>Calidad:</strong> Nos comprometemos a entregar productos y servicios de la más alta calidad a nuestros clientes.</p>
              <p><strong>Accesibilidad:</strong> Creemos en hacer que las tecnologías avanzadas sean accesibles para todos, independientemente de su tamaño o presupuesto.</p>
              <p><strong>Compromiso:</strong> Nos dedicamos a entender y satisfacer las necesidades de nuestros clientes, ayudándoles a alcanzar sus objetivos.</p>
              <p><strong>Transparencia:</strong> Actuamos con honestidad y claridad en todas nuestras interacciones y operaciones.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Container>
  );
}
