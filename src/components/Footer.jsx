import { useLocation } from "react-router-dom";
import { FaInstagram, FaFacebook, FaWhatsapp, FaTwitter } from "react-icons/fa";
import { BsTiktok } from "react-icons/bs";
import venupLogo from "/venUp.png";

const Footer = () => {
  const location = useLocation();

  const handleVenUpClick = () => {
    window.location.href = "https://w.app/p9sNdP";
  };

  if (location.pathname.includes("/productos")) {
    return (
      <footer className="bg-blue-600 text-white py-4 text-center mt-auto">
        <div className="container mx-auto flex items-center justify-center">
          <img src={venupLogo} alt="VenUp Logo" className="footer-logo mb-2" />
          <p className="text-center ml-2">Derechos Reservados</p>
        </div>
      </footer>
    );
  }

  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={venupLogo} alt="VenUp Logo" className="footer-logo" />
        <div className="footer-left-text">
          <p>¿Te gustó esta página?</p>
          <p>Nosotros te hacemos la tuya</p>
          <button className="footer-left-button" onClick={handleVenUpClick}>
            VenUp
          </button>
        </div>
      </div>
      <div className="footer-separator"></div>
      <div className="footer-right">
        <p>Redes Sociales - Mily Tejada</p>
        <div className="footer-right-icons">
          //Faltan los links
          <a
            href="AQUI"
            className="text-white"
          >
            <FaInstagram />
          </a>
          <a href="AQUI" className="text-white">
            <FaWhatsapp />
          </a>
          <a
            href="AQUI"
            className="text-white"
          >
            <BsTiktok />
          </a>
          <a href="AQUI" className="text-white">
            <FaTwitter />
          </a>
          <a
            href="AQUI"
            className="text-white"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
