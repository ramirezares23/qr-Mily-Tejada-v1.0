import { Link } from "react-router-dom";
// Falta colocar el logo
import Logo from "/LogoGris1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <nav className="bg-[#636363] text-white p-4 flex justify-center items-center">
      <div className="flex items-center space-x-8">
        <img src={Logo} alt="Logo Gris1" className="w-24" />
        <div className="flex items-center space-x-4">
          <Link to="/" className="hover:underline">
            Inicio
          </Link>
          <span className="border-l-2 border-white h-6"></span>
          <Link to="/productos" className="hover:underline">
            Productos
          </Link>
          <Link
            to="/carrito"
            className="hover:underline flex items-center space-x-2"
          >
            <FontAwesomeIcon icon={faShoppingCart} className="text-white" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
