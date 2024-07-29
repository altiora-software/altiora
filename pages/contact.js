import Container from "../components/container";
import { useState, useEffect } from "react";
import { sendContactForm } from "../lib/api";
import ReactGA from "react-ga";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initValues = { nombre: "", email: "", phone: "", pais: "", servicio: "", detalles: "", otroPais: "" };
const initState = { values: initValues };

const Contact = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  const [state, setState] = useState(initState);
  const { values, error } = state;

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async () => {
    ReactGA.event({
      category: values.nombre,
      action: 'Form contact',
      label: 'Form Contact',
      value: values.detalles,
    });
    setState((prev) => ({
      ...prev,
    }));
    try {
      await sendContactForm(values);
      toast.success("Mensaje enviado con éxito!");
      setState(initState);
    } catch (error) {
      toast.error("Error al enviar el mensaje. Por favor, inténtalo nuevamente.");
      setState((prev) => ({
        ...prev,
        error: error.message,
      }));
    }
  };

  return (
    <>
      <Container>
        <section className="bg-white dark:bg-[#03045E]">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                  ¿Buscas una solución a la medida?
                </h2>
                <p className="mb-8 lg:mb-16 font-light text-gray-700 dark:text-gray-400 sm:text-xl">
                  Completa el formulario y nuestro equipo te contactará a la brevedad
                </p>
              </div>
              <div>
                {error && (
                  <h2 className="p-4 text-xl text-center text-red-600">{error}</h2>
                )}
                <form className="space-y-8">
                  <div>
                    <label htmlFor="nombre" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Nombre
                    </label>
                    <input
                      name="nombre"
                      value={values.nombre}
                      onChange={handleChange}
                      type="text"
                      id="nombre"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder="Nombre completo"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Celular
                    </label>
                    <input
                      name="phone"
                      value={values.phone}
                      onChange={handleChange}
                      type="tel"
                      id="phone"
                      className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder="Ingresá el número"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Correo
                    </label>
                    <input
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      type="email"
                      id="email"
                      className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder="Ingresá tu email"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="pais" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      ¿Cuál es tu país?
                    </label>
                    <select
                      name="pais"
                      value={values.pais}
                      onChange={handleChange}
                      id="pais"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      required
                    >
                      <option value="">Seleccionar país</option>
                      <option value="argentina">Argentina</option>
                      <option value="uruguay">Uruguay</option>
                      <option value="chile">Chile</option>
                      <option value="espana">España</option>
                      <option value="eeuu">EEUU</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                  {values.pais === "otro" && (
                    <div>
                      <label htmlFor="otroPais" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Especificar país
                      </label>
                      <input
                        name="otroPais"
                        value={values.otroPais}
                        onChange={handleChange}
                        type="text"
                        id="otroPais"
                        className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        placeholder="Especificar país"
                        required
                      />
                    </div>
                  )}
                  <div>
                    <label htmlFor="servicio" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Servicio
                    </label>
                    <select
                      name="servicio"
                      value={values.servicio}
                      onChange={handleChange}
                      id="servicio"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      required
                    >
                      <option value="">Seleccioná el servicio</option>
                      <option value="software-factory">Software Factory</option>
                      <option value="aplicaciones-web">Aplicaciones Web</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="detalles" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Detalles
                    </label>
                    <textarea
                      name="detalles"
                      value={values.detalles}
                      onChange={handleChange}
                      id="detalles"
                      rows="6"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Brindanos toda la información posible para poder enviarte un presupuesto."
                      required
                    ></textarea>
                  </div>
                  <button
                    type="button"
                    onClick={onSubmit}
                    className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    Enviar mensaje
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Container>
      <ToastContainer />
    </>
  );
};

export default Contact;
