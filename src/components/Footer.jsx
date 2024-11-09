import { useLocation } from "react-router-dom";
import { FaInstagram, FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";
import venupLogo from "/venUp.png";

const Footer = () => {
  const location = useLocation();

  const handleVenUpClick = () => {
    window.location.href = ""; // Agrega aquí la URL deseada
  };

  if (location.pathname.includes("/productos")) {
    return (
      <footer className="bg-[#636363] text-white py-4 text-center mt-auto">
        <div className="container mx-auto flex items-center justify-center">
          <img
            src={venupLogo}
            alt="VenUp Logo"
            className="w-16 h-16 rounded-full mb-2"
          />
          <p className="text-center ml-2">Derechos Reservados</p>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-[#636363] text-white py-8 px-4 md:px-16 flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center space-x-4">
        <img
          src={venupLogo}
          alt="VenUp Logo"
          className="w-16 h-16 rounded-full shadow-lg"
        />
        <div className="text-center md:text-left">
          <p className="font-semibold">¿Te gustó esta página?</p>
          <p>Nosotros te hacemos la tuya</p>
          <button
            onClick={handleVenUpClick}
            className="bg-white text-[#636363] px-4 py-2 rounded-full mt-2 hover:bg-gray-300 transition-colors duration-300"
          >
            VenUp
          </button>
        </div>
      </div>

      <div className="hidden md:block h-20 border-l-2 border-white mx-8"></div>

      <div className="text-center md:text-right mt-6 md:mt-0">
        <p className="font-semibold">Redes Sociales - Mily Tejada</p>
        <div className="flex justify-center md:justify-end space-x-4 mt-2">
          <a
            href="https://www.instagram.com/bymilytejada?igsh=MWI4NW9uNHE5NDlqMA=="
            className="text-white hover:text-gray-300 transition-colors duration-300"
            aria-label="Instagram"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=584144093669&text=Hola%2C+me+gustar%C3%ADa+realizar+un+pedido.+%E2%9C%A8&type=phone_number&app_absent=0"
            className="text-white hover:text-gray-300 transition-colors duration-300"
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={20} />
          </a>
          <a
            href="tel:+584144093669"
            className="text-white hover:text-gray-300 transition-colors duration-300"
            aria-label="Llamadas"
          >
            <FaPhone size={20} />
          </a>
          <a
            href="mailto:correo@ejemplo.com"
            className="text-white hover:text-gray-300 transition-colors duration-300"
            aria-label="Correo"
          >
            <FaEnvelope size={20} />
          </a>
        </div>
        <p className="mt-4 text-sm text-gray-300">
          Showroom previa cita: Urb. La Boyera, Caracas, Venezuela
        </p>
      </div>
    </footer>
  );
};

export default Footer;
