import { FaSearch, FaChevronDown } from "react-icons/fa";

const SearchBar = ({ search, setSearch, onFilterClick }) => {
  return (
    <div className="search-bar flex items-center bg-[#c4c4c4] p-2 rounded-full shadow-md w-full max-w-md">
      <FaSearch className="text-gray-600 mr-2" />
      <input
        type="text"
        placeholder="Buscar"
        className="flex-grow p-2 bg-[#c4c4c4] outline-none text-gray-800 placeholder-gray-600"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        onClick={onFilterClick}
        className="flex items-center space-x-1 px-2 py-1 text-gray-800 rounded-full hover:bg-gray-300 transition-colors duration-300"
        style={{
          backgroundColor: "#c4c4c4",
          marginRight: "0.5rem",
          fontSize: "0.875rem",
        }}
      >
        <span className="text-sm">Filtros</span>
        <FaChevronDown className="text-gray-800 text-xs" />
      </button>
    </div>
  );
};

export default SearchBar;
