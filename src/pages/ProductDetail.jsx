import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheck, FiChevronRight, FiMinus, FiPlus, FiStar, FiTruck, FiShield, FiSun } from 'react-icons/fi';
import { getProductBySlug, getAllProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import CartDrawer from '../components/CartDrawer';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addItem } = useCart();

  const [showCartDrawer, setShowCartDrawer] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [added, setAdded] = useState(false);

  // Scroll to top on slug change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  // Set default variant when product loads
  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0]);
      setActiveImageIndex(0);
      setQuantity(1);
      setAdded(false);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="bg-fasal-sand dark:bg-gray-900 min-h-screen flex items-center justify-center pt-20">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-fasal-darkgreen dark:text-[#FAF3D6] font-display">
            Product Not Found
          </h1>
          <p className="text-fasal-brown/70 dark:text-gray-400 font-sans">
            The product you are looking for does not exist.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-fasal-darkgreen text-fasal-sand px-6 py-3 rounded-2xl font-semibold hover:bg-fasal-darkgreen/90 transition-all duration-300"
          >
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedVariant) return;
    const cartItem = {
      productId: product.id,
      variantId: selectedVariant.id,
      productName: product.name,
      variantSize: selectedVariant.size,
      price: selectedVariant.price,
      quantity: quantity,
      image: product.image,
    };
    addItem(cartItem);
    setAdded(true);
    setShowCartDrawer(true);
    setTimeout(() => setAdded(false), 2000);
  };

  // Related products
  const allProducts = getAllProducts();
  const relatedProducts = allProducts
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  const getStartingPrice = (variants) => {
    if (!variants || variants.length === 0) return 'Rs. 0';
    const prices = variants.map((v) => v.price).sort((a, b) => a - b);
    return `Rs. ${prices[0].toLocaleString('en-PK')}`;
  };
  const productImageClass = product.imageFit === 'contain'
    ? 'object-contain p-3'
    : 'object-cover';

  // Product details grid items
  const detailItems = [
    { label: 'Season', value: product.season || 'Mid-May to Mid-June' },
    { label: 'Origin', value: product.origin || 'Rohillanwali, Muzaffargarh, Punjab' },
    { label: 'Flavor Profile', value: product.flavorProfile || 'Exceptionally sweet, rich, and aromatic' },
    { label: 'Texture', value: product.texture || 'Soft, fiberless, melting flesh' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="bg-fasal-sand dark:bg-gray-900 min-h-screen pt-20 pb-12 transition-colors duration-300"
    >
      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 mb-6">
        <nav className="flex items-center gap-2 text-sm font-sans">
          <Link to="/" className="text-fasal-brown/60 dark:text-gray-400 hover:text-fasal-brown transition-colors duration-300">
            Home
          </Link>
          <FiChevronRight className="w-3 h-3 text-fasal-brown/40 dark:text-gray-500" />
          <Link to="/shop" className="text-fasal-brown/60 dark:text-gray-400 hover:text-fasal-brown transition-colors duration-300">
            Shop
          </Link>
          <FiChevronRight className="w-3 h-3 text-fasal-brown/40 dark:text-gray-500" />
          <span className="text-fasal-terracotta font-semibold">{product.name}</span>
        </nav>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start">

          {/* Left Column: Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="space-y-3"
          >
            {/* Main Image */}
            <div className="relative aspect-square w-full rounded-3xl overflow-hidden bg-fasal-oat/40 border border-fasal-sage/10 group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImageIndex}
                  src={product.images[activeImageIndex]}
                  alt={`${product.name} — Premium Export Quality`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className={`w-full h-full ${productImageClass}`}
                />
              </AnimatePresence>

              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 bg-fasal-darkgreen/80 text-fasal-sand px-3 py-1 rounded-full text-xs font-bold">
                {activeImageIndex + 1} / {product.images.length}
              </div>
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto py-1">
                {product.images.map((imgUrl, idx) => {
                  const isActive = activeImageIndex === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative flex-shrink-0 w-20 h-20 rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
                        isActive
                          ? 'border-fasal-terracotta ring-2 ring-fasal-terracotta/20'
                          : 'border-fasal-sage/20 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={imgUrl} alt={`${product.name} thumbnail ${idx + 1}`} className={`w-full h-full ${productImageClass}`} />
                    </button>
                  );
                })}
              </div>
            )}
          </motion.div>

          {/* Right Column: Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="space-y-5"
          >
            {/* Badge + Name */}
            <div>
              {product.type === 'Premium' && (
                <span className="bg-fasal-terracotta/10 text-fasal-terracotta text-xs font-semibold px-3 py-1 rounded-full inline-block mb-3">
                  Premium
                </span>
              )}
              <h1 className="text-3xl md:text-4xl font-bold text-fasal-darkgreen dark:text-[#FAF3D6] tracking-tight leading-tight font-display">
                {product.name} Mango Box
              </h1>
            </div>

            {/* Stars */}
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <FiStar
                  key={i}
                  className="w-4 h-4 text-fasal-ochre fill-fasal-ochre"
                />
              ))}
              <span className="text-fasal-brown/60 text-xs font-medium ml-2 font-sans">5.0</span>
            </div>

            {/* Description */}
            <p className="text-fasal-brown/80 dark:text-gray-300 text-base leading-relaxed font-sans">
              {product.description}
            </p>

            {/* Variant Selection */}
            {selectedVariant && (
              <div>
                <h3 className="text-xs font-bold text-fasal-brown dark:text-gray-300 uppercase tracking-wider mb-3 font-sans">
                  Select Box Size
                </h3>
                <div className="grid grid-cols-3 gap-2 sm:flex sm:flex-wrap sm:gap-3">
                  {product.variants.map((v) => {
                    const isSelected = selectedVariant.id === v.id;
                    return (
                      <button
                        key={v.id}
                        onClick={() => setSelectedVariant(v)}
                        className={`px-3 sm:px-5 py-3 rounded-2xl font-semibold text-xs sm:text-sm transition-all duration-300 ${
                          isSelected
                            ? 'bg-fasal-darkgreen text-fasal-sand'
                            : 'bg-fasal-oat/60 text-fasal-brown border border-fasal-sage/20 hover:border-fasal-terracotta/30'
                        }`}
                      >
                        {v.size}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div>
              <h3 className="text-xs font-bold text-fasal-brown dark:text-gray-300 uppercase tracking-wider mb-3 font-sans">
                Quantity
              </h3>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  className="bg-fasal-sage/20 rounded-full w-10 h-10 flex items-center justify-center text-fasal-darkgreen hover:bg-fasal-sage/30 transition-colors duration-300"
                >
                  <FiMinus className="w-4 h-4" />
                </button>
                <span className="text-fasal-darkgreen dark:text-[#FAF3D6] font-bold text-lg min-w-[2.5rem] text-center font-sans">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="bg-fasal-sage/20 rounded-full w-10 h-10 flex items-center justify-center text-fasal-darkgreen hover:bg-fasal-sage/30 transition-colors duration-300"
                >
                  <FiPlus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Price */}
            {selectedVariant && (
              <p className="text-3xl font-bold text-fasal-darkgreen dark:text-[#FAF3D6] font-display">
                Rs. {(selectedVariant.price * quantity).toLocaleString('en-PK')}
              </p>
            )}

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                added
                  ? 'bg-fasal-darkgreen text-fasal-sand'
                  : 'bg-fasal-terracotta text-white hover:bg-fasal-terracotta/90 hover:shadow-lg'
              }`}
            >
              {added ? (
                <>
                  <FiCheck className="w-5 h-5" />
                  Added to Cart
                </>
              ) : (
                'Add to Cart'
              )}
            </button>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4">
              {[
                { icon: FiSun, label: 'Naturally Ripened' },
                { icon: FiTruck, label: 'Fast Delivery' },
                { icon: FiShield, label: 'Quality Guaranteed' },
              ].map((badge, i) => {
                const BadgeIcon = badge.icon;
                return (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-2 text-center"
                  >
                    <div className="w-10 h-10 rounded-2xl bg-fasal-terracotta/10 flex items-center justify-center">
                      <BadgeIcon className="w-5 h-5 text-fasal-terracotta" />
                    </div>
                    <span className="text-[11px] sm:text-xs font-medium text-fasal-brown/70 dark:text-gray-400 font-sans leading-snug">
                      {badge.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-fasal-sage/10 dark:bg-gray-800 my-12" />

        {/* Product Details Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold text-fasal-darkgreen dark:text-[#FAF3D6] font-display">
            Product Details
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {detailItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-fasal-oat/40 p-5 rounded-2xl border border-fasal-sage/10 dark:bg-gray-800"
              >
                <div className="flex items-center gap-2 mb-2">
                  <FiCheck className="w-4 h-4 text-fasal-terracotta flex-shrink-0" />
                  <span className="text-xs font-bold text-fasal-brown/60 dark:text-gray-400 uppercase tracking-wider font-sans">
                    {item.label}
                  </span>
                </div>
                <p className="text-sm font-medium text-fasal-brown dark:text-gray-300 font-sans">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          {/* Delivery & Storage Info */}
          {(product.deliveryInfo || product.storageInstructions) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.deliveryInfo && (
                <div className="bg-fasal-oat/40 p-5 rounded-2xl border border-fasal-sage/10 dark:bg-gray-800">
                  <div className="flex items-center gap-2 mb-2">
                    <FiTruck className="w-4 h-4 text-fasal-terracotta flex-shrink-0" />
                    <span className="text-xs font-bold text-fasal-brown/60 dark:text-gray-400 uppercase tracking-wider font-sans">Delivery</span>
                  </div>
                  <p className="text-sm font-medium text-fasal-brown dark:text-gray-300 font-sans">{product.deliveryInfo}</p>
                </div>
              )}
              {product.storageInstructions && (
                <div className="bg-fasal-oat/40 p-5 rounded-2xl border border-fasal-sage/10 dark:bg-gray-800">
                  <div className="flex items-center gap-2 mb-2">
                    <FiShield className="w-4 h-4 text-fasal-terracotta flex-shrink-0" />
                    <span className="text-xs font-bold text-fasal-brown/60 dark:text-gray-400 uppercase tracking-wider font-sans">Storage</span>
                  </div>
                  <p className="text-sm font-medium text-fasal-brown dark:text-gray-300 font-sans">{product.storageInstructions}</p>
                </div>
              )}
            </div>
          )}
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-fasal-sage/10 dark:bg-gray-800 my-12" />

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-fasal-darkgreen dark:text-[#FAF3D6] font-display">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedProducts.map((rp) => {
                const relatedImageClass = rp.imageFit === 'contain'
                  ? 'object-contain p-2 group-hover:scale-[1.02]'
                  : 'object-cover group-hover:scale-105';
                return (
                  <Link
                    key={rp.id}
                    to={`/shop/${rp.slug}`}
                    className="group block"
                  >
                    <div className="bg-fasal-oat/40 dark:bg-gray-800 rounded-3xl overflow-hidden border border-fasal-sage/10 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                      <div className="relative w-full aspect-square overflow-hidden">
                        <img
                          src={rp.image}
                          alt={rp.name}
                          className={`w-full h-full ${relatedImageClass} transition-transform duration-500`}
                        />
                      {rp.type === 'Premium' && (
                        <div className="absolute top-3 left-3 bg-gradient-to-r from-fasal-terracotta to-fasal-ochre text-white px-3 py-1 rounded-full text-[10px] font-bold">
                          Premium
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-fasal-darkgreen dark:text-[#FAF3D6] group-hover:text-fasal-terracotta transition-colors duration-300 font-display mb-1">
                        {rp.name}
                      </h3>
                      <p className="text-sm font-semibold text-fasal-terracotta font-sans">
                        {getStartingPrice(rp.variants)}
                      </p>
                    </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </div>

      {/* Cart Drawer */}
      <CartDrawer isOpen={showCartDrawer} onClose={() => setShowCartDrawer(false)} />
    </motion.div>
  );
}
