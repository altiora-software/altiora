import Head from "next/head";
import Navbar from "../components/navbar";
import Container from "../components/container";
import Footer from "../components/footer";

const Terms = () => {
  return (
    <>
      <Head>
        <title>Altiora</title>
        <meta
          name="description"
          content="landing"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Container>
        <section className="bg-white dark:bg-gray-900">
          <h2 style={{ color: "rgb(87, 109, 150)" }}>Aviso de Privacidad</h2>
          <p style={{ color: "rgb(87, 109, 150)" }}>
            Su privacidad es importante para nosotros. <br/> Es política de Altiora respetar su privacidad respecto a cualquier información
            personal que podamos recolectar en el sitio web{" "}
            <a href="www.mymtechgroup.com.ar">Altiora</a>, y en los
            otros sitios que posemos y operamos.
          </p>
          <br/>
          <p style={{ color: "rgb(87, 109, 150)" }}>
            Solicitamos información personal solo cuando realmente la requerimos para prestar un servicio. Lo hacemos a través de medios justos y legales, bajo su conocimiento y consentimiento. <br/>También le informamos por qué la estamos recolectando y cómo será utilizada.
          </p>
          <p style={{ color: "rgb(87, 109, 150)" }}>
            Solo retenemos la información recolectada durante el tiempo que sea necesario para brindarle el servicio solicitado.<br/> Cuando recolectamos datos, los protegemos dentro de medios comercialmente aceptables, con el fin de evitar pérdidas y robos, así como el acceso, la divulgación, la copia, el uso o la modificación no autorizada.
          </p>
          <p style={{ color: "rgb(87, 109, 150)" }}>
            No compartimos públicamente ni con terceros su información de identificación personal, excepto cuando es legalmente exigido.<br/>
          </p>
          <p style={{ color: "rgb(87, 109, 150)" }}>
            Nuestra plataforma puede tener enlaces hacia sitios web externos que no son operados por nosotros.<br/> Le indicamos que no tenemos ningún tipo de control sobre el contenido ni las prácticas de esos sitios, y que no nos hacemos responsables por sus respectivos <a href="https://avisodeprivacidad.info/" rel="noopener noreferrer" target="_blank" style={{ color: "inherit" }}>avisos de privacidad</a>.
          </p>
          <p style={{ color: "rgb(87, 109, 150)" }}>
            Usted está en la libertad de rechazar nuestra solicitud de información personal, pero asimismo comprende que tal vez no le podremos prestar algunos de los servicios deseados.
          </p>
          <p style={{ color: "rgb(87, 109, 150)" }}>
            El uso continuo de nuestro sitio será considerado como aceptación de nuestras prácticas respecto a la privacidad y a la información personal.
          </p>
          <p style={{ color: "rgb(87, 109, 150)" }}>
            Si tiene alguna inquietud referente a la forma como administramos los datos de nuestros usuarios y la información personal, póngase en contacto con nosotros.
          </p>
          <h2 style={{ color: "rgb(87, 109, 150)" }}>Política de Cookies Altiora</h2>
          <h3 style={{ color: "rgb(87, 109, 150)" }}>¿Qué son las cookies?</h3>
          <p>
            Tal como se acostumbra en casi todos los sitios web profesionales, este sitio usa cookies, que son pequeños archivos que se almacenan en su computadora para mejorar su experiencia.
          </p>
          {/* Continúa con el resto del contenido HTML */}
          {/* ... */}
          <h3 style={{ color: "rgb(87, 109, 150)" }}>Compromisos del Usuario</h3>
          <p style={{ color: "rgb(87, 109, 150)" }}>
            El usuario se compromete a hacer un uso adecuado de los contenidos y de la información que Altiora ofrece en el sitio y, con carácter indicativo, pero no limitado, a:
          </p>
          <ul>
            <li><span style={{ color: "rgb(87, 109, 150)" }}>A) No involucrarse en actividades ilegales o que sean contrarias a la buena fe y al orden público;</span></li>
            <li><span style={{ color: "rgb(87, 109, 150)" }}>B) No difundir contenidos ni publicidad de índole racista, xenofóbico, <a href='https://privacypolicyjapan.com/' style={{ color: 'inherit !important', textDecoration: 'none !important', fontSize: 'inherit !important' }}>Privacy Policy Generator</a> o azar, pornografía, terrorismo o que esté en contra de los derechos humanos;</span></li>
            <li><span style={{ color: "rgb(87, 109, 150)" }}>C) No causar daños a los sistemas físicos (hardware) y lógicos (software) de Altiora, de sus proveedores o terceros, para introducir o distribuir virus informáticos u otros sistemas de hardware o software que sean capaces de producir los perjuicios anteriormente mencionados.</span></li>
          </ul>
          <h3 style={{ color: "rgb(87, 109, 150)" }}>Más información</h3>
          <p style={{ color: "rgb(87, 109, 150)" }}>
            Esperamos que esta información sea clara. Y como mencionado anteriormente: cuando no tenga seguridad de que necesita las cookies, es más seguro permitirlas, en caso de que esté interactuando con uno de los recursos que utiliza en nuestro sitio web.
          </p>
          <p style={{ color: "rgb(87, 109, 150)" }}>
            Esta política es efectiva a partir de 3 March 2024 21:37.
          </p>
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Terms;
