import React, { useRef } from "react";
import Header from "../components/Header";

const Beach = () => {
  const bgRef = useRef(null);

  return (
    <>
      {/* Arrière-plan fixe avec effet de dégradé */}
      <div 
        ref={bgRef}
        className="w-full h-full bg-[url('./bg.jpg')] bg-cover bg-center bg-no-repeat fixed top-0 left-0 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-black/50 before:to-black/70 z-0"
      ></div>
 
      <Header></Header>
      
      {/* Barre entre le Header et la première section */}
      <div className="w-full bg-black bg-opacity-50 py-4 mt-8 relative z-10">
        <p className="text-white text-center text-lg font-semibold">
          Bienvenue à la plage de l'hôtel : un paradis de sable fin et d'eaux cristallines.
        </p>
      </div>

      {/* Section 1 : Découvrez notre plage */}
      <div className="relative h-screen bg-cover bg-center bg-[url('./beach1.jpg')] mt-8 transform transition-transform duration-700 ease-in-out hover:scale-105 overflow-hidden group">
        <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-700 ease-in-out group-hover:bg-opacity-20"></div>
        <div className="relative z-10 text-white text-center p-8 flex flex-col justify-center items-center h-full">
          <h2 className="text-5xl font-bold mb-4 transform transition-transform duration-700 ease-in-out group-hover:scale-110">
            Découvrez Notre Plage
          </h2>
          <p className="text-xl mt-4 opacity-90 transition-opacity duration-700 ease-in-out group-hover:opacity-100 max-w-2xl">
            Plongez dans un cadre idyllique, où le sable doré et les eaux turquoises vous invitent à la détente et à l'évasion.
          </p>
        </div>
      </div>

      {/* Section 2 : Une ambiance paradisiaque */}
      <div className="relative h-screen bg-cover bg-center mt-8 bg-[url('./beach2.jpg')] transform transition-transform duration-700 ease-in-out hover:scale-105 overflow-hidden group">
        <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-700 ease-in-out group-hover:bg-opacity-20"></div>
        <div className="relative z-10 text-white text-center p-8 flex flex-col justify-center items-center h-full">
          <h2 className="text-5xl font-bold mb-4 transform transition-transform duration-700 ease-in-out group-hover:scale-110">
            Une Ambiance Paradisiaque
          </h2>
          <p className="text-xl mt-4 opacity-90 transition-opacity duration-700 ease-in-out group-hover:opacity-100 max-w-2xl">
            Profitez d'une atmosphère paisible et ensoleillée, idéale pour des moments de détente en famille ou entre amis.
          </p>
        </div>
      </div>

      {/* Section 3 : Nos Activités Nautiques */}
      <div className="relative h-screen bg-cover bg-center mt-8 bg-[url('./beach3.jpg')] transform transition-transform duration-700 ease-in-out hover:scale-105 overflow-hidden group">
        <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-700 ease-in-out group-hover:bg-opacity-20"></div>
        <div className="relative z-10 text-white text-center p-8 flex flex-col justify-center items-center h-full">
          <h2 className="text-5xl font-bold mb-4 transform transition-transform duration-700 ease-in-out group-hover:scale-110">
            Nos Activités Nautiques
          </h2>
          <p className="text-xl mt-4 opacity-90 transition-opacity duration-700 ease-in-out group-hover:opacity-100 max-w-2xl">
            Découvrez une variété d'activités nautiques, du surf à la plongée sous-marine, pour des souvenirs inoubliables.
          </p>
        </div>
      </div>
    </>
  );
};

export default Beach;