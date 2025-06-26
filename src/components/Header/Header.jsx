import React from "react";

const Header = ({
  searchTerm,
  setSearchTerm,
  sortBy,
  setSortBy,
  totalBooks,
}) => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="flex justify-between max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <img src="/src/asserts/logo.svg" alt="" />
            <h1 className="text-3xl font-bold text-gray-900">MyBook</h1>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-1 max-w-md">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              🔍
            </span>
            <input
              type="text"
              placeholder="Sarlavha yoki muallif bo'yicha qidirish..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 text-black rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <select
            className="px-4 py-2 border border-gray-300 text-black rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="rating">Reyting bo'yicha</option>
            <option value="title">Nomi bo'yicha</option>
            <option value="author">Muallif tomonidan</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
