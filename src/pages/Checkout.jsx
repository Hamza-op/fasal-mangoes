import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FiCheck, FiChevronLeft, FiAward, FiCreditCard, FiTruck, FiMessageSquare } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export default function Checkout() {
  const navigate = useNavigate();
  const { cart, totalPrice, clearCart } = useCart();

  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    city: '',
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [generatedWhatsappUrl, setGeneratedWhatsappUrl] = useState('');

  const DELIVERY_FEE = 0;
  const subtotal = totalPrice;
  const advancePayment = Math.ceil(subtotal * 0.30);
  const remainingPayment = subtotal - advancePayment;
  const total = subtotal + DELIVERY_FEE;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { fullName, address, city } = formData;
    if (!fullName || !address || !city) {
      alert('Please fill in all required fields');
      return false;
    }
    if (cart.length === 0) {
      alert('Your cart is empty');
      return false;
    }
    return true;
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsProcessing(true);

    try {
      // Build order items text
      const itemsText = cart
        .map(
          (item) =>
            `• *${item.productName}* (${item.variantSize}) x${item.quantity} - Rs. ${(
              item.price * item.quantity
            ).toLocaleString('en-PK')}`
        )
        .join('\n');

      // Construct WhatsApp message
      const addressParts = [];
      if (formData.address) addressParts.push(formData.address);
      addressParts.push(formData.city);
      addressParts.push('Pakistan');
      const addressDetails = addressParts.join(', ');

      const whatsappMessage =
        `Assalam-o-Alaikum Fasal Mangoes! I'd like to place an order:\n\n` +
        `📋 *CUSTOMER DETAILS*\n` +
        `• *Name:* ${formData.fullName}\n` +
        `• *Address:* ${addressDetails}\n\n` +
        `🥭 *ORDER SUMMARY*\n` +
        `${itemsText}\n\n` +
        `💳 *COST BREAKDOWN*\n` +
        `• *Subtotal:* Rs. ${subtotal.toLocaleString('en-PK')}\n` +
        `• *Delivery:* FREE\n` +
        `• *Total Cost:* Rs. ${total.toLocaleString('en-PK')}\n\n` +
        `📍 *ADVANCE PAYMENT DUE:* Rs. ${advancePayment.toLocaleString('en-PK')}\n` +
        `*(Remaining 70% Rs. ${remainingPayment.toLocaleString('en-PK')} is paid Cash on Delivery)*\n\n` +
        `Please share the payment details for the 30% advance so I can confirm the booking.\n\n` +
        `✍️ *AGREEMENT*\n` +
        `"I understand that my order is confirmed after the 30% advance is received."`;

      // Encode URL
      const whatsappUrl = `https://wa.me/923096436565?text=${encodeURIComponent(whatsappMessage)}`;
      setGeneratedWhatsappUrl(whatsappUrl);

      // Trigger redirection
      window.open(whatsappUrl, '_blank');

      setOrderPlaced(true);
      setIsProcessing(false);
    } catch (error) {
      setIsProcessing(false);
      console.error('Error constructing WhatsApp redirect:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  const handleReturnHome = () => {
    clearCart();
    navigate('/');
  };

  const inputClasses =
    'w-full bg-fasal-sand/80 dark:bg-gray-700 border border-fasal-sage/20 dark:border-gray-600 rounded-2xl px-4 py-3 text-sm text-fasal-brown dark:text-gray-200 placeholder-fasal-brown/40 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-fasal-sage/30 transition-all duration-300 font-sans';

  // Order placed state
  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-fasal-sand dark:bg-gray-900 flex items-center justify-center pt-24 pb-12 px-6">
        <div className="max-w-md bg-fasal-oat/40 dark:bg-gray-800 rounded-3xl p-6 text-center border border-fasal-sage/10">
          <div className="w-20 h-20 bg-fasal-moss/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <FiCheck className="w-10 h-10 text-fasal-moss" />
          </div>
          <h2 className="text-3xl font-bold text-fasal-darkgreen dark:text-[#FAF3D6] mb-3 font-display">
            Order Request Sent!
          </h2>
          <p className="text-fasal-brown dark:text-gray-300 mb-6 text-sm leading-relaxed font-sans">
            Thank you, <span className="font-semibold text-fasal-darkgreen dark:text-[#FAF3D6]">{formData.fullName}</span>! Your order template is ready in WhatsApp. Send it there to receive payment details and confirm the 30% advance.
          </p>
          <div className="space-y-3">
            <a
              href={generatedWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold rounded-2xl shadow-lg transition-all duration-300 flex items-center justify-center gap-2 font-sans"
            >
              <FaWhatsapp className="w-5 h-5" />
              Open WhatsApp Chat
            </a>
            <button
              onClick={handleReturnHome}
              className="w-full py-3.5 bg-fasal-darkgreen text-fasal-sand font-semibold rounded-2xl hover:bg-fasal-darkgreen/90 transition-all duration-300 font-sans"
            >
              Return to Homepage
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Empty cart state
  if (cart.length === 0 && !orderPlaced) {
    return (
      <div className="min-h-screen bg-fasal-sand dark:bg-gray-900 flex items-center justify-center pt-24 pb-12 px-6">
        <div className="max-w-md bg-fasal-oat/40 dark:bg-gray-800 rounded-3xl p-6 text-center border border-fasal-sage/10">
          <h2 className="text-3xl font-bold text-fasal-darkgreen dark:text-[#FAF3D6] mb-4 font-display">
            Your Cart is Empty
          </h2>
          <p className="text-fasal-brown dark:text-gray-300 mb-6 leading-relaxed font-sans text-sm">
            Add some farm-fresh mangoes to your cart before checking out.
          </p>
          <Link
            to="/shop"
            className="block w-full bg-fasal-darkgreen text-fasal-sand py-4 rounded-2xl font-semibold hover:bg-fasal-darkgreen/90 transition-all duration-300 font-sans"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-fasal-sand dark:bg-gray-900 min-h-screen pt-24 pb-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        {/* Back Link */}
        <Link
          to="/shop"
          className="inline-flex items-center gap-1 text-sm font-semibold text-fasal-brown dark:text-gray-300 hover:text-fasal-terracotta transition-colors duration-300 mb-6 font-sans"
        >
          <FiChevronLeft className="w-4 h-4" />
          Back to Shop
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold text-fasal-darkgreen dark:text-[#FAF3D6] font-display mb-10">
          Checkout
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Form Columns (2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            <form onSubmit={handlePlaceOrder} className="space-y-6">
              {/* Delivery Details Card */}
              <div className="bg-fasal-oat/40 dark:bg-gray-800 rounded-3xl p-5 sm:p-6 border border-fasal-sage/10">
                <h2 className="text-xl font-bold text-fasal-darkgreen dark:text-[#FAF3D6] font-display mb-4 pb-3 border-b border-fasal-sage/10">
                  Delivery Details
                </h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-fasal-brown dark:text-gray-300 mb-2 font-sans">
                        Full Name <span className="text-fasal-terracotta">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        placeholder="Your full name"
                        className={inputClasses}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-fasal-brown dark:text-gray-300 mb-2 font-sans">
                        City <span className="text-fasal-terracotta">*</span>
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g. Lahore, Karachi"
                        className={inputClasses}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-fasal-brown dark:text-gray-300 mb-2 font-sans">
                      Delivery Address <span className="text-fasal-terracotta">*</span>
                    </label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      rows="2"
                      required
                      placeholder="House No, Street, Sector/Area, Landmark"
                      className={inputClasses + ' resize-none'}
                    />
                  </div>
                </div>
              </div>

              {/* Payment Flow Information */}
              <div className="bg-fasal-oat/20 dark:bg-gray-800 rounded-3xl p-5 sm:p-6 border border-fasal-sage/10 space-y-5 shadow-sm">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between mb-4">
                <h3 className="text-lg font-bold text-fasal-darkgreen dark:text-[#FAF3D6] font-display">
                  Simple Payment Process
                </h3>
                <div className="inline-flex items-center gap-2 self-start sm:self-auto text-[11px] font-semibold text-fasal-darkgreen dark:text-[#FAF3D6] bg-fasal-sand/70 dark:bg-gray-700 px-3 py-1.5 rounded-full border border-fasal-sage/10">
                  <FiMessageSquare className="w-3.5 h-3.5 text-fasal-terracotta" />
                  30% advance, 70% on delivery
                </div>
              </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  <div className="bg-fasal-sand/40 dark:bg-gray-700/40 p-5 rounded-2xl border border-fasal-sage/5 space-y-2 h-full">
                    <FiAward className="w-5 h-5 text-fasal-terracotta" />
                    <h4 className="font-bold text-fasal-darkgreen dark:text-[#FAF3D6] font-sans">1. Place Your Order</h4>
                    <p className="text-fasal-brown/80 dark:text-gray-300 font-sans leading-relaxed">
                      Add your delivery details and send the order through WhatsApp.
                    </p>
                  </div>
                  <div className="bg-fasal-sand/40 dark:bg-gray-700/40 p-5 rounded-2xl border border-fasal-sage/5 space-y-2 h-full">
                    <FiCreditCard className="w-5 h-5 text-fasal-terracotta" />
                    <h4 className="font-bold text-fasal-darkgreen dark:text-[#FAF3D6] font-sans">2. Pay 30% Advance</h4>
                    <p className="text-fasal-brown/80 dark:text-gray-300 font-sans leading-relaxed">
                      We share the payment details on WhatsApp and reserve your harvest slot.
                    </p>
                  </div>
                  <div className="bg-fasal-sand/40 dark:bg-gray-700/40 p-5 rounded-2xl border border-fasal-sage/5 space-y-2 h-full">
                    <FiTruck className="w-5 h-5 text-fasal-terracotta" />
                    <h4 className="font-bold text-fasal-darkgreen dark:text-[#FAF3D6] font-sans">3. Receive & Pay Balance</h4>
                    <p className="text-fasal-brown/80 dark:text-gray-300 font-sans leading-relaxed">
                      We harvest fresh, dispatch fast, and you pay the remaining 70% on delivery.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-fasal-sand/80 dark:bg-gray-700 rounded-2xl p-5 border border-fasal-sage/10 space-y-3 font-sans">
                    <div className="flex items-center justify-between gap-3 text-xs font-semibold text-fasal-brown/80 dark:text-gray-300">
                      <span>Order Subtotal:</span>
                      <span>Rs. {subtotal.toLocaleString('en-PK')}</span>
                    </div>
                    <div className="flex items-center justify-between gap-3 text-xs font-semibold text-fasal-moss">
                      <span>Nationwide Delivery:</span>
                      <span className="uppercase font-bold">FREE</span>
                    </div>
                    <div className="flex flex-col items-start gap-1 bg-fasal-terracotta/5 dark:bg-fasal-terracotta/10 px-4 py-3 rounded-xl border border-fasal-terracotta/20 min-[430px]:flex-row min-[430px]:items-center min-[430px]:justify-between">
                      <span className="font-bold text-fasal-terracotta text-sm">Advance Due Now:</span>
                      <span className="text-lg font-bold text-fasal-terracotta font-display leading-none">
                        Rs. {advancePayment.toLocaleString('en-PK')}
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-3 text-xs font-semibold text-fasal-brown/65 dark:text-gray-400">
                      <span>Cash on Delivery:</span>
                      <span>Rs. {remainingPayment.toLocaleString('en-PK')}</span>
                    </div>
                  </div>

                  <div className="bg-fasal-oat/30 dark:bg-gray-900/10 rounded-2xl p-5 border border-fasal-sage/5 font-sans space-y-3">
                    <p className="text-sm font-semibold text-fasal-darkgreen dark:text-[#FAF3D6]">
                      Why we use an advance
                    </p>
                    <p className="text-xs text-fasal-brown/80 dark:text-gray-300 leading-relaxed">
                      It reserves your harvest slot, covers fresh packing, and keeps the fruit moving from orchard to door without delay.
                    </p>
                    <p className="text-xs text-fasal-brown/80 dark:text-gray-300 leading-relaxed">
                      After you click <strong>Place Order via WhatsApp</strong>, we reply with the payment details and confirm your booking there.
                    </p>
                  </div>
                </div>
              </div>

              {/* Submit Button (visible on mobile) */}
              <button
                type="submit"
                disabled={isProcessing}
                className="bg-fasal-terracotta text-white py-4 rounded-2xl font-semibold w-full hover:bg-fasal-terracotta/90 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 font-sans lg:hidden disabled:opacity-50"
              >
                {isProcessing ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                    Redirecting...
                  </>
                ) : (
                  <>
                    <FaWhatsapp className="w-5 h-5" />
                    Place Order via WhatsApp
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Order Summary (Right Column) */}
          <div className="lg:col-span-1">
            <div className="bg-fasal-oat/40 dark:bg-gray-800 rounded-3xl p-5 sm:p-6 border border-fasal-sage/10 sticky top-24">
              <h2 className="text-xl font-bold text-fasal-darkgreen dark:text-[#FAF3D6] font-display mb-4 pb-3 border-b border-fasal-sage/10">
                Order Summary
              </h2>

              {/* Items List */}
              <div className="space-y-3 mb-5 max-h-72 overflow-y-auto pr-1">
                {cart.map((item) => (
                  <div
                    key={`${item.productId}-${item.variantId}`}
                    className="flex items-start gap-3 pb-4 border-b border-fasal-sage/10 last:border-0"
                  >
                    <img
                      src={item.image}
                      alt={item.productName}
                      className="w-14 h-14 rounded-xl object-cover border border-fasal-sage/10 flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-fasal-darkgreen dark:text-[#FAF3D6] text-sm truncate font-display">
                        {item.productName}
                      </p>
                      <p className="text-xs text-fasal-brown/60 dark:text-gray-400 font-sans">
                        {item.variantSize} &middot; Qty: {item.quantity}
                      </p>
                      <p className="text-sm font-bold text-fasal-terracotta mt-0.5">
                        Rs. {(item.price * item.quantity).toLocaleString('en-PK')}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Subtotal */}
              <div className="space-y-2 mb-4 text-sm font-sans">
                <div className="flex justify-between text-fasal-brown dark:text-gray-300">
                  <span>Subtotal</span>
                  <span className="font-semibold">Rs. {subtotal.toLocaleString('en-PK')}</span>
                </div>
                <div className="flex justify-between text-fasal-moss">
                  <span>Delivery</span>
                  <span className="font-semibold">FREE</span>
                </div>
              </div>

              {/* Total */}
              <div className="bg-fasal-sand/60 dark:bg-gray-700/50 rounded-2xl p-4 mb-5 flex flex-col items-start gap-1 border border-fasal-sage/10 min-[430px]:flex-row min-[430px]:items-center min-[430px]:justify-between">
                <span className="text-sm font-semibold text-fasal-brown dark:text-gray-300 font-sans">Total</span>
                <span className="text-2xl font-bold text-fasal-darkgreen dark:text-[#FAF3D6] font-display leading-none">
                  Rs. {total.toLocaleString('en-PK')}
                </span>
              </div>

              {/* Desktop Order Button */}
              <button
                onClick={handlePlaceOrder}
                disabled={isProcessing}
                className="hidden lg:flex bg-fasal-terracotta text-white py-4 rounded-2xl font-semibold w-full hover:bg-fasal-terracotta/90 hover:shadow-lg transition-all duration-300 items-center justify-center gap-2 font-sans disabled:opacity-50"
              >
                {isProcessing ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                    Redirecting...
                  </>
                ) : (
                  <>
                    <FaWhatsapp className="w-5 h-5" />
                    Place Order via WhatsApp
                  </>
                )}
              </button>

              <p className="text-xs text-fasal-brown/50 dark:text-gray-500 text-center mt-3 font-sans">
                This will open WhatsApp with your order details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
