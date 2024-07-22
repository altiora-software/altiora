import React from "react";
import Navbar from "../components/navbar";

export default function Paquete4() {

  const caracteristicas = [
    {
      titulo: "Secciones",
      incluido: true,
      descripcion:
        "Diferentes secciones para organizar el contenido del sitio.",
    },
    {
      titulo: "Propuesta de diseño",
      incluido: true,
      descripcion:
        "Propuesta estética personalizada basada en tus preferencias.",
    },
    {
      titulo: "Versión para celulares",
      incluido: true,
      descripcion: "Diseño adaptable a dispositivos móviles.",
    },
    {
      titulo: "Dominio",
      incluido: true,
      descripcion: "Registro de un dominio personalizado.",
    },
    {
      titulo: "Hosting",
      incluido: true,
      descripcion: "Alojamiento web para tu sitio.",
    },
    {
      titulo: "Cuentas de correo",
      incluido: true,
      descripcion: "Cuentas de correo asociadas a tu dominio.",
    },
    {
      titulo: "Galería de imágenes",
      incluido: true,
      descripcion: "Espacio para mostrar una galería de imágenes.",
    },
    {
      titulo: "Animaciones",
      incluido: false,
      descripcion: "Efectos visuales para mejorar la experiencia del usuario.",
    },
    {
      titulo: "Posicionamiento en buscadores",
      incluido: false,
      descripcion: "Optimización para aparecer en los resultados de búsqueda.",
    },
    {
      titulo: "Ubicaciones con Google Maps",
      incluido: true,
      descripcion: "Integración de mapas de Google para mostrar ubicaciones.",
    },
    {
      titulo: "Sincronización con redes sociales",
      incluido: true,
      descripcion: "Vinculación con tus perfiles en redes sociales.",
    },
    {
      titulo: "Estadísticas de visita",
      incluido: true,
      descripcion: "Herramientas para monitorear el tráfico del sitio.",
    },
    {
      titulo: "Formulario de contacto",
      incluido: true,
      descripcion: "Formulario para que los visitantes puedan contactarte.",
    },
    {
      titulo: "Asesoría profesional",
      incluido: false,
      descripcion: "Consejos y orientación profesional para mejorar tu sitio.",
    },
    {
      titulo: "Soporte técnico",
      incluido: true,
      descripcion: "Asistencia técnica para resolver problemas del sitio.",
    },
    {
      titulo: "Acepta pagos en línea",
      incluido: false,
      descripcion: "Integración con plataformas de pago en línea.",
    },
    {
      titulo: "1 mes de chat gratis",
      incluido: true,
      descripcion: "Soporte mediante chat gratuito por un mes.",
    },
  ];

  const paquete = {
    titulo: "Paquete Básico 4 de Diseño Web",
    subtitulo: "¡Económico, rápido y funcional!",
    nombre: "basico",
    caracteristicas: [
      {
        titulo: "Secciones",
        valor: "1 Sección",
        descripcion:
          "Una sección permite poner la información de tu producto o servicio de manera directa, para que el usuario no se pierda buscando lo que necesita.",
      },
      {
        titulo: "Propuesta de Diseño",
        valor: "Incluido",
        descripcion:
          "Nuestros diseñadores te realizarán la propuesta de diseño para que tu sitio cumpla con tus requerimientos. Tu página será un lugar atractivo para tus visitantes.",
        info: "El diseño se realiza tomando en cuenta las necesidades del cliente, y tomando en cuenta el logotipo que se proporcione. Leer mas",
      },
      // Añade más características según sea necesario...
    ],
  };

  const links = [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/" },
    { name: "Contacto", href: "/" },
    //  { name: "Paquetes", href: "/paquetes-todos" },
    // Añade más enlaces según sea necesario
  ];


  return (
    <div>
      <Navbar links={links} />

      <div className="container mx-auto p-4 mt-18 md:mt-32">
        {/* Chat Link */}

        {/* Header */}
        <header className="bg-gray-900 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            {/* titutlo */}
            <div className="text-lg">
              <a href="/" title="Diseño de Páginas Web" className="font-bold">
                Diseño de Páginas Web
              </a>
            </div>
            <div className="hidden md:flex space-x-4">
              <a
                href="mailto:ventas@sideris.com.mx"
                title="Correo de Diseño Web"
                className="flex items-center"
              >
                <b className="icon-email mr-2"></b> ventas@sideris.com.mx
              </a>
              <a
                href="tel:55 5526 1904"
                title="Teléfono de Programador Web"
                className="flex items-center"
              >
                <b className="icon-telefono mr-2"></b> 55 5526 1904
              </a>
              <a
                href="tel:55 4078 1995"
                title="Celular de Desarrollador Web"
                className="flex items-center"
              >
                <b className="icon-celular mr-2"></b> 55 4078 1995
                <img
                  src="images/whatsapp.png"
                  alt="WhatsApp"
                  className="ml-2"
                />
              </a>
            </div>
          </div>
        </header>

        {/* Package Details */}
        <div id="pagina">
          <div id="contenido">
            <div className="cabecera-contenido text-center my-8">
              <h1 className="text-4xl font-bold">{paquete.titulo}</h1>
              <h2 className="text-2xl font-light">{paquete.subtitulo}</h2>
            </div>
            {/* CUADRO  */}
            <div id="general-paquetes" className="w-full max-w-4xl mx-auto">
              <div className="flex flex-col items-center">
                {/* Títulos de las columnas */}
                <div className="w-full text-gray-900 grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-200 p-4 rounded-t-lg font-bold text-lg text-center md:text-left">
                  <div></div>
                  <div>BÁSICO $80 MIL PESOS</div>
                  <div>Descripción</div>
                </div>

                {/* Contenido de cada fila */}
                {caracteristicas.map((caracteristica, index) => (
                  <div
                    key={index}
                    className={`w-full grid grid-cols-1 md:grid-cols-3 gap-4 p-4 ${
                      index % 2 === 0 ? "bg-gray-100" : "bg-gray-300"
                    }`}
                  >
                    <div className="columna-desc columna-desc-uno font-bold text-center text-gray-900 md:text-left">
                      {caracteristica.titulo}
                    </div>
                    <div className="columna-desc columna-desc-dos text-gray-600 text-center md:text-left">
                      {caracteristica.incluido ? "Incluido" : "No incluido"}
                    </div>
                    <div className="columna-desc columna-desc-tres text-gray-700 text-center md:text-left">
                      {caracteristica.descripcion}
                    </div>
                  </div>
                ))}

                {/* BOTÓN */}
                <div className="text-center mt-8 w-full">
                  <a
                    href={`contacto-de-paginas-web-economicas.php?paquete=${paquete.nombre}`}
                    title="SOLICITA TU PÁGINA WEB"
                  >
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                      SOLICITAR COTIZACIÓN DE ESTE PAQUETE
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
