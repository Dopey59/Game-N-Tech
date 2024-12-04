import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductDetails, createCheckoutSession } from '../services/api';

const ProductDetails = () => {
  const { id } = useParams(); // Récupère l'ID du produit depuis l'URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');

  const handlePayment = async () => {
    try {
      if (!selectedSize) {
        alert('Veuillez sélectionner une taille avant de continuer.');
        return;
      }

      const session = await createCheckoutSession({
        name: product.sync_product?.name,
        description: product.sync_product?.description || 'No description available',
        image: product.sync_product?.thumbnail_url,
        price: product.sync_variants.find((variant) => variant.size === selectedSize)?.retail_price,
        size: selectedSize,
      });

      window.location.href = session.url;
    } catch (error) {
      console.error('Erreur lors de la création de la session de paiement Stripe', error);
    }
  };

  useEffect(() => {
    const loadProductDetails = async () => {
      try {
        const productData = await fetchProductDetails(id);
        console.log('Product data:', productData); // Log pour vérifier les données
        setProduct(productData);
      } catch (err) {
        setError('Failed to load product details.');
      } finally {
        setLoading(false);
      }
    };
    loadProductDetails();
  }, [id]);

  if (loading) return <p>Chargement des détails du produit...</p>;
  if (error) return <p>{error}</p>;
  if (!product || !product.sync_product) return <p>Détails du produit introuvables.</p>;

  return (
    <div className="product-details flex justify-evenly items-center h-screen">
      <div className="flex flex-col items-center">
        <h1>{product.sync_product?.name || 'Nom indisponible'}</h1>
        <img
          className="w-96 h-auto"
          src={product.sync_product?.thumbnail_url}
          alt={product.sync_product?.name || 'Image indisponible'}
        />
        {product.sync_variants && product.sync_variants[0]?.retail_price ? (
          <p>Prix : {product.sync_variants[0].retail_price} €</p>
        ) : (
          <p>Les informations sur le prix ne sont pas disponibles.</p>
        )}
      </div>

      <div className="flex flex-col">
        <h1>Description</h1>
        <select
          name="size"
          id="size"
          value={selectedSize}
          onChange={(e) => setSelectedSize(e.target.value)}
        >
          {Array.isArray(product.sync_variants) &&
            product.sync_variants.map((variant, index) => (
              <option key={index} value={variant.size}>
                Taille : {variant.size}
              </option>
            ))}
        </select>
        <p>Taille choisie : {selectedSize || 'Aucune sélectionnée'}</p>
      </div>

      <div>
        <button onClick={handlePayment}>Acheter maintenant</button>
      </div>
    </div>
  );
};

export default ProductDetails;
