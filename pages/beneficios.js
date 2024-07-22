import Benefits from "../components/benefits";
import SectionTitle from "../components/sectionTitle";
import { benefitOne, benefitTwo } from "../components/data";


export default function Beneficios() {
  return (
    <div>
      <SectionTitle
        pretitle="Ventajas de Altiora"
        title="¿Por qué deberías elegirnos para tu presencia en línea?"
      >
        Altiora ofrece más que una simple página de destino. Es una
        plataforma integral para potenciar tu presencia en línea. Diseñada con
        la última tecnología y en base a tus necesidades, nuestra solución es
        completamente personalizable y está diseñada para destacar tu startup o
        proyecto independiente. ¡Descubre el poder de la innovación con
        nosotros!
      </SectionTitle>
      <Benefits data={benefitOne} />
    </div>
  );
}
