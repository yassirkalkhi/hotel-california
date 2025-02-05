import React, { useRef } from "react";
import Header from "../components/Header";
import { Check } from "lucide-react";

const Restaurant = () => {
  const bgRef = useRef(null);

  return (
    <div className="w-full overflow-hidden">
      {/* Arrière-plan fixe avec effet de dégradé */}
     <div 
        ref={bgRef}
        className="w-full h-[100vh] bg-[url('./bg.jpg')] bg-cover bg-center bg-no-repeat fixed top-0 left-0 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-black/50 before:to-black/70 z-0"
      ></div>
 
      <Header />

      

      {/* Section 1 : Découvrez notre restaurant */}
      <div className="relative  bg-cover bg-center bg-[url('./res1.jpg')] mt-8 transform transition-transform duration-700 ease-in-out hover:scale overflow-hidden group">
        <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-700 ease-in-out group-hover:bg-opacity-20"></div>
        <div className="relative z-10 text-white text-center p-8 flex flex-col justify-center items-center h-full">
           <div className="rounded-full  border-[4px] border-green-500 bg-gre p-8 mb-10" ><Check size={48} className="text-green-500" /></div> 
          <h2 className="text-5xl font-bold mb-4 transform transition-transform duration-700 ease-in-out group-hover:scale-110">
           Payment Successful

          </h2>
    
        </div>
      </div>

     
    </div>
  );
};

export default Restaurant;
