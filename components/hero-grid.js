import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img-logo/AltioraSloganFondoOscuro.png";
import heroDarkImg from "../public/img-logo/hero-grid-negro.png";
import { useRouter } from "next/router";
import { Link as ScrollLink } from "react-scroll";
import { useState, useEffect } from 'react';

import { motion, AnimatePresence } from "framer-motion";

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
    x: -30, // Comienza desde la izquierda
  },
  show: {
    opacity: 1,
    x: 0, // Termina en su posición original
    transition: {
      duration: 0.5,
    },
  },
};

const imageAnimation = {
  hidden: {
    opacity: 0,
    x: 30, // Comienza desde la derecha
  },
  show: {
    opacity: 1,
    x: 0, // Termina en su posición original
    transition: {
      duration: 0.5,
    },
  },
};

const HeroGrid = (links) => {
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();
  // console.log('link', links);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 10000); // 30 segundos

    return () => clearTimeout(timer);
  }, []);


  return (
    <AnimatePresence>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="relative p-8 bg-gray-900 rounded-lg shadow-lg text-center w-1/2">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-3xl font-bold mb-4 text-blue-600">Publica tus anuncios</h2>
            <Image
              src={heroImg}
              width="900"
              height="900"
              loading="eager"
              placeholder="blur"
              alt="Ejemplo de anuncio"
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <p className="mb-4 text-lg text-gray-300">
              Aprovecha nuestra plataforma para llegar a más clientes con anuncios innovadores y efectivos.
            </p>
            <p className="mb-4 text-lg text-gray-300">
              <strong>Planes:</strong>
            </p>
            <div className="flex justify-between space-x-4 mb-4">
              <div className="bg-gray-700 p-4 rounded-lg w-1/3">
                <h3 className="text-xl font-bold text-gray-300">Plan Básico</h3>
                <p className="text-gray-400">Campaña en redes sociales.</p>
                <a href="/planes/basico" className="text-blue-400 hover:text-blue-600">Ver más</a>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg w-1/3">
                <h3 className="text-xl font-bold text-gray-300">Plan Estándar</h3>
                <p className="text-gray-400">Redes sociales y Google Ads.</p>
                <a href="/planes/estandar" className="text-blue-400 hover:text-blue-600">Ver más</a>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg w-1/3">
                <h3 className="text-xl font-bold text-gray-300">Plan Premium</h3>
                <p className="text-gray-400">Campañas completas en varias plataformas.</p>
                <a href="/planes/premium" className="text-blue-400 hover:text-blue-600">Ver más</a>
              </div>
            </div>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => setShowPopup(false)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Cerrar
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">
                Anunciar
              </button>
            </div>
          </div>
        </div>
      )}

      <motion.div variants={variants} initial="hidden" animate="show">
        <Container className="grid h-screen justify-center items-center  grid-rows-2 md:grid-cols-2 md:grid-rows-1 gap-4">
          {/* izq  */}
          <motion.div
            variants={textAnimation}
            className="flex flex-col md:justify-center pb-0 md:items-center row-[2/3] md:row-[1/2] md:col-[1/2]"
          >
            <div className="pt-5 md:pt-0  ">
              <p className="font-bold leading-snug tracking-tight text-gray-800 text-3xl lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
                Te ayudamos a impulsar tu negocio en la era digital!
              </p>
              <p className="py-4 text-[16px] leading-normal text-gray-700 lg:text-xl xl:text-2xl dark:text-gray-300">
                <span className="">
                  {" "}
                  Transformamos ideas en soluciones digitales innovadoras.{" "}
                </span>{" "}
                Combinamos la creatividad de la programación para construir un
                impacto positivo en el mundo.
                <br />
                {/* <br /> ¡Acompáñanos en esta travesía hacia el futuro digital! */}
              </p>

              <ScrollLink
                className="px-4 py-2 text-lg font-normal text-gray-800 rounded-md dark:text-gray-200 hover:text-[#4888CD] dark:hover:text-[#4888CD] focus:text-white focus:bg-[#4888CD] dark:focus:bg-gray-800 focus:outline-none"
                activeClass="active"
                to={"Contacto"}
                spy={true}
                smooth={true}
                offset={50}
                duration={700}
              >
                <div className="flex flex-col items-start space-y-3 pt-4 md:pt-0 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
                  <button className="relative z-0 h-12 rounded-full bg-[#4888CD] px-8 text-neutral-50 after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:rounded-full after:bg-[#4888CD] hover:after:scale-x-125 hover:after:scale-y-150 hover:after:opacity-0 hover:after:transition hover:after:duration-500">
                    Contáctanos
                  </button>
                </div>
              </ScrollLink>
            </div>
          </motion.div>
          {/* der  */}
          {/* img desktop  */}
          <div className="md:p-6 mt-[96px] md:col-[2/3]">
            <div className="flex justify-center ">
              <motion.div
                variants={imageAnimation}
                initial="hidden"
                animate="show"
                // className=""
              >
                <Image
                  src={heroImg}
                  width="900"
                  height="900"
                  className="object-cover hidden dark:block"
                  alt="logo claro"
                  loading="eager"
                  placeholder="blur"
                />
              </motion.div>
              <motion.div
                variants={imageAnimation}
                initial="hidden"
                animate="show"
                // className=""
              >
                <Image
                  src={heroDarkImg}
                  width="900"
                  height="900"
                  className="object-cover block dark:hidden"
                  alt="logo oscuro"
                  loading="eager"
                  placeholder="blur"
                />
              </motion.div>
            </div>
          </div>
        </Container>
      </motion.div>
    </AnimatePresence>
  );
};

export default HeroGrid;
