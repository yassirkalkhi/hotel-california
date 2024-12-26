import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className=' w-[100vw] h-[7vh] text-white text-xl z-50 flex justify-between items-center px-20 bg-gradient-to-b from-black/50 to-transparent backdrop-blur-sm  z-50'>
            <a href="./"   className='font-StyleScript text-4xl font-bold '>California</a>
            <div className="links flex gap-10 items-center  text-white text-xl ">
                <a  className="relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100">Accueil</a>
                <a  href="#footer" className="relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100">Contact</a>
                <Link to="/reserver" className='border px-5 py-2 hover:bg-white/10 transition-colors duration-300'>Reserver</Link>
            </div>


    </div>
  )
}

export default Header