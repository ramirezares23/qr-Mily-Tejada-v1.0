import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-message">Página no encontrada</p>
      <Link to="/" className="not-found-button">
        Volver a la página principal
      </Link>
    </div>
  );
};

export default NotFound;
