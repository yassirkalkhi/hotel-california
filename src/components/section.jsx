export default  Section = ({ title, text, image }) => {
    return (
      <div
        className={`relative h-screen bg-cover bg-center mt-8 transform transition-transform duration-700 ease-in-out hover:scale-105 overflow-hidden group`}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-700 ease-in-out group-hover:bg-opacity-20"></div>
        <div className="relative z-10 text-white text-center p-8 flex flex-col justify-center items-center h-full">
          <h2 className="text-5xl font-bold mb-4 transform transition-transform duration-700 ease-in-out group-hover:scale-110">
            {title}
          </h2>
          <p className="text-xl mt-4 opacity-90 transition-opacity duration-700 ease-in-out group-hover:opacity-100 max-w-2xl">
            {text}
          </p>
        </div>
      </div>
    );
  };
  