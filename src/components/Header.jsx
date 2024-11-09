const Header = () => {
  return (
    <header className="flex flex-col items-center py-8 bg-[#d6d6d6] shadow-md">
      <img
        src="/LogoGris1.jpg"
        alt="KFC Logo"
        className="w-32 mb-4 rounded-full shadow-lg"
      />
      <p className="text-gray-600 text-lg font-medium">@bymilytejada</p>
      <button className="bg-[#636363] text-white px-6 py-2 rounded-full mt-4 hover:bg-gray-700 transition-colors duration-300">
        Contáctanos
      </button>
    </header>
  );
};

export default Header;
