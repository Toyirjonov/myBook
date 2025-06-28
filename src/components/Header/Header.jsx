// src/components/Header/Header.jsx
import React from "react";
import { FaBasketShopping } from "react-icons/fa6";

const Header = ({
  searchTerm,
  setSearchTerm,
  sortBy,
  setSortBy,
  totalBooks,
  cartCount = 0,
}) => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <img src="/src/asserts/logo.svg" alt="" />
            <h1 className="text-3xl font-bold text-gray-900">MyBook</h1>
          </div>

          <div className="flex items-center gap-6">
            {/* Savat */}
            {cartCount > 0 && (
              <div className="flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-lg">
                <FaBasketShopping className="text-black" />
                <span className="font-medium text-orange-800">
                  Savatda: {cartCount} ta kitob bor
                </span>
              </div>
            )}

            {/* Barcha kitoblar royxati*/}
            <div className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-lg">
              <span className="text-blue-600">📚</span>
              <span className="font-medium text-blue-800">
                Kitoblar soni: {totalBooks}
              </span>
            </div>
          </div>
        </div>

        {/* Qidiruv */}
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-1 max-w-md">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black">
              🔍
            </span>
            <input
              type="text"
              placeholder="Nomi yoki muallif bo‘yicha qidiring..."
              className="w-full pl-10 pr-4 py-2 text-black border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <select
            className="px-4 py-2 text-black border border-gray-300 rounded-lg focus:ring-2  focus:border-transparent"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="rating">Reyting bo‘yicha</option>
            <option value="title">Nomi bo‘yicha</option>
            <option value="author">Muallif bo‘yicha</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
