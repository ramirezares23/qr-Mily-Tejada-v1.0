const Header = () => {
  return (
    <header className="flex flex-col items-center py-8 bg-white shadow-md">
      <img src="/placeholder-300x300-1.png" alt="KFC Logo" className="w-32 mb-4" />
      <p className="text-gray-600">@bymilytejada</p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded mt-4">
        Contáctanos
      </button>
    </header>
  );
};

export default Header;
