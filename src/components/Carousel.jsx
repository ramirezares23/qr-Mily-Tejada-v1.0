import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageCarousel = () => {
  return (
    <Carousel
      showArrows={true}
      autoPlay={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      dynamicHeight={true}
    >
      {/* Falta colocar las imagenes */}
      <div>
        <img src="/placeholder-300x300-1.png" alt="Imagen 1" />
      </div>
      <div>
        <img src="/placeholder-300x300-1.png" alt="Imagen 2" />
      </div>
      <div>
        <img src="/placeholder-300x300-1.png" alt="Imagen 3" />
      </div>
      <div>
        <img src="/placeholder-300x300-1.png" alt="Imagen 4" />
      </div>
      <div>
        <img src="/placeholder-300x300-1.png" alt="Imagen 5" />
      </div>
    </Carousel>
  );
};

export default ImageCarousel;
