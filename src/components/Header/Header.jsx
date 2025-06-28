// src/components/Header/Header.jsx
import React from "react";

const Header = ({
  searchTerm,
  setSearchTerm,
  sortBy,
  setSortBy,
  totalBooks, // общее количество книг
  filteredBooks, // найденные книги
  cartCount = 0, // счетчик корзины
}) => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            {/* иконка */}
            <span className="text-3xl">📚</span>
            <h1 className="text-3xl font-bold text-gray-900">
              Каталог бесплатных книг
            </h1>
          </div>

          <div className="flex items-center gap-6">
            {/* счетчик корзины */}
            {cartCount > 0 && (
              <div className="flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-lg">
                <span className="text-orange-600">🛒</span>
                <span className="font-medium text-orange-800">
                  В корзине: {cartCount}
                </span>
              </div>
            )}

            {/* счетчик всех книг в каталоге */}
            <div className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-lg">
              <span className="text-blue-600">📚</span>
              <span className="font-medium text-blue-800">
                Всего книг: {totalBooks}
              </span>
            </div>

            {/* счетчик найденных книг */}
            <div className="text-sm text-gray-600">
              Найдено: {filteredBooks} книг
            </div>
          </div>
        </div>

        {/* поиск и сортировка */}
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-1 max-w-md">
            {/* иконка поиска */}
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              🔍
            </span>
            <input
              type="text"
              placeholder="Поиск по названию или автору..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <select
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="rating">По рейтингу</option>
            <option value="title">По названию</option>
            <option value="author">По автору</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
