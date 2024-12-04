import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../services/api';
import { Link } from 'react-router-dom';
import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'


const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();

        // Vérifiez si la structure est correcte (par exemple, data.result)
        if (Array.isArray(data)) {
          setProducts(data);
        } else if (Array.isArray(data.result)) {
          setProducts(data.result); // Utilisez "result" si les produits sont encapsulés
        } else {
          throw new Error('Données non valides');
        }
      } catch (err) {
        console.error(err);
        setError('Erreur lors du chargement des produits !');
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <div className='bg-gray-100'>
        <Navbar/>
      </div>
      <div className="product-list grid sm:grid-cols-4 grid-cols-2 md:gap-10 md:p-10 bg-white p-2">
        {products.length === 0 ? (
          <p>Aucun produit disponible.</p>
        ) : (
          products.map((product) => (
            <div key={product.id} className="product-card flex flex-col items-center gap-3">
              <img src={product.thumbnail_url} alt={product.name} />
              <h3 className=' font-bold uppercase'>{product.name}</h3>
              <Link to={`/product/${product.id}`}>Voir les détails</Link>
            </div>
          ))
        )}
      </div>
      <Footer/>
    </>
    );
  };

export default ProductList;
