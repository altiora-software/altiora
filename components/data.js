import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/asisstance.png";
import benefitTwoImg from "../public/img/kiss.png";

const benefitOne = {
  title: "Descubre los Beneficios de Elegir Altiora",
  desc: "Sumérgete en el universo de Altiora, donde nuestras soluciones tecnológicas no solo impulsan tu proyecto, sino que lo transforman en una experiencia digital extraordinaria. Esta sección es como un lienzo donde la innovación y la creatividad se fusionan.",
  image: benefitOneImg, // Asegúrate de reemplazar benefitOneImg con la variable de tu imagen específica
  bullets: [
    {
      title: "Comprende a fondo a tus clientes",
      desc: "Nuestro enfoque innovador te permite comprender las necesidades de tus usuarios para ofrecer soluciones personalizadas y efectivas.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Potencia la adquisición de clientes",
      desc: "Descubre cómo Altiora puede mejorar tu estrategia de adquisición de clientes, aumentando tu presencia y atrayendo a nuevos clientes de manera efectiva.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Aumenta la retención de clientes",
      desc: "Nuestras soluciones contribuyen a mantener a tus clientes satisfechos y comprometidos a largo plazo, fomentando la lealtad y el crecimiento sostenible.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Altiora",
  desc: "Sumérgete en el futuro digital con Altiora, donde brindamos soluciones tecnológicas diseñadas para impulsar el crecimiento de tu emprendimiento. Nuestra plataforma abre las puertas a un mundo de posibilidades, proporcionándote herramientas para capturar y analizar datos de ingresos de manera efectiva. En esta sección.",
  image: benefitTwoImg, // Asegúrate de reemplazar benefitTwoImg con la variable de tu imagen específica
  bullets: [
    {
      title: "Optimiza tu Operación",
      desc: "Descubre la eficiencia y agilidad que nuestras soluciones brindan, optimizando cada aspecto de tu emprendimiento para un rendimiento máximo.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Optimización de Rentabilidad Empresarial",
      desc: "En Altiora, te brindamos la herramienta para profundizar en el corazón de tu negocio. Maximiza tu rentabilidad al conocer a fondo cada aspecto, gracias a nuestra tecnología avanzada. Ofrecemos la clave para impulsar la eficiencia operativa y dejar una marca duradera en tus clientes.",
      icon: <AdjustmentsHorizontalIcon />,
    },    
    {
      title: "Diseño de Aplicaciones Centrado en el Usuario",
      desc: "En Altiora, nos especializamos en el arte de diseñar aplicaciones que van más allá de la estética. Creamos experiencias adaptadas a tus tipos de usuarios, garantizando que cada interacción sea no solo agradable, sino también intuitiva. Tu aplicación será una extensión de tu identidad, reflejando nuestra atención meticulosa al diseño.",
      icon: <AdjustmentsHorizontalIcon />,
    },    
  ]
};



export {benefitOne, benefitTwo};
