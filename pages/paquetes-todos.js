import Link from "next/link";
import Container from "../components/container";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Image from "next/image";

export default function Servicios() {
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
      <Container className="grid h-[90%] justify-center items-center ">
        <header className="mt-20 mb-12 text-center px-8 ">
          <h2 className="text-[35px] font-bold leading-snug tracking-tight text-[#4888CD] lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
            Paquetes de Diseño Web
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 mt-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Tenemos todo lo que necesitas, buen precio y buen servicio
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-lg">
                Contamos con 4 Paquetes de Diseño Web que incluyen todo lo que
                necesitas para tener un sitio web para promocionar tu negocio,
                incrementar tus ventas, posicionarte en buscadores
              </p>
            </div>
            <div className="bg-gray-200 dark:bg-gray-700 rounded-lg">
              <Image
                src="/img/paquetes.jpg"
                width={500}
                height={500}
                alt="paquetes"
                className=" w-full rounded-lg object-cover"
              />
            </div>
          </div>
        </header>
        {/* DIV DE PAQUETES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* PAQUETE 1 */}
          <Link href={"/paquete1"}>
            <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg text-center">
              <h4 className="text-xl font-semibold mb-4">Paquete 1</h4>
              <p>Descripción breve del Paquete 1</p>
            </div>
          </Link>
          {/* PAQUETE 2  */}
          <Link href={"/paquete2"}>
            <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg text-center">
              <h4 className="text-xl font-semibold mb-4">Paquete 2</h4>
              <p>Descripción breve del Paquete 2</p>
            </div>
          </Link>
          {/* PAQUETE 3  */}
          <Link href={"/paquete3"}>
            <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg text-center">
              <h4 className="text-xl font-semibold mb-4">Paquete 3</h4>
              <p>Descripción breve del Paquete 3</p>
            </div>
          </Link>

          {/* PAQUETE 4  */}
          <Link href={"/paquete3"}>
            <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg text-center">
              <h4 className="text-xl font-semibold mb-4">Paquete 4</h4>
              <p>Descripción breve del Paquete 4</p>
            </div>
          </Link>
        </div>
      </Container>

      {/* TODOS LOS PAQUETES INCLUYEN */}
      <Container className="mb-12 p-8">
        <h3 className="text-2xl font-bold mb-4">
          Todos nuestros Paquetes{" "}
          <span className="text-[#4888CD]">Incluyen:</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="p-6 bg-gray-50 dark:bg-gray-900 shadow-lg rounded-lg"
            >
              <h4 className="text-xl font-semibold mb-4">TITULO {i + 1}</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                semper consequat libero a consequat. Cras ac volutpat ex, nec
                posuere metus. Praesent porttitor iaculis condimentum. Praesent
                malesuada mi nunc, non auctor ex scelerisque id. Sed sed
                pellentesque lorem, eu blandit risus.
              </p>
            </div>
          ))}
        </div>
      </Container>

      <Footer />
    </div>
  );
}
