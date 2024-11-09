const NoProductsModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-[#f0f0f0] p-6 rounded-lg shadow-lg relative w-80 text-center">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          No se encontraron productos
        </h2>
        <p className="text-gray-600 mb-4">
          No se encontraron productos con las características deseadas.
        </p>
        <button
          onClick={onClose}
          className="w-full bg-[#636363] text-white p-2 rounded-full hover:bg-gray-700 transition-colors duration-300"
        >
          Aceptar
        </button>
      </div>
    </div>
  );
};

export default NoProductsModal;
