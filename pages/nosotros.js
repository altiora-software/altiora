import Image from "next/image";
import Container from "../components/container";
import { CardContainer, CardBody, CardItem } from "../components/CardContent3d";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";

import aleImg from "../public/fotoAle.jpeg";
import pabloImg from "../public/pabloFoto.jpg";

// ANIMACIONES

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const textAnimation = {
  hidden: {
    opacity: 0,
    x: 30, // Comienza desde la izquierda
  },
  visible: {
    opacity: 1,
    x: 0, // Termina en su posición original
    transition: {
      duration: 0.5,
    },
  },
};

const cardAnimation1 = {
  hidden: {
    opacity: 0,
    x: 30, // derecha a izquierda
  },
  show: {
    opacity: 1,
    x: 0, // Termina en su posición original
    transition: {
      duration: 0.5,
    },
  },
};

const cardAnimation2 = {
  hidden: {
    opacity: 0,
    x: -30, //izquierda a derecha
  },
  show: {
    opacity: 1,
    x: 0, // Termina en su posición original
    transition: {
      duration: 0.5,
    },
  },
};

export default function Nosotros() {
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });

  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { once: true });

  const ref3 = useRef(null);
  const isInView3 = useInView(ref3, { once: true });

  const ref4 = useRef(null);
  const isInView4 = useInView(ref4, { once: true });

  const ref5 = useRef(null);
  const isInView5 = useInView(ref5, { once: true });

  const ref6 = useRef(null);
  const isInView6 = useInView(ref6, { once: true });

  return (
    <>
      {/* <motion.div variants={variants} initial="hidden" animate="show"> */}
      <Container>
        <div className="w-full h-full md:mt-10 ">
          <div className="flex flex-col space-y-8">
            {/* Información sobre la empresa */}

            <motion.h2
              className="text-3xl text-left  md:text-center text-[35px] font-bold text-gray-800 dark:text-white"
              ref={ref1}
              variants={textAnimation}
              initial="hidden"
              animate={isInView1 ? "visible" : "hidden"}
            >
              Sobre Nosotros
            </motion.h2>

            <motion.p
              className="text-[20px] text-gray-700 dark:text-white"
              ref={ref2}
              variants={textAnimation}
              initial="hidden"
              animate={isInView2 ? "visible" : "hidden"}
            >
              Altiora es una empresa de desarrollo de software que se
              especializa en ofrecer soluciones digitales innovadoras. Nuestra
              historia comenzó con dos amigos apasionados por la programación,
              Ale y Pablo, quienes combinaron sus habilidades de FullStack para
              fundar esta empresa.
            </motion.p>
            <motion.p
              ref={ref3}
              variants={textAnimation}
              initial="hidden"
              animate={isInView3 ? "visible" : "hidden"}
              className="text-[20px] text-gray-700 dark:text-white "
            >
              Nuestra visión es acercar la tecnología a sectores que aún no han
              tenido acceso a ella, reduciendo la brecha tecnológica y brindando
              soluciones innovadoras para negocios y emprendimientos. Nos
              esforzamos por ser reconocidos como el puente hacia la tecnología
              y facilitar el crecimiento de aquellos que se sienten excluidos
              del sistema.
            </motion.p>
            <motion.p
              ref={ref4}
              variants={textAnimation}
              initial="hidden"
              animate={isInView4 ? "visible" : "hidden"}
              className="text-[20px] text-gray-700 dark:text-white"
            >
              Nuestra misión es conectar las necesidades de diversos sectores
              con soluciones tecnológicas, asegurando que ningún negocio quede
              rezagado en el entorno tecnológico en constante evolución. Nos
              comprometemos a superar las expectativas de nuestros clientes
              ofreciendo soluciones tecnológicas de calidad y proporcionando un
              servicio excepcional.
            </motion.p>
            {/* Equipo */}
            <motion.div
              variants={variants}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 sm:grid-cols-2 gap-8"
            >
              {/* CARD 1 */}
              <motion.div
                ref={ref5}
                variants={cardAnimation1}
                initial="hidden"
                // animate="show"
                animate={isInView5 ? "show" : "hidden"}
              >
                <CardContainer className="inter-var">
                  <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-[#03045E] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                    <CardItem
                      translateZ="50"
                      className="text-xl font-bold text-neutral-600 dark:text-white"
                    >
                      Alejandro Mendoza
                    </CardItem>
                    <CardItem
                      translateZ="60"
                      className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                      FullStack developer
                    </CardItem>
                    <CardItem
                      as="h2"
                      translateZ="60"
                      className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                      Me divierto creando soluciones innovadoras y elegantes que
                      resuelvan problemas complejos.
                    </CardItem>
                    <CardItem
                      translateZ="100"
                      rotateX={20}
                      rotateZ={-10}
                      className="w-full mt-4"
                    >
                      <Image
                        src={aleImg}
                        height="1000"
                        width="1000"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                      />
                    </CardItem>
                    <div className="flex justify-between items-center md:mt-20">
                      <CardItem
                        translateZ={20}
                        translateX={40}
                        as="button"
                        className="px-4 md:py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                      >
                        Hablemos!
                      </CardItem>
                    </div>
                  </CardBody>
                </CardContainer>
              </motion.div>
              {/* CARD 2  */}
              <motion.div
                ref={ref6}
                variants={cardAnimation2}
                initial="hidden"
                // animate="show"
                animate={isInView6 ? "show" : "hidden"}
              >
                <CardContainer className="inter-var">
                  <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-[#03045E] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                    <CardItem
                      translateZ="50"
                      className="text-xl font-bold text-neutral-600 dark:text-white"
                    >
                      Pablo Martinez
                    </CardItem>
                    <CardItem
                      translateZ="60"
                      className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                      Frontend y Diseño UX/UI
                    </CardItem>
                    <CardItem
                      as="h2"
                      translateZ="60"
                      className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                      Mi pasion es crear interfaces de usuario atractivas,
                      funcionales e innovadoras
                    </CardItem>
                    <CardItem
                      translateZ="100"
                      rotateX={20}
                      rotateZ={-10}
                      className="w-full mt-4"
                    >
                      <Image
                        src={pabloImg}
                        height="1000"
                        width="1000"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                      />
                    </CardItem>
                    <div className="flex justify-between items-center mt-20">
                      <CardItem
                        translateZ={20}
                        translateX={40}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                      >
                        Hablemos!
                      </CardItem>
                    </div>
                  </CardBody>
                </CardContainer>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Container>
      {/* </motion.div> */}
    </>
  );
}
