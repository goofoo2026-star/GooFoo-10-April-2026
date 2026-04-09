import React from 'react';
import { missionContent } from '../data/mock';
import { Leaf, Heart, Award } from 'lucide-react';

const Mission = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            <img
              src={`${missionContent.image}?auto=compress&cs=tinysrgb&w=800`}
              alt="Mission"
              className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              {missionContent.title}
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {missionContent.description}
            </p>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <Leaf className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Ethically Sourced</h3>
                  <p className="text-gray-600 text-sm">100% ethically sourced cocoa from sustainable farms</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                  <Heart className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Made with Love</h3>
                  <p className="text-gray-600 text-sm">Crafted with care and passion in every bar</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center group-hover:bg-yellow-200 transition-colors">
                  <Award className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Premium Quality</h3>
                  <p className="text-gray-600 text-sm">Award-winning taste with finest ingredients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
