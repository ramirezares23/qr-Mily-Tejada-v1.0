const Team = () => {
  const teamMember = {
    name: "Mily Tejada",
    position: "Fundadora & Directora Creativa",
    image: "/FotoMily.jpg",
    bio: `Mily Tejada es una creativa apasionada por la moda y el empoderamiento femenino. Con más de 15 años de experiencia en la industria, ha dedicado su carrera a diseñar prendas que realzan la belleza y la autenticidad de cada mujer. Bajo su liderazgo, la marca ha crecido, enfocándose en combinar elegancia, comodidad y versatilidad en cada colección. Su visión es que cada clienta se sienta segura y elegante en cualquier ocasión.`,
  };

  return (
    <section className="bg-[#d9d9d9] p-8 flex flex-col items-center md:flex-row md:items-start md:space-x-8">
      <div className="w-full md:w-1/2 flex justify-center md:justify-start">
        <img
          src={teamMember.image}
          alt={teamMember.name}
          className="w-full h-auto max-w-md rounded-lg shadow-md"
        />
      </div>
      <div className="w-full md:w-1/2 mt-6 md:mt-0 text-center md:text-left">
        <h2 className="text-2xl font-bold mb-2">{teamMember.name}</h2>
        <p className="text-lg font-semibold text-gray-700 mb-4">
          {teamMember.position}
        </p>
        <p className="text-gray-600 mb-4">{teamMember.bio}</p>
        <div className="flex justify-center md:justify-start space-x-4 mt-4">
          <a href="#" className="text-blue-600 hover:underline">
            LinkedIn
          </a>
          <a href="#" className="text-gray-600 hover:underline">
            Twitter
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;