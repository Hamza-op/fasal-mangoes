import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { FiMessageSquare, FiX, FiSend } from 'react-icons/fi';
import logo from '../assets/logo.webp';
import { getAllProducts } from '../data/products';

export default function Chatbot({ compact = false }) {
  const products = getAllProducts();
  const shouldReduceMotion = useReducedMotion();
  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "Assalam-o-Alaikum! Welcome to Fasal Mangoes. I am your virtual orchard assistant. How can I help you today?",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Suggested Quick Tags
  const quickTags = [
    { label: 'Prices', keyword: 'prices' },
    { label: 'How to Order?', keyword: 'order' },
    { label: 'Best Mango?', keyword: 'recommend' },
    { label: 'Delivery Time', keyword: 'delivery time' },
    { label: '30% Advance', keyword: 'advance' },
    { label: 'Ripening Tips', keyword: 'ripening' },
    { label: 'Gift Orders', keyword: 'gift' },
  ];

  // Auto-show notification bubble 1 second after website loads and automatically hide it at 6 seconds (5 seconds visibility)
  useEffect(() => {
    const showTimer = setTimeout(() => {
      if (!isOpen) {
        setShowNotification(true);
      }
    }, 1000);

    const hideTimer = setTimeout(() => {
      setShowNotification(false);
    }, 6000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [isOpen]);

  // Scroll messages to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: shouldReduceMotion ? 'auto' : 'smooth',
      block: 'end',
    });
  }, [messages, isTyping, shouldReduceMotion]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setShowNotification(false);
  };

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

  const handleSend = (text) => {
    if (!text.trim()) return;

    const userMessage = {
      id: Date.now(),
      sender: 'user',
      text: text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    setTimeout(() => {
      const responseText = getBotResponse(text);
      const botMessage = {
        id: Date.now() + 1,
        sender: 'bot',
        text: responseText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 800);
  };

  // Chatbot Natural Language Processor (NLP) & Knowledge Matching
  const getBotResponse = (userText) => {
    const text = userText.toLowerCase().trim();
    const priceList = products
      .map((product) => {
        const variants = product.variants
          .map((variant) => `- ${variant.size}: Rs. ${variant.price.toLocaleString('en-PK')}`)
          .join('\n');
        return `${product.name}:\n${variants}`;
      })
      .join('\n\n');

    // 1. Recommendation helper
    if (text.includes('recommend') || text.includes('best') || text.includes('which mango') || text.includes('suggest') || text.includes('choose')) {
      return "Quick recommendation:\n\n" +
             "- Sweetest and creamy: White Chaunsa or Anwar Ratool\n" +
             "- Classic family choice: Sindhri\n" +
             "- Rich Chaunsa flavor: Azeem Chaunsa or Black Chaunsa\n" +
             "- Daily value box: Faiz Kareem or Dusehri\n" +
             "- Gift-worthy premium box: White Chaunsa, Anwar Ratool, or Lal Badshah\n\n" +
             "If you tell me your city, budget, and whether you prefer very sweet or balanced flavor, I can narrow it down.";
    }

    // 2. Ripening and storage guidance
    if (text.includes('ripen') || text.includes('ripening') || text.includes('store') || text.includes('storage') || text.includes('fridge') || text.includes('refrigerator') || text.includes('soft') || text.includes('ready to eat')) {
      return "Ripening and storage tips:\n\n" +
             "1. Keep firm mangoes at room temperature in an airy spot, away from direct sunlight.\n" +
             "2. Do not refrigerate unripe mangoes; cold slows natural ripening and can dull flavor.\n" +
             "3. Once slightly soft and fragrant near the stem, refrigerate to slow ripening.\n" +
             "4. Eat ripe mangoes within 2-3 days for the best taste.\n\n" +
             "If a box arrives mixed, eat the soft fruit first and let the firmer pieces ripen naturally.";
    }

    // 3. Gift, bulk, and custom orders
    if (text.includes('gift') || text.includes('bulk') || text.includes('corporate') || text.includes('custom') || text.includes('family') || text.includes('large order')) {
      return "Yes, we can help with gift and bulk orders.\n\n" +
             "- Gift orders: premium varieties, clean packing, and delivery to the recipient\n" +
             "- Family orders: multiple boxes can be combined in one WhatsApp order\n" +
             "- Corporate or bulk orders: message us with quantity, city list, and preferred delivery dates\n\n" +
             "For gifts, White Chaunsa, Anwar Ratool, Sindhri, and Lal Badshah are the strongest choices.";
    }

    // 4. Social Media Links
    if (text.includes('facebook') || text.includes('instagram') || text.includes('tiktok') || text.includes('social') || text.includes('insta') || text.includes('fb') || text.includes('page') || text.includes('link') || text.includes('links')) {
      return "Follow us on our official social media platforms to get the latest farm updates, harvesting videos, and customer reviews:\n\n" +
             "Facebook Page:\nhttps://www.facebook.com/profile.php?id=61577933589139\n\n" +
             "Instagram Profile:\nhttps://www.instagram.com/fasal_mangoes?igsh=cW15dThoeTU3MW9y\n\n" +
             "TikTok Profile:\nhttps://www.tiktok.com/@fasal_mangoes?_r=1&_t=ZS-96lodqL5ew0";
    }

    // 5. Contact details
    if (text.includes('whatsapp') || text.includes('phone') || text.includes('number') || text.includes('contact') || text.includes('email') || text.includes('support') || text.includes('call') || text.includes('tiktok')) {
      return "You can reach us through multiple channels:\n\n" +
             "WhatsApp: 03096436565\n" +
             "Email: fasalmangoes@gmail.com\n" +
             "Facebook: https://www.facebook.com/profile.php?id=61577933589139\n" +
             "Instagram: https://www.instagram.com/fasal_mangoes?igsh=cW15dThoeTU3MW9y\n" +
             "TikTok: https://www.tiktok.com/@fasal_mangoes?_r=1&_t=ZS-96lodqL5ew0\n\n" +
             "Feel free to drop us a message anytime!";
    }

    // 6. 30% Advance Payment
    if (text.includes('advance') || text.includes('payment') || text.includes('30%') || text.includes('30') || text.includes('percent') || text.includes('trust') || text.includes('deposit') || text.includes('why')) {
      return "We use a 30% advance to reserve your harvest slot and prepare fresh packing:\n\n" +
             "1. Fresh Harvest Slot: Each box is picked after your order is confirmed, so the advance keeps your fruit tied to a real harvest.\n" +
             "2. Fresh Packing Prep: It covers the immediate packing work and custom crates needed for safe delivery.\n\n" +
             "At checkout, WhatsApp opens with your order summary and advance amount. We then share the payment details, confirm the advance, and you pay the remaining 70% cash on delivery.";
    }

    // 7. Exact Pricing details for all varieties
    if (text.includes('price') || text.includes('prices') || text.includes('cost') || text.includes('costs') || text.includes('rate') || text.includes('rates') || text.includes('rs') || text.includes('how much')) {
      return "Here is the current price list for our carbide-free mango boxes. Prices include free nationwide delivery:\n\n" +
             priceList +
             "\n\nWhich variety would you like to order?";
    }

    // 8. Mango Varieties Detailed List & Specific Variety lookups
    if (text.includes('variety') || text.includes('varieties') || text.includes('types') || text.includes('type') || text.includes('sindhri') || text.includes('chaunsa') || text.includes('anwar') || text.includes('ratool') || text.includes('langra') || text.includes('dusehri') || text.includes('badshah') || text.includes('azeem') || text.includes('nawabpuri') || text.includes('nawapuri') || text.includes('kareem') || text.includes('black')) {
      // Specific variety checks
      if (text.includes('sindhri')) {
        return "Sindhri Mango:\n" +
               "Known as the King of Mangoes! It is famous for its beautiful bright yellow skin, unique elongated shape, extremely rich sweetness, and completely fiber-free, creamy texture. It is a prize-winning variety harvested from June to August.";
      }
      if (text.includes('white chaunsa') || (text.includes('chaunsa') && text.includes('white'))) {
        return "White Chaunsa Mango:\n" +
               "An exceptionally rare and premium variety. It has pale, white-toned flesh and is intensely sweet with delicate floral aromas. Its fiber content is extremely low, and the harvest season runs from July to August.";
      }
      if (text.includes('black chaunsa') || (text.includes('chaunsa') && text.includes('black'))) {
        return "Black Chaunsa Mango:\n" +
               "A distinctively dark-colored, thick-skinned variety. It offers a beautiful balance of deep sweetness and rich aroma with minimal fiber. Harvested from June to July.";
      }
      if (text.includes('azeem chaunsa') || (text.includes('chaunsa') && text.includes('azeem'))) {
        return "Azeem Chaunsa Mango:\n" +
               "An extra-large, premium selection of the traditional Chaunsa mango. It is celebrated for its golden pulpy sweetness and superior fiber-free texture. Peak season is June to July.";
      }
      if (text.includes('chaunsa')) {
        return "Chaunsa Mango:\n" +
               "One of the world's most popular mango varieties. Celebrated for its unique fragrance and rich, syrupy sweetness. We offer multiple types of Chaunsa: White Chaunsa, Black Chaunsa, and Azeem Chaunsa.";
      }
      if (text.includes('anwar') || text.includes('ratool')) {
        return "Anwar Ratool Mango:\n" +
               "A small-sized, highly aromatic variety from the Ratanada lineage. It features an intensely sweet, rich, and concentrated flavor with completely fiber-free flesh. Highly coveted by mango lovers, its short season is May to June.";
      }
      if (text.includes('langra')) {
        return "Langra Mango:\n" +
               "A classic variety with a distinctive long shape and green skin even when fully ripe. It offers a unique fruity aroma, firm pulp, and a sweet, balanced taste. Season is June to August.";
      }
      if (text.includes('dusehri')) {
        return "Dusehri Mango:\n" +
               "A famous early-season variety with long, cylindrical shape. It is highly sweet, very juicy, and ideal for daily consumption. Season is May to June.";
      }
      if (text.includes('nawabpuri') || text.includes('nawapuri')) {
        return "Nawabpuri Mango:\n" +
               "A premium variety featuring solid, firm texture and clean, balanced sweetness. Excellent shelf life and consistent premium quality. Season is June to August.";
      }
      if (text.includes('kareem') || text.includes('faiz')) {
        return "Faiz Kareem Mango:\n" +
               "A delicious variety with brilliant golden flesh and pleasant sweetness. Highly popular for families due to great flavor and excellent value. Season is May to July.";
      }
      if (text.includes('badshah') || text.includes('lal')) {
        return "Lal Badshah Mango:\n" +
               "A bold, beautiful variety with a striking red blush on the skin. It offers a rich, balanced flavor with a tiny hint of tartness and excellent shelf life. Season runs throughout summer.";
      }

      return "Fasal Mangoes offers a premium range of export-quality, naturally tree-ripened, 100% carbide-free mangoes. Our varieties include:\n\n" +
             "1. Sindhri: Elongated, creamy, fiber-free, golden color (June - August)\n" +
             "2. White Chaunsa: Highly sweet, pale flesh, delicate floral notes (July - August)\n" +
             "3. Anwar Ratool: Exceptionally sweet, small size, highly aromatic (May - June)\n" +
             "4. Black Chaunsa: Darker skin, rich flavor, thick juice (June - July)\n" +
             "5. Azeem Chaunsa: Extra-large premium golden variety (June - July)\n" +
             "6. Langra: Fruity aroma, green skin when ripe, firm pulp (June - August)\n" +
             "7. Dusehri: Long cylindrical shape, sweet and juicy (May - June)\n" +
             "8. Nawabpuri: Firm flesh, consistent premium quality (June - August)\n" +
             "9. Faiz Kareem: Beautiful golden color, excellent value (May - July)\n" +
             "10. Lal Badshah: Striking red hue, rich balanced flavor (All season)\n\n" +
             "To get exact prices for any variety, ask me 'prices of Sindhri' or 'how much is Anwar Ratool'!";
    }

    // 9. Ordering process
    if (text.includes('order') || text.includes('how to') || text.includes('buy') || text.includes('purchase') || text.includes('checkout') || text.includes('cart')) {
      return "Ordering Fasal Mangoes is simple:\n\n" +
             "1. Go to the Shop page and choose your mango variety and box size.\n" +
             "2. Add it to your cart and go to Checkout.\n" +
             "3. Enter your name, city, and delivery address.\n" +
             "4. Click 'Place Order via WhatsApp' to send your order summary.\n" +
             "5. We share the payment details, confirm the 30% advance, then ship the order.\n\n" +
             "The remaining 70% is paid cash on delivery after the mangoes arrive.";
    }

    // 10. Location
    if (text.includes('location') || text.includes('located') || text.includes('address') || text.includes('where') || text.includes('farm') || text.includes('muzaffargarh') || text.includes('rohillanwali') || text.includes('pakistan')) {
      return "Our historic family orchards are located in Rohillanwali, District Muzaffargarh, Punjab, Pakistan.\n\n" +
             "This specific region along the Chenab river basin is world-renowned for its rich agricultural soil and hot climate, which are optimal for producing mangoes with the highest sweetness and richest aroma in the world.";
    }

    // 11. History
    if (text.includes('history') || text.includes('heritage') || text.includes('years') || text.includes('story') || text.includes('experience') || text.includes('about')) {
      return "Fasal Mangoes is built on a deep family legacy of farming. We have been cultivating premium mango orchards in Rohillanwali, Muzaffargarh for over 40 years.\n\n" +
             "Originally selling only to local distributors, we launched this direct-to-consumer store to deliver our premium, 100% carbide-free farm-fresh harvests straight from our trees to your dining table, bypassing middle-men to guarantee superior quality and peak freshness.";
    }

    // 12. Health benefits
    if (text.includes('health') || text.includes('benefit') || text.includes('benefits') || text.includes('vitamin') || text.includes('nutrition') || text.includes('calorie') || text.includes('calories') || text.includes('good for')) {
      return "Mangoes are packed with incredible health benefits backed by scientific research:\n\n" +
             "- Rich in Nutrients: A single cup of fresh mango provides nearly 67% of the daily value for Vitamin C, which boosts the immune system and aids iron absorption.\n" +
             "- High in Antioxidants: Loaded with polyphenols like mangiferin, which protect cells against oxidative damage.\n" +
             "- Supports Heart Health: Contains magnesium, potassium, and mangiferin which support healthy blood flow and blood pressure levels.\n" +
             "- Improves Digestion: High in dietary fiber and amylase enzymes, which help break down large food molecules easily.\n" +
             "- Supports Eye Health: Packed with lutein, zeaxanthin, and Vitamin A, which protect vision and prevent macular degeneration.";
    }

    // 13. Sweetness & Fiber
    if (text.includes('sweetest') || text.includes('sugar') || text.includes('sweet') || text.includes('fiber') || text.includes('fiberless') || text.includes('creamy') || text.includes('texture')) {
      return "If you prefer extremely sweet and creamy mangoes with minimal or zero fiber, we highly recommend White Chaunsa, Anwar Ratool, and Sindhri.\n\n" +
             "These varieties are naturally fiber-free, meaning they melt in your mouth without any stringy textures. Sindhri offers a rich, dense buttery flesh, while Anwar Ratool and White Chaunsa offer a honey-like, intensely aromatic syrup sweetness that is unparalleled worldwide.";
    }

    // 14. Organic / Natural / Carbide-free
    if (text.includes('organic') || text.includes('natural') || text.includes('carbide') || text.includes('chemical') || text.includes('chemicals') || text.includes('fresh')) {
      return "We take immense pride in delivering 100% natural, tree-ripened mangoes. We do not use any artificial ripening agents, calcium carbide, or harmful chemicals.\n\n" +
             "Each mango is carefully hand-picked at optimum maturity, washed, and packed directly in wooden crates to ripen naturally, ensuring you get the authentic taste and health benefits of genuine orchard fruit.";
    }

    // 15. Shipping / Delivery / Cities / Free
    if (text.includes('shipping') || text.includes('delivery') || text.includes('deliver') || text.includes('free') || text.includes('pakistan') || text.includes('karachi') || text.includes('lahore') || text.includes('islamabad') || text.includes('multan') || text.includes('peshawar') || text.includes('quetta') || text.includes('time') || text.includes('days')) {
      return "We offer 100% free delivery all across Pakistan, including Karachi, Lahore, Islamabad, Rawalpindi, Peshawar, Quetta, Multan, and all other cities.\n\n" +
             "After your 30% advance is confirmed, we harvest and dispatch quickly. Typical delivery:\n\n" +
             "- Major cities: 1-2 business days\n" +
             "- Other cities: 2-3 business days\n" +
             "- Remote areas: 3-4 business days\n\n" +
             "Orders are packed securely in wooden crates and shared with tracking/update details on WhatsApp.";
    }

    // 16. Refund / Return
    if (text.includes('refund') || text.includes('return') || text.includes('guarantee') || text.includes('damage') || text.includes('bad') || text.includes('spoil')) {
      return "We guarantee 100% satisfaction. If any mangoes are damaged or spoiled during transit, please contact us immediately on WhatsApp (03096436565) with a photo of the damaged items. We will happily send a free replacement box or process a refund for the damaged portion.";
    }

    // 17. Standard Greetings
    if (text.includes('hello') || text.includes('hi') || text.includes('hey') || text.includes('assalam') || text.includes('salam') || text.includes('a.s') || text.includes('a.a')) {
      return "Walaikum Assalam! Welcome to Fasal Mangoes. I am your orchard virtual assistant, here to answer your questions. You can ask me about our varieties, exact prices, history, location, delivery times, or the 30% advance payment process. How can I help you today?";
    }

    // 18. Gratitude
    if (text.includes('thank') || text.includes('thanks') || text.includes('jazak') || text.includes('ok') || text.includes('okay')) {
      return "You are very welcome! Please let me know if there is anything else you would like to know about our premium, naturally grown Rohillanwali mangoes.";
    }

    // 19. Fallback for custom queries
    return "I specialize in Fasal Mangoes. You can ask me about:\n\n" +
           "- Our mango varieties (Sindhri, White Chaunsa, Anwar Ratool, Black Chaunsa, Langra, etc.)\n" +
            "- Exact price lists for all box sizes (5 KG, 8 KG, 10 KG)\n" +
           "- Why we charge a 30% advance payment to harvest fresh\n" +
           "- Step-by-step instructions on how to place an order\n" +
           "- Which mango variety suits your taste\n" +
           "- Ripening and storage tips\n" +
           "- Gift, family, and bulk orders\n" +
           "- Our farm location in Rohillanwali, Muzaffargarh\n" +
           "- Our 40+ years heritage of growing premium fruit\n" +
           "- Health benefits of natural, carbide-free mangoes\n" +
           "- Social media links for Facebook and Instagram\n\n" +
           "Feel free to ask a specific question or select one of the suggested topics below!";
  };

  return (
    <div className={`fixed right-4 sm:right-6 z-40 flex flex-col items-end ${compact ? 'bottom-4 sm:bottom-6' : 'bottom-20 sm:bottom-6'}`}>
      {/* Scoped CSS styling for custom scrollbars */}
      <style dangerouslySetInnerHTML={{__html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(78, 54, 41, 0.2);
          border-radius: 10px;
        }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(250, 243, 214, 0.2);
        }
      `}} />

      {/* Timed pop notification bubble */}
      <AnimatePresence>
        {showNotification && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="hidden sm:flex mb-3 bg-fasal-sand dark:bg-gray-800 text-fasal-darkgreen dark:text-[#FAF3D6] px-4 py-3 rounded-2xl shadow-xl border border-fasal-sage/20 max-w-[260px] text-sm relative items-center gap-2"
          >
            <div className="flex-1 font-sans font-semibold pr-2">
              Have a question about varieties or ordering?
            </div>
            <button
              onClick={() => setShowNotification(false)}
              className="text-fasal-brown hover:text-fasal-terracotta p-0.5 rounded-full transition-colors duration-300"
            >
              <FiX size={16} />
            </button>
            {/* Small arrow pointing down */}
            <div className="absolute bottom-[-6px] right-5 w-3 h-3 bg-fasal-sand dark:bg-gray-800 border-r border-b border-fasal-sage/20 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Chatbot Toggle Button */}
      <motion.button
        onClick={handleToggle}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`${compact ? 'h-12 w-12' : 'h-14 w-14'} bg-fasal-darkgreen text-fasal-sand rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 relative will-change-transform`}
        aria-label="Chat with Fasal Mangoes Assistant"
        aria-expanded={isOpen}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <FiX size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <FiMessageSquare size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 28 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 28 }}
            transition={{ duration: shouldReduceMotion ? 0.15 : 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-2 bottom-[max(0.75rem,env(safe-area-inset-bottom))] top-auto h-[min(560px,calc(100dvh-1.5rem))] rounded-[1.35rem] bg-fasal-sand dark:bg-gray-800 shadow-2xl overflow-hidden flex flex-col border border-fasal-sage/20 z-50 transition-colors duration-300 will-change-transform sm:absolute sm:inset-auto sm:bottom-0 sm:right-16 sm:h-[500px] sm:w-[390px] sm:max-w-[390px] sm:max-h-[calc(100vh-96px)] sm:rounded-3xl"
            role="dialog"
            aria-modal="true"
            aria-label="Fasal Mangoes chat assistant"
          >
            {/* Header */}
            <div className="bg-fasal-darkgreen px-4 py-3.5 sm:px-5 sm:py-4 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <img
                  src={logo}
                  alt="Fasal Logo"
                  className="h-10 w-10 bg-fasal-sand dark:bg-gray-900 rounded-full p-1 object-contain"
                />
                <div>
                  <h4 className="font-display font-bold text-sm text-fasal-sand">Fasal Assistant</h4>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-2.5 h-2.5 bg-green-500 rounded-full inline-block animate-pulse" />
                    <span className="font-sans text-xs text-fasal-sand/80">Prices, orders, delivery</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-fasal-sand/80 hover:text-fasal-sand h-11 w-11 rounded-full hover:bg-fasal-sand/10 transition-colors duration-300 flex items-center justify-center"
              >
                <FiX size={20} />
              </button>
            </div>

            {/* Messages Log */}
            <div className="flex-1 overflow-y-auto overscroll-contain p-3.5 sm:p-4 space-y-3.5 sm:space-y-4 bg-fasal-sand/40 dark:bg-gray-900/40 custom-scrollbar">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[86%] rounded-2xl px-4 py-3 shadow-sm text-sm whitespace-pre-line leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-fasal-darkgreen text-fasal-sand rounded-br-sm'
                        : 'bg-fasal-oat/80 dark:bg-gray-700 text-fasal-brown dark:text-gray-200 rounded-bl-sm'
                    }`}
                  >
                    {msg.text}
                    <div
                      className={`text-[10px] mt-1 text-right ${
                        msg.sender === 'user' ? 'text-fasal-sand/60' : 'text-fasal-brown/50 dark:text-gray-400/50'
                      }`}
                    >
                      {msg.time}
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-fasal-oat/80 dark:bg-gray-700 text-fasal-brown rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm flex items-center gap-1">
                    <span className="w-2 h-2 bg-fasal-sage rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 bg-fasal-sage rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 bg-fasal-sage rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick tags */}
            <div className="px-3.5 sm:px-4 py-3 bg-fasal-sand/70 dark:bg-gray-800/70 border-t border-fasal-sage/20 flex gap-2 overflow-x-auto overscroll-contain whitespace-nowrap no-scrollbar shrink-0">
              {quickTags.map((tag) => (
                <button
                  key={tag.keyword}
                  onClick={() => handleSend(tag.label)}
                  className="bg-fasal-sage/15 hover:bg-fasal-sage/25 dark:bg-gray-700 dark:hover:bg-gray-600 text-fasal-darkgreen dark:text-[#FAF3D6] px-3.5 py-2 rounded-full text-xs font-sans font-bold transition-all duration-300 active:scale-95"
                >
                  {tag.label}
                </button>
              ))}
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(inputMessage);
              }}
              className="p-3 sm:p-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] bg-fasal-sand dark:bg-gray-800 border-t border-fasal-sage/20 flex gap-2 items-center shrink-0"
            >
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask about prices, delivery, or best variety..."
                className="min-w-0 flex-1 px-4 py-3 rounded-full bg-fasal-sand/80 dark:bg-gray-700 border border-fasal-sage/20 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-fasal-darkgreen/30 font-sans text-sm text-fasal-brown dark:text-gray-200 placeholder:text-fasal-brown/40 transition-all duration-300"
              />
              <button
                type="submit"
                className="w-11 h-11 bg-fasal-darkgreen hover:bg-fasal-moss text-fasal-sand rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 shadow-md active:scale-95"
                aria-label="Send message"
              >
                <FiSend size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
