import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProductById } from "../controllers/product";
import { FaArrowLeft } from "react-icons/fa";
import QuantitySelector from "../components/QuantitySelector";
import NoZeroProduct from "../components/NoZeroProduct";
import SuccessModal from "../components/SuccessModal";
import CommentModal from "../components/CommentModal"; // Importamos el nuevo modal

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showCommentModal, setShowCommentModal] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      const productData = await getProductById(id);
      setProduct(productData);
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = (comment) => {
    if (quantity === 0) {
      setShowError(true); // Mostramos el error
      return;
    }

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const itemIndex = cart.findIndex((item) => item.id === product.id);

    const description = comment ? comment : ""; // Añadir "" si no hay comentario

    if (itemIndex >= 0) {
      cart[itemIndex].quantity += quantity;
      cart[itemIndex].description = description; // Guardar la descripción
    } else {
      const productToAdd = {
        ...product,
        quantity,
        description, // Añadir descripción
      };
      cart.push(productToAdd);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    setShowSuccess(true); // Mostrar el modal de éxito
  };

  const handleRequestToAdd = () => {
    if (quantity === 0) {
      setShowError(true); // Mostramos el error si la cantidad es 0
    } else {
      setShowCommentModal(true); // Mostrar el modal de comentarios
    }
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <button
        onClick={() => navigate(-1)}
        className="text-red-600 mb-4 flex items-center"
      >
        <FaArrowLeft className="mr-2" />
        Volver
      </button>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <div className="flex justify-between items-center mb-4">
          <p className="text-lg font-bold">{product.type}</p>
          <p className="text-lg font-bold text-red-600">
            {product.price.toFixed(2)}$
          </p>
        </div>
        <p className="mb-4">{product.description}</p>
        <div className="flex items-center">
          <QuantitySelector
            product={product}
            quantity={quantity}
            setQuantity={setQuantity}
          />
          <button
            onClick={handleRequestToAdd} // Mostrar el modal de comentarios al hacer clic
            className="bg-red-600 text-white px-4 py-2 rounded-lg ml-4"
          >
            Pedir
          </button>
          <NoZeroProduct show={showError} onClose={() => setShowError(false)} />
          <SuccessModal
            show={showSuccess}
            onClose={() => setShowSuccess(false)}
            productName={product.name}
            quantity={quantity}
            setQuantity={setQuantity}
          />
          <CommentModal
            show={showCommentModal}
            onClose={() => setShowCommentModal(false)}
            onSubmit={handleAddToCart} // Añadir producto al carrito cuando se acepta
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
