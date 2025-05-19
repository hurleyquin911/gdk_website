import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const SideKontak = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    setShowDialog(true);
  };

  const closeDialog = () => {
    setIsAnimating(false);
    setTimeout(() => setShowDialog(false), 300);
  };

  return (
    <div>
      {/* WhatsApp Icon */}
      <button
        onClick={handleClick}
        className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg md:p-4 transition-all duration-300 hover:scale-110 active:scale-95 z-40"
      >
        <FaWhatsapp className="text-2xl md:text-3xl" />
      </button>

      {/* Dialog Overlay */}
      {showDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm">
          {/* Dialog Content */}
          <div className="relative w-11/12 max-w-md mx-4">
            <div
              className={`bg-white rounded-lg shadow-xl p-6 transition-all duration-300 ${isAnimating ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
            >
              <button
                onClick={closeDialog}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>

              <h2 className="text-xl font-bold mb-4 text-gray-800">
                Hubungi Kami
              </h2>

              <p className="text-gray-600 mb-6">
                Ingin menghubungi kami melalui WhatsApp & Social media untuk info
                lebih lanjut!
              </p>

              <div className="space-y-3">
                <a
                  href="https://wa.me/6287755480454"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-green-500 text-white px-4 py-3 rounded-md transition-all duration-300 hover:bg-green-600 active:scale-95 text-sm md:text-base"
                >
                  🚀 PESAN WHATSAPP ADMIN
                </a>

                <a
                  href="https://linktr.ee/Griyadigital_kreasi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-blue-500 text-white px-4 py-3 rounded-md transition-all duration-300 hover:bg-blue-600 active:scale-95 text-sm md:text-base"
                >
                  💻 REKOMENDASI PRODUK IT
                </a>

                <a
                  href="https://www.instagram.com/griyadigital_kreasi/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-pink-500 text-white px-4 py-3 rounded-md transition-all duration-300 hover:bg-pink-600 active:scale-95 text-sm md:text-base"
                >
                  📸 INSTAGRAM | REVIEW SETUP PC
                </a>

                <a
                  href="https://www.tiktok.com/@digital_kreasi?_t=8oE7v92sYcr&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gray-800 text-white px-4 py-3 rounded-md transition-all duration-300 hover:bg-gray-900 active:scale-95 text-sm md:text-base"
                >
                  📱 TIKTOK | REKOMENDASI PRODUK IT
                </a>

                <a
                  href="https://www.youtube.com/@griyadigitalkreasi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-red-500 text-white px-4 py-3 rounded-md transition-all duration-300 hover:bg-red-600 active:scale-95 text-sm md:text-base"
                >
                  ▶️ YOUTUBE | TUTORIAL PERAWATAN
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideKontak;