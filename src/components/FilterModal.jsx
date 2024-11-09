import { useState, useEffect } from "react";

const FilterModal = ({ show, onClose, onApply }) => {
  const [filterType, setFilterType] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setError("");
  }, [minPrice, maxPrice, filterType]);

  const handleApply = () => {
    const min = minPrice === "" ? 0 : parseFloat(minPrice);
    const max = maxPrice === "" ? Number.MAX_VALUE : parseFloat(maxPrice);

    if (isNaN(min) || isNaN(max)) {
      setError("Por favor, ingrese valores numéricos válidos.");
      return;
    }

    if (max < min) {
      setError("El precio máximo debe ser mayor o igual al precio mínimo.");
      return;
    }

    onApply({ filterType, minPrice: min, maxPrice: max });
    onClose();
  };

  const handleMinPriceChange = (e) => {
    const value = e.target.value;
    if (value === "" || !isNaN(value)) {
      setMinPrice(value);
    } else {
      setError("Por favor, ingrese valores numéricos válidos.");
    }
  };

  const handleMaxPriceChange = (e) => {
    const value = e.target.value;
    if (value === "" || !isNaN(value)) {
      setMaxPrice(value);
    } else {
      setError("Por favor, ingrese valores numéricos válidos.");
    }
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-[#f0f0f0] p-6 rounded-lg shadow-lg relative w-80">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-2xl font-bold"
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold mb-4 text-gray-700 text-center">
          Filtros
        </h2>
        {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}
        <div className="mb-4">
          <label className="block mb-2 text-gray-600 font-medium">
            Filtrar por tipo
          </label>
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="w-full p-2 bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#636363] text-gray-700"
          >
            <option value="">Seleccione un Producto</option>
            <option value="Camisa">Camisa</option>
            <option value="Pantalón">Pantalón</option>
            <option value="Blusa">Blusa</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-gray-600 font-medium">
            Rango de precio
          </label>
          <input
            type="text"
            placeholder="Precio mínimo"
            value={minPrice}
            onChange={handleMinPriceChange}
            className="w-full mb-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#636363] text-gray-700"
          />
          <input
            type="text"
            placeholder="Precio máximo"
            value={maxPrice}
            onChange={handleMaxPriceChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#636363] text-gray-700"
          />
        </div>
        <button
          onClick={handleApply}
          className="w-full bg-[#636363] text-white p-2 rounded-full hover:bg-gray-700 transition-colors duration-300"
        >
          Aplicar Filtros
        </button>
      </div>
    </div>
  );
};

export default FilterModal;
