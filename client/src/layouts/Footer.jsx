import React from 'react';

export default function Footer(){

  return(
      <>
      <footer id="pin-windmill-wrap" className="relative bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          {/* <!-- Grid container --> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* <!-- Description --> */}
            <div>
              <h2 className="text-lg font-semibold mb-4">À propos de nous</h2>
              <p className="text-sm text-gray-400">
                Notre entreprise s'engage à offrir des produits de qualité et des services d'exception. Nous croyons en l'innovation et en la satisfaction de nos clients.
              </p>
            </div>

            {/* <!-- Informations --> */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Informations</h2>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">À propos</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Nos services</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Carrières</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              </ul>
            </div>

            {/* <!-- Aide --> */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Aide</h2>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Support</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Retour & Remboursement</a></li>
              </ul>
            </div>

            {/* <!-- Ressources --> */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Ressources</h2>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Politique de confidentialité</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Conditions d'utilisation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Cookies</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Guides</a></li>
              </ul>
            </div>
          </div>

          {/* <!-- Footer bottom --> */}
          <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
            &copy; 2024 Coverlly. Tous droits réservés. Créé et développé par William.P.
          </div>
        </div>
      </footer>
    </>
  )
}