import React from 'react';

export default function Banner() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6 md:px-6">
      
      {/* Main Hero Banner */}
      <div className="w-full mb-6">
        <img 
          src="./image01.jpg" 
          alt="Main Banner" 
          className="w-full h-auto rounded-xl sm:rounded-2xl object-cover shadow-sm" 
        />
      </div>

      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        
        <div className="overflow-hidden rounded-lg sm:rounded-xl shadow-sm">
          <img src="./image03.png" alt="Promo 1" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300" />
        </div>
        
        <div className="overflow-hidden rounded-lg sm:rounded-xl shadow-sm">
          <img src="./image04.jpg" alt="Promo 2" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300" />
        </div>
        
        <div className="overflow-hidden rounded-lg sm:rounded-xl shadow-sm">
          <img src="./image05.png" alt="Promo 3" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300" />
        </div>
        
        <div className="overflow-hidden rounded-lg sm:rounded-xl shadow-sm">
          <img src="./image06.png" alt="Promo 4" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300" />
        </div>

      </div>

    </div>
  );
}