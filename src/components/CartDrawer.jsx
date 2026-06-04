import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiX, FiMinus, FiPlus, FiTrash2 } from 'react-icons/fi';
import { useCart } from '../context/CartContext';

export default function CartDrawer({ isOpen, onClose }) {
  const { cart, totalPrice, removeItem, updateQuantity } = useCart();

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const previousOverscroll = document.body.style.overscrollBehavior;
    document.body.style.overflow = 'hidden';
    document.body.style.overscrollBehavior = 'contain';

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.overscrollBehavior = previousOverscroll;
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 h-[100dvh] w-full md:w-96 bg-fasal-sand dark:bg-fasal-ink shadow-2xl z-50 transform transition-transform duration-300 ease-out flex flex-col will-change-transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role={isOpen ? 'dialog' : undefined}
        aria-modal={isOpen ? 'true' : undefined}
        aria-hidden={!isOpen}
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="bg-fasal-darkgreen text-fasal-sand px-5 sm:px-6 py-4 flex items-center justify-between z-10 shrink-0">
          <h2 className="font-display text-2xl font-bold">Your Cart</h2>
          <button
            onClick={onClose}
            className="h-11 w-11 hover:bg-fasal-sand/10 rounded-2xl transition-colors duration-300 flex items-center justify-center"
            aria-label="Close cart"
          >
            <FiX size={24} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto overscroll-contain px-5 sm:px-6 py-5 sm:py-6">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12">
              <p className="font-sans text-fasal-brown dark:text-gray-300 text-center mb-4">Your cart is empty</p>
              <button
                onClick={onClose}
                className="bg-fasal-darkgreen text-fasal-sand px-5 py-3 rounded-2xl font-sans font-semibold hover:bg-fasal-moss transition-colors duration-300"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={`${item.productId}-${item.variantId}`}
                  className="bg-fasal-oat/60 dark:bg-gray-700/60 rounded-2xl p-4 transition-all duration-300 hover:shadow-md"
                >
                  {/* Product Image & Info */}
                  <div className="flex gap-4 mb-3">
                    <div className="w-16 h-16 bg-fasal-sand dark:bg-gray-600 rounded-2xl overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.productName}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-display font-bold text-fasal-darkgreen dark:text-[#FAF3D6]">{item.productName}</h3>
                      <p className="font-sans text-sm text-fasal-brown/70 dark:text-gray-300">{item.variantSize}</p>
                      <p className="font-sans font-bold text-fasal-terracotta">
                        Rs. {item.price.toLocaleString('en-PK')}
                      </p>
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 bg-fasal-sage/20 dark:bg-gray-600 rounded-full p-1">
                      <button
                        onClick={() =>
                          updateQuantity(item.productId, item.variantId, item.quantity - 1)
                        }
                        className="h-10 w-10 hover:bg-fasal-sand dark:hover:bg-gray-500 rounded-full transition-colors duration-300 flex items-center justify-center"
                        aria-label={`Decrease ${item.productName} quantity`}
                      >
                        <FiMinus size={16} className="text-fasal-darkgreen dark:text-gray-200" />
                      </button>
                      <span className="font-sans font-bold text-fasal-darkgreen dark:text-[#FAF3D6] min-w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.productId, item.variantId, item.quantity + 1)
                        }
                        className="h-10 w-10 hover:bg-fasal-sand dark:hover:bg-gray-500 rounded-full transition-colors duration-300 flex items-center justify-center"
                        aria-label={`Increase ${item.productName} quantity`}
                      >
                        <FiPlus size={16} className="text-fasal-darkgreen dark:text-gray-200" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.productId, item.variantId)}
                      className="h-11 w-11 text-fasal-terracotta hover:bg-fasal-terracotta/10 rounded-2xl transition-colors duration-300 flex items-center justify-center"
                      aria-label={`Remove ${item.productName} from cart`}
                    >
                      <FiTrash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="bg-fasal-sand dark:bg-fasal-ink border-t border-fasal-sage/20 dark:border-gray-700 px-5 sm:px-6 pt-4 pb-[max(1rem,env(safe-area-inset-bottom))] space-y-3 shrink-0 shadow-[0_-12px_28px_rgba(18,22,10,0.08)]">
            {/* Total */}
            <div className="flex justify-between items-center mb-4 pb-4 border-b border-fasal-sage/20 dark:border-gray-700">
              <span className="font-sans text-lg font-bold text-fasal-darkgreen dark:text-[#FAF3D6]">Total:</span>
              <span className="font-display text-2xl font-bold text-fasal-terracotta">
                Rs. {totalPrice.toLocaleString('en-PK')}
              </span>
            </div>

            {/* Action Buttons */}
            <Link
              to="/checkout"
              className="block w-full bg-fasal-terracotta text-white py-4 px-4 rounded-2xl font-sans font-bold hover:bg-fasal-terracotta/90 transition-colors duration-300 text-center"
              onClick={onClose}
            >
              Proceed to Checkout
            </Link>
            <button
              onClick={onClose}
              className="w-full bg-fasal-oat dark:bg-gray-600 text-fasal-darkgreen dark:text-[#FAF3D6] py-3.5 px-4 rounded-2xl font-sans font-bold hover:bg-fasal-oat/80 dark:hover:bg-gray-500 transition-colors duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
