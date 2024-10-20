import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
      <img
        src={product.image}
        alt={product.name}
        className="w-24 h-24 object-cover rounded-md"
      />
      <div className="ml-4 flex-grow">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <div className="flex items-center mt-2">
          <Link to={`/productos/${product.id}`}>
            <button className="bg-red-600 text-white px-3 py-1 rounded">
              Agregar
            </button>
          </Link>
        </div>
      </div>
      <div className="text-lg font-semibold text-right">
        {product.price.toFixed(2)}$
      </div>
    </div>
  );
};

export default ProductCard;
