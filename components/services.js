import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Container from "../components/container";
import Link from "next/link";
import ReactGA from "react-ga"
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

export default function Services() {

  useEffect(()=>{
    ReactGA.pageview(window.location.pathname);
  },[])

  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });

  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { once: true });

  return (
    <Container className="py-0z pb-4">
      <div className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-bold leading-8 text-00B4D8-900">
              Nuestros Servicios
            </h2>
          </div>

          <div className="mt-10">
            <div className="grid md:grid-cols-2 md:grid-rows-2 lg:grid-cols-2 lg:grid-rows-2 gap-2 -m-4">
              <motion.div
                ref={ref1}
                variants={fadeInVariants}
                initial="hidden"
                animate={isInView1 ? "visible" : "hidden"}
                className="p-4 w-full relative group bg-cover bg-center"
                style={{
                  backgroundImage: `url(${designIcon.src})`,
                  color: "#00B4D8",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="h-80 w-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden transition duration-500 ease-in-out transform hover:scale-105 flex justify-center items-center">
                  <div className="h-full w-full bg-gray-900 bg-opacity-50 hover:bg-opacity-75 flex flex-col justify-center items-center relative">
                    <h2 className="text-center tracking-widest text-xl title-font font-medium mb-1 transition duration-500 ease-in-out opacity-100 group-hover:opacity-0">
                      Sitios Web
                    </h2>
                    <h1 className="text-center title-font text-lg font-medium text-white mb-3 transition duration-500 ease-in-out opacity-100 group-hover:opacity-0">
                      ¿Buscás tener una aplicacion web única?
                    </h1>
                    <p className="h-full absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out flex justify-center items-center text-l font-bold p-4">
                      Sorprenda a sus clientes con aplicaciones web o un Landing Page novedoso y coherente con su marca.
                    </p>
                    <Link href="/sitiosWeb">
                      <button className="absolute bottom-4 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Ver más
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>

              <motion.div
                ref={ref2}
                variants={fadeInVariants}
                initial="hidden"
                animate={isInView2 ? "visible" : "hidden"}
                className="p-4 w-full relative group bg-cover bg-center"
                style={{
                  backgroundImage: `url(${softwareIcon.src})`,
                  color: "#00B4D8",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="h-80 w-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden transition duration-500 ease-in-out transform hover:scale-105 flex justify-center items-center">
                  <div className="h-full w-full bg-gray-900 bg-opacity-50 hover:bg-opacity-75 flex flex-col justify-center items-center relative">
                    <h2 className="text-center tracking-widest text-xl title-font font-medium mb-1 transition duration-500 ease-in-out opacity-100 group-hover:opacity-0">
                      Fábrica de Software
                    </h2>
                    <p className="h-full absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out flex justify-center items-center text-l font-bold p-4">
                      Desarrollo de software en pequeña, mediana o gran escala con una amplia variedad de tecnologías.
                    </p>
                    <Link href="/fabricaSoft">
                      <button className="absolute bottom-4 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Ver más
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
