import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import designImage from "../public/ux-s-user.jpg"; // Ajusta el path según la ubicación real de tu imagen
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const benefits = [
  { name: "Contenido útil", description: "Nos aseguramos de que la información en su sitio web sea valiosa y fácil de comprender, garantizando que sus visitantes encuentren lo que buscan rápidamente y sin confusión." },
  { name: "Diseño y usabilidad", description: "Creamos diseños atractivos y funcionales que facilitan la navegación, mejorando la experiencia del usuario y aumentando la satisfacción del cliente." },
  { name: "Diseño Responsivo", description: "Nuestros sitios web se adaptan perfectamente a cualquier dispositivo, ya sea una computadora de escritorio, una tablet o un teléfono móvil, asegurando una experiencia óptima en todas las plataformas." },
  { name: "Contenido administrable", description: "Le proporcionamos herramientas intuitivas para que pueda actualizar y gestionar el contenido de su sitio web de manera sencilla y rápida, sin necesidad de conocimientos técnicos avanzados." },
  { name: "Multi idioma", description: "Implementamos soluciones multilingües para que su sitio web pueda comunicarse eficazmente con una audiencia global, ampliando su alcance y atractivo." },
  { name: "Contenido organizado", description: "Estructuramos la información de manera lógica y coherente, facilitando la búsqueda y el acceso a los datos relevantes por parte de sus visitantes." },
  { name: "Hosting", description: "Ofrecemos servicios de alojamiento web confiables y seguros, garantizando que su sitio web esté siempre disponible y funcione sin problemas, con soporte técnico disponible para resolver cualquier inconveniente." },
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

const links = [
  { name: "Inicio", href: "/" },
  { name: "Servicios", href: "/" },
  { name: "Contacto", href: "/" },
  // Añade más enlaces según sea necesario
];

export default function SitiosWeb() {
  const [selectedBenefit, setSelectedBenefit] = useState(null);

  return (
    <div>
      <Navbar links={links} />
      <div className="pt-16"> {/* Asegura que el contenido esté debajo de la Navbar */}
        <div className="container mx-auto p-8">
          
          {/* Sección de Presentación */}
          <section className="mb-16">
            <div className="flex flex-wrap mb-10">
              <div className="w-full md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-4xl font-bold mb-4">Sitios Web</h1>
                <p className="text-lg mb-6">
                  El Diseño de su página web debe ser una carta de presentación ante el mundo y reflejar la calidad de sus productos y servicios.
                  Planificamos, diseñamos y desarrollamos el Sitio Web que se ajuste a las necesidades de su empresa.
                  Combinando estrategia, creatividad y diseño creamos sitios web que buscan el mayor impacto a la hora de comunicar su negocio.
                </p>
                <Link href="/paquetes-todos">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Conoce Nuestros Planes
                  </button>
                </Link>
              </div>
              <div className="w-full md:w-1/2">
                <Image src={designImage} alt="Sitios Web" className="rounded-lg shadow-lg" />
              </div>
            </div>
          </section>
          
          {/* Sección de Beneficios */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-4">Principales Beneficios</h2>
            <div className="flex flex-wrap gap-6">
              <div className="w-full md:w-1/3">
                <ul className="list-disc pl-5 space-y-2">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="cursor-pointer" onClick={() => setSelectedBenefit(benefit)}>
                      {benefit.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-2/3">
                {selectedBenefit && (
                  <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold mb-2">{selectedBenefit.name}</h3>
                    <p>{selectedBenefit.description}</p>
                  </div>
                )}
              </div>
            </div>
          </section>
          
          {/* Sección de Tecnologías */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-4">Tecnologías con las que Trabajamos</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img src={tech.icon} alt={tech.name} className="h-16 w-16 mb-2 rounded-full object-cover" />
                  <span className="text-center">{tech.name}</span>
                </div>
              ))}
            </div>
          </section>
          
        </div>
      </div>
      <Footer />
    </div>
  );
}
