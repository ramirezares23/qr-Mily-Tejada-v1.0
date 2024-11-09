import ImageCarousel from "../components/Carousel";
import Content from "../components/Content";
import Team from "../components/Team";
import Header from "../components/Header";

const LandingPage = () => {
  return (
    <div className="bg[#d9d9d9]">
      <Header />
      <div className="mt-4">
        <ImageCarousel />
      </div>
      <Content
        title="Nosotros"
        text=" FALTA "
      />
      <Content
        title="Misión"
        text="Nuestra misión es empoderar a las mujeres que desean sobresalir, sentirse cómodas y elegantes mediante prendas de alta calidad y muy versátiles.  Nos comprometemos a ofrecer una experiencia de moda única, donde cada prenda refleje la belleza interior y exterior de nuestras clientas sintiéndose ampliamente identificadas. Buscamos inspirar confianza y autenticidad a través de diseños cuidadosamente confeccionados y materiales de primera calidad."
      />
      <Content
        title="Visión"
        text="Visualizamos un mundo donde todas las mujeres puedan expresar su individualidad a través de nuestras piezas. Nos esforzamos por ser reconocidos como una marca líder en prendas de vestir que combinan estilo, comodidad y calidad. Nuestra visión es transformar la forma en que las mujeres se visten, haciéndolas sentir seguras, cómodas, bellas y elegantes en cualquier ocasión, destacando su singularidad, estilo propio y elevando su autoestima."
      />
      <Team />
    </div>
  );
};

export default LandingPage;
