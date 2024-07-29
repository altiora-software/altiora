import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Head from "next/head";
import Container from "../components/container";

const FabricaSoft = () => {
  const links = [
    { name: "Inicio", href: "/inicio" },
    { name: "Servicios", href: "/servicios" },
    { name: "Contacto", href: "/contacto" },
    { name: "Nosotros", href: "/nosotros" },
  ];
  const technologies = [
    { name: "HTML", icon: "/img/iconTech/html.png" },
    { name: "CSS", icon: "/img/iconTech/CSS.png" },
    { name: "JavaScript", icon: "/img/iconTech/JS.webp" },
    { name: "React", icon: "/img/iconTech/ReactNative.png" },
    { name: "Next.js", icon: "/img/iconTech/next.jpeg" },
    { name: "Node JS", icon: "/img/iconTech/node.png" },
    { name: "Postgres", icon: "/img/iconTech/postgres.png" },
    { name: "Python", icon: "/img/iconTech/python.png" },
    { name: "Typescript", icon: "/img/iconTech/TS.webp" },
    { name: "Docker", icon: "/img/iconTech/doker.png" },
    // Agrega más tecnologías e íconos según sea necesario
  ];

  return (
    <>
      <Head>
        <title>Altiora Software</title>
        <meta name="description" content="landing" />
        <link rel="icon" href="/img-logo/Altiora.ico" />
      </Head>
          <Navbar links={links} />
      <Container>
        <div>

          <div className="container mx-auto py-24  lg:px-8">
            <h1 className="text-4xl font-bold text-center text-[#4888CD] dark:text-gray-100">
              Fábrica de Software
            </h1>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 text-center">
              Nuestra Fábrica de Software está a disposición de nuestros
              clientes para la atención directa de sus necesidades de desarrollo
              en pequeña, mediana o gran escala. Cualquiera sea el formato que
              necesite: In-Site, Off-Site, Near-Shore u Off-Shore, nuestro
              proceso de Gestión de la demanda y capacidad le asegurará el
              término en tiempo y forma de sus encargos.
            </p>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
                <h2 className="text-2xl font-bold text-[#4888CD] dark:text-gray-100">
                  Múltiples lenguajes
                </h2>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  Tenemos mucha experiencia trabajando en múltiples lenguajes de
                  programación: Python, Java, JavaScript, SQL.
                </p>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
                <h2 className="text-2xl font-bold text-[#4888CD] dark:text-gray-100">
                  Siempre actualizados
                </h2>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  Mantenemos a nuestro equipo de desarrollo actualizado en las
                  últimas novedades y tendencias de las Tecnologías de la
                  Información.
                </p>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
                <h2 className="text-2xl font-bold text-[#4888CD] dark:text-gray-100">
                  Metodología flexible
                </h2>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  Incorporamos la metodología y reglas de desarrollo de nuestros
                  clientes, incluyendo las de documentación; y ponemos a su
                  disposición nuestras mejores prácticas.
                </p>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
                <h2 className="text-2xl font-bold text-[#4888CD] dark:text-gray-100">
                  Múltiples Plataformas
                </h2>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  Nos especializamos en desarrollar soluciones que funcionan en
                  múltiples plataformas, asegurando que su software sea
                  accesible y funcional en diversos dispositivos y sistemas
                  operativos.
                </p>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
                <h2 className="text-2xl font-bold text-[#4888CD] dark:text-gray-100">
                  Conocimiento funcional
                </h2>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  Contamos con experiencia en los procesos de múltiples
                  sectores: Salud, Educación, Estado, Banca y Seguros, Comercio,
                  etc.
                </p>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
                <h2 className="text-2xl font-bold text-[#4888CD] dark:text-gray-100">
                  Beneficios económicos
                </h2>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  Ofrecemos soluciones costo-efectivas que permiten a nuestros
                  clientes maximizar su inversión en tecnología, asegurando alta
                  calidad y resultados óptimos a un costo razonable.
                </p>
              </div>
            </div>
          </div>
          <section className="container  mx-auto py-12 mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Tecnologías con las que Trabajamos
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="h-16 w-16 mb-2 rounded-full object-cover"
                  />
                  <span className="text-center">{tech.name}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default FabricaSoft;
