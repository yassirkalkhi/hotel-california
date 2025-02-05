import React, { useRef } from "react";
import Header from "../components/Header"; 

const Fitness = () => {
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
                    Bienvenue au fitness de l'hôtel : une expérience sportive inoubliable.
                </p>
            </div>
            {/* Section 1 : Découvrez notre fitness */}
            <div className="relative h-screen bg-cover bg-center bg-[url('./f3.jpg')] mt-8 transform transition-transform duration-700 ease-in-out hover:scale-105 overflow-hidden group">
                <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-700 ease-in-out group-hover:bg-opacity-20"></div>
                <div className="relative z-10 text-white text-center p-8 flex flex-col justify-center items-center h-full">
                    <h2 className="text-5xl font-bold mb-4 transform transition-transform duration-700 ease-in-out group-hover:scale-110">
                        Découvrez Notre Fitness
                    </h2>
                    <p className="text-xl mt-4 opacity-90 transition-opacity duration-700 ease-in-out group-hover:opacity-100 max-w-2xl">
                        Plongez dans une expérience sportive unique, où chaque exercice est préparé avec passion et créativité par nos coachs sportifs.
                    </p>
                </div>
            </div>
            {/* Section 2 : Une ambiance exceptionnelle */}
            <div className="relative h-screen bg-cover bg-center mt-8 bg-[url('./f2.jpg')] transform transition-transform duration-700 ease-in-out hover:scale-105 overflow-hidden group">
                <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-700 ease-in-out group-hover:bg-opacity-20"></div>
                <div className="relative z-10 text-white text-center p-8 flex flex-col justify-center items-center h-full">
                    <h2 className="text-5xl font-bold mb-4 transform transition-transform duration-700 ease-in-out group-hover:scale-110">
                        Une Ambiance Exceptionnelle
                    </h2>
                    <p className="text-xl mt-4 opacity-90 transition-opacity duration-700 ease-in-out group-hover:opacity-100 max-w-2xl">
                        Dans un cadre élégant et raffiné, profitez d'une atmosphère chaleureuse et intimiste, parfaite pour des séances de sport en solo ou en groupe.
                    </p>
                </div>
            </div>
            {/* Section 3 : Nos spécialités sportives */}
            <div className="relative h-screen bg-cover bg-center mt-8 bg-[url('./f1.jpg')] transform transition-transform duration-700 ease-in-out hover:scale-105 overflow-hidden group">
                <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-700 ease-in-out group-hover:bg-opacity-20"></div>
                <div className="relative z-10 text-white text-center p-8 flex flex-col justify-center items-center h-full">
                    <h2 className="text-5xl font-bold mb-4 transform transition-transform duration-700 ease-in-out group-hover:scale-110">
                        Nos Spécialités Sportives
                    </h2>
                    <p className="text-xl mt-4 opacity-90 transition-opacity duration-700 ease-in-out group-hover:opacity-100 max-w-2xl">
                        Découvrez nos différentes spécialités sportives, adaptées à tous les niveaux et à toutes les envies.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Fitness;