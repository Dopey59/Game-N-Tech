import React from 'react';
import { useEffect } from 'react';

export default function Navbar(){
  // JavaScript for toggling mobile menu
  useEffect(() => {
    // Sélection des éléments du DOM après le rendu
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    // Vérifiez que les éléments existent avant d'attacher des écouteurs
    if (menuToggle && mobileMenu) {
      const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden');
      };

      menuToggle.addEventListener('click', toggleMenu);

      // Nettoyage lors du démontage du composant
      return () => {
        menuToggle.removeEventListener('click', toggleMenu);
      };
    }
  }, []); // Dépendance vide pour exécuter le code uniquement au montage du composant

  return(
      <>
      <nav className=" navbar">
        <div className="container mx-auto ">
          <div className="flex justify-between items-center py-4">
            {/* <!-- Nom du site --> */}
            <div className="text-2xl font-bold text-gray-800">
            <a href="/" className="">Accueil</a>
              
            </div>

            {/* <!-- Menu complet (PC et tablette) --> */}
            <div className="hidden md:flex space-x-6 items-center">
              <a href="formulaire_de_contact" className="text-[#ff847c] font-bold">Contact</a>
              {/* <!-- Dropdown Catégories --> */}
              <div className="relative group">
                <button className="hover:text-gray-900 focus:outline-none">
                  Catégories
                </button>
                <div className="absolute hidden group-hover:block w-48 bg-white border rounded shadow-lg">
                  <a href="#cat1" className="block px-4 py-2 duration transition hover:bg-[#ff847c] hover:text-white hover:duration-500">Team Sucré</a>
                  <a href="#cat2" className="block px-4 py-2 duration transition hover:bg-[#ff847c] hover:text-white hover:duration-500">Team Salé</a>
                  <a href="#cat3" className="block px-4 py-2 duration transition hover:bg-[#ff847c] hover:text-white hover:duration-500">Catégorie 3</a>
                </div>
              </div>
              <a href="tous_nos_produits" className=" hover:text-gray-900">Tous nos produits</a>

              <a href="#" className=" hover:text-gray-200 bg-[#ff847c] rounded p-2 text-white">Se connecter</a>
            </div>

            {/* <!-- Menu mobile --> */}
            <div className="md:hidden flex items-center">
              <button id="menu-toggle" className=" focus:outline-none">
                {/* <!-- Hamburger Icon --> */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* <!-- Menu mobile --> */}
          <div id="mobile-menu" className="hidden md:hidden">
              <a href="#" className=" block py-2 px-4 font-bold w-fit text-[#ff847c] rounded ">Se connecter</a>
            <a href="formulaire_de_contact" className="block py-2 px-4  hover:bg-gray-100">Contact</a>
            {/* <!-- Dropdown Catégories --> */}
            <div>
              <button className="w-full text-left py-2 px-4  hover:bg-gray-100 focus:outline-none">
                Catégories
              </button>


              <div className="pl-4">
                <a href="#cat1" className="block py-2 px-4 duration transition hover:bg-[#ff847c] hover:text-white hover:duration-500">Catégorie 1</a>
                <a href="#cat2" className="block py-2 px-4 duration transition hover:bg-[#ff847c] hover:text-white hover:duration-500">Catégorie 2</a>
                <a href="#cat3" className="block py-2 px-4 duration transition hover:bg-[#ff847c] hover:text-white hover:duration-500">Catégorie 3</a>
              </div>
            </div>
              <a href="#panier" className="block py-2 px-4 duration transition hover:bg-[#ff847c] hover:text-white hover:duration-500">Panier</a>
              <a href="tous_nos_produits" className=" py-2 px-4 hover:text-gray-900">Tous nos produits</a>
          </div>
        </div>
      </nav>
      </>
  )
}