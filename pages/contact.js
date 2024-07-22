import Container from "../components/container";
import { useState } from "react";
import { sendContactForm } from "../lib/api";
import ReactGA from "react-ga"
const initValues = { nombre:"" ,email: "", phone: "", message: "" };
const initState = { values: initValues };

const Contact = () => {

  useEffect(()=>{
    ReactGA.pageview(window.location.pathname);
  },[])

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
      value: values.message
    });
    setState((prev) => ({
      ...prev,
    }));
    setState(initState);
    try {
      await sendContactForm(values);
    } catch (error) {
      setState((prev) => ({
        ...prev,
        error: error.message,
      }));
    }
  };

  return (
    <>
      {/* <Navbar /> */}
      <Container>
        <section className="bg-white dark:bg-[#03045E]">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Información a la derecha */}
              <div>
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                  ¿Buscas una solución a la medida?
                </h2>
                <p className="mb-8 lg:mb-16 font-light text-gray-700 dark:text-gray-400 sm:text-xl">
                  Completa el formulario y nuestro equipo te contactará a la brevedad
                </p>
              </div>
              {/* Formulario a la izquierda */}
              <div>
                {/* Si hay un error, se muestra arriba del formulario */}
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
                      type="nombre"
                      id="nombre"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder="nombre@ejemplo.com"
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
                      type="text"
                      id="email"
                      className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder="Tu correo electrónico"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Número de teléfono (opcional)
                    </label>
                    <input
                      name="phone"
                      value={values.phone}
                      onChange={handleChange}
                      type="text"
                      id="phone"
                      className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder="Tu número de teléfono"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Cuéntanos sobre tu negocio
                    </label>
                    <textarea
                      name="message"
                      value={values.message}
                      onChange={handleChange}
                      id="message"
                      rows="6"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Cuéntanos cómo podemos ayudarte"
                    ></textarea>
                  </div>
                  <button
                    type="button"
                    onClick={onSubmit}
                    className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Container>
      {/* <Footer /> */}
      {/* <PopupWidget /> */}
    </>
  );
};

export default Contact;
