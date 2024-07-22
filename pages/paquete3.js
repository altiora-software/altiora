import React from "react";
import Navbar from "../components/navbar";

export default function Paquetes() {
  const caracteristicas = [
    {
      titulo: "Secciones",
      pro: "7 Secciones",
      descripcion:
        "Diferentes secciones para organizar el contenido del sitio.",
    },
    {
      titulo: "Propuesta de diseño",
      pro: "Diseño personalizado avanzado",
      descripcion:
        "Propuesta estética personalizada basada en tus preferencias.",
    },
    {
      titulo: "Versión para celulares",
      pro: "Optimización avanzada para móviles",
      descripcion: "Diseño adaptable a dispositivos móviles.",
    },
    {
      titulo: "Dominio",
      pro: "Incluido",
      descripcion: "Registro de un dominio personalizado.",
    },
    {
      titulo: "Hosting",
      pro: "Incluido con mayor capacidad",
      descripcion: "Alojamiento web para tu sitio.",
    },
    {
      titulo: "Cuentas de correo",
      pro: "Ilimitadas cuentas",
      descripcion: "Cuentas de correo asociadas a tu dominio.",
    },
    {
      titulo: "Galería de imágenes",
      pro: "Galería avanzada",
      descripcion: "Espacio para mostrar una galería de imágenes.",
    },
    {
      titulo: "Animaciones",
      pro: "Animaciones avanzadas",
      descripcion: "Efectos visuales para mejorar la experiencia del usuario.",
    },
    {
      titulo: "Posicionamiento en buscadores",
      pro: "Optimización avanzada",
      descripcion: "Optimización para aparecer en los resultados de búsqueda.",
    },
    {
      titulo: "Ubicaciones con Google Maps",
      pro: "Integración avanzada",
      descripcion: "Integración de mapas de Google para mostrar ubicaciones.",
    },
    {
      titulo: "Sincronización con redes sociales",
      pro: "Integración avanzada",
      descripcion: "Vinculación con tus perfiles en redes sociales.",
    },
    {
      titulo: "Estadísticas de visita",
      pro: "Análisis avanzado",
      descripcion: "Herramientas para monitorear el tráfico del sitio.",
    },
    {
      titulo: "Formulario de contacto",
      pro: "Formularios avanzados",
      descripcion: "Formulario para que los visitantes puedan contactarte.",
    },
    {
      titulo: "Asesoría profesional",
      pro: "Asesoría continua",
      descripcion: "Consejos y orientación profesional para mejorar tu sitio.",
    },
    {
      titulo: "Soporte técnico",
      pro: "Soporte prioritario",
      descripcion: "Asistencia técnica para resolver problemas del sitio.",
    },
    {
      titulo: "Acepta pagos en línea",
      pro: "Integración avanzada",
      descripcion: "Integración con plataformas de pago en línea.",
    },
    {
      titulo: "1 mes de chat gratis",
      basico: "Incluido",
      intermedio: "3 meses de chat gratis",
      pro: "6 meses de chat gratis",
      descripcion: "Soporte mediante chat gratuito por un mes.",
    },
  ];

  const paquetes = [
    {
      titulo: "Paquete Profesional",
      subtitulo: "Todo lo que necesitas y más",
      nombre: "profesional",
      precio: "USD 600",
      caracteristicas: caracteristicas.map((caracteristica) => ({
        titulo: caracteristica.titulo,
        valor: caracteristica.pro,
        descripcion: caracteristica.descripcion,
      })),
    },
  ];

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
              <h1 className="text-4xl font-bold">Paquetes de Diseño Web</h1>
              <h2 className="text-2xl font-light">Elige el paquete que mejor se adapte a tus necesidades</h2>
            </div>
            {/* Paquetes */}
            <div id="general-paquetes" className="w-full max-w-4xl mx-auto">
              <div className="flex flex-col items-center">
                {paquetes.map((paquete, index) => (
                  <div key={index} className="mb-8 w-full">
                    {/* Títulos de las columnas */}
                    <div className="w-full text-gray-900 grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-200 p-4 rounded-t-lg font-bold text-lg text-center md:text-left">
                      <div></div>
                      <div>{paquete.precio}</div>
                      <div>Descripción</div>
                    </div>

                    {/* Contenido de cada fila */}
                    {paquete.caracteristicas.map((caracteristica, idx) => (
                      <div
                        key={idx}
                        className={`w-full grid grid-cols-1 md:grid-cols-3 gap-4 p-4 ${
                          idx % 2 === 0 ? "bg-gray-100" : "bg-gray-300"
                        }`}
                      >
                        <div className="columna-desc columna-desc-uno font-bold text-center text-gray-900 md:text-left">
                          {caracteristica.titulo}
                        </div>
                        <div className="columna-desc columna-desc-dos text-gray-600 text-center md:text-left">
                          {caracteristica.valor}
                        </div>
                        <div className="columna-desc columna-desc-tres text-gray-600 text-center md:text-left">
                          {caracteristica.descripcion}
                        </div>
                      </div>
                    ))}

                    {/* Footer de los paquetes */}
                    <div className="w-full text-gray-900 grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-200 p-4 rounded-b-lg font-bold text-lg text-center md:text-left">
                      <div></div>
                      <div className="flex justify-center md:justify-start">
                        <button className="bg-blue-500 text-white py-2 px-4 rounded">
                          Contratar
                        </button>
                      </div>
                      <div></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <footer className="bg-gray-900 text-white p-4 text-center">
          &copy; {new Date().getFullYear()} Sideris. Todos los derechos
          reservados.
        </footer>
      </div>
    </div>
  );
}
