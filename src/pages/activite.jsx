import React, { useRef } from "react";
import Header from "../components/Header";

const Activite = () => {
  const bgRef = useRef(null);

  return (
    <>
      {/* Arrière-plan fixe avec effet de dégradé */}
      <div 
        ref={bgRef}
        className="w-full h-full bg-[url('./bg.jpg')] bg-cover bg-center bg-no-repeat fixed top-0 left-0 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-black/50 before:to-black/70 z-0"
      ></div>
 
      <Header />
      
      {/* Barre entre le Header et la première section */}
      <div className="w-full bg-black bg-opacity-50 py-4 mt-8 relative z-10">
        <p className="text-white text-center text-lg font-semibold">
          Découvrez nos activités spéciales pour des moments inoubliables.
        </p>
      </div>

      {/* Section 1 : Une Ambiance Exceptionnelle */}
      <div className="relative h-screen bg-cover bg-center bg-[url('./a2.jpg')] mt-8 transform transition-transform duration-700 ease-in-out hover:scale-105 overflow-hidden group">
        <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-700 ease-in-out group-hover:bg-opacity-20"></div>
        <div className="relative z-10 text-white text-center p-8 flex flex-col justify-center items-center h-full">
          <h2 className="text-5xl font-bold mb-4 transform transition-transform duration-700 ease-in-out group-hover:scale-110">
            Une Ambiance Exceptionnelle
          </h2>
          <p className="text-xl mt-4 opacity-90 transition-opacity duration-700 ease-in-out group-hover:opacity-100 max-w-2xl">
            Profitez d'une atmosphère chaleureuse et conviviale, parfaite pour des moments de détente et de plaisir en famille ou entre amis.
          </p>
        </div>
      </div>

      {/* Section 2 : Nos Activités Spéciales */}
      <div className="relative h-screen bg-cover bg-center mt-8 bg-[url('./a3.jpg')] transform transition-transform duration-700 ease-in-out hover:scale-105 overflow-hidden group">
        <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-700 ease-in-out group-hover:bg-opacity-20"></div>
        <div className="relative z-10 text-white text-center p-8 flex flex-col justify-center items-center h-full">
          <h2 className="text-5xl font-bold mb-4 transform transition-transform duration-700 ease-in-out group-hover:scale-110">
            Nos Activités Spéciales
          </h2>
          <p className="text-xl mt-4 opacity-90 transition-opacity duration-700 ease-in-out group-hover:opacity-100 max-w-2xl">
            Participez à nos activités spéciales, conçues pour offrir des expériences mémorables et enrichissantes pour tous les âges.
          </p>
        </div>
      </div>

      {/* Section 3 : Une Expérience Gourmande */}
      <div className="relative h-screen bg-cover bg-center mt-8 bg-[url('./a4.jpg')] transform transition-transform duration-700 ease-in-out hover:scale-105 overflow-hidden group">
        <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-700 ease-in-out group-hover:bg-opacity-20"></div>
        <div className="relative z-10 text-white text-center p-8 flex flex-col justify-center items-center h-full">
          <h2 className="text-5xl font-bold mb-4 transform transition-transform duration-700 ease-in-out group-hover:scale-110">
            Une Expérience Gourmande
          </h2>
          <p className="text-xl mt-4 opacity-90 transition-opacity duration-700 ease-in-out group-hover:opacity-100 max-w-2xl">
            Dégustez des plats exquis préparés par nos chefs étoilés, dans un cadre élégant et raffiné. Une expérience culinaire à ne pas manquer.
          </p>
        </div>
      </div>
    </>
  );
};

export default Activite;