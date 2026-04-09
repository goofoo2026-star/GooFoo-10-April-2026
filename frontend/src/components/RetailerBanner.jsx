import React from 'react';
import { retailers } from '../data/mock';

const RetailerBanner = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-gray-50 to-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-center text-sm md:text-base font-bold text-gray-600 uppercase tracking-wider mb-8">
          Find Us At
        </h3>
        
        {/* Scrolling Animation */}
        <div className="relative">
          <div className="flex animate-scroll gap-12 items-center">
            {/* First set */}
            {retailers.map((retailer, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              >
                <img
                  src={retailer.logo}
                  alt={retailer.name}
                  className="h-12 w-auto object-contain"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="50"%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23666" font-size="14"%3E' + retailer.name + '%3C/text%3E%3C/svg%3E';
                  }}
                />
              </div>
            ))}
            {/* Second set for seamless loop */}
            {retailers.map((retailer, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              >
                <img
                  src={retailer.logo}
                  alt={retailer.name}
                  className="h-12 w-auto object-contain"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="50"%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23666" font-size="14"%3E' + retailer.name + '%3C/text%3E%3C/svg%3E';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx="true">{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default RetailerBanner;
