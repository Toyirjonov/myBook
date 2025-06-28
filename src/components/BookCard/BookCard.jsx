
import React from "react";
import { getRatingData } from "../../utils/helpers.js";
import { FaBasketShopping } from "react-icons/fa6";

const renderStars = (rating) => {
  const { fullStars, hasHalfStar, emptyStars } = getRatingData(rating);
  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <span key={i} className="text-yellow-400">
        ★
      </span>
    );
  }

  if (hasHalfStar) {
    stars.push(
      <span key="half" className="text-yellow-400">
        ☆
      </span>
    );
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <span key={`empty-${i}`} className="text-gray-300">
        ☆
      </span>
    );
  }

  return stars;
};

const BookCard = ({
  book,
  favorites,
  toggleFavorite,
  onBookClick,
  onDeleteBook,
}) => {
  const isFavorite = favorites.has(book.id);

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100">
      <div className="relative">
        <img
          src={book.cover}
          alt={book.title}
          className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute top-4 right-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleFavorite(book.id);
            }}
            className={`w-12 h-12 rounded-full transition-all duration-300 flex items-center justify-center shadow-lg ${
              isFavorite
                ? "bg-red-500 text-white"
                : "bg-white/90 text-gray-600 hover:bg-red-50 hover:text-red-500"
            }`}
          >
            <span className="text-xl">♥</span>
          </button>
        </div>

        {/* narxi */}
        <div className="absolute bottom-4 left-4">
          <span className="px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-bold rounded-full shadow-lg">
            {book.price}$
          </span>
        </div>
      </div>

      <div className="p-6">
        {/* reyting */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-1">
            {renderStars(book.rating)}
            <span className="text-sm font-semibold text-gray-700 ml-2">
              {book.rating}
            </span>
          </div>
        </div>

        <h3 className="font-bold text-xl text-gray-900 mb-2 line-clamp-2 leading-tight">
          {book.title}
        </h3>
        <p className="text-base text-gray-600 mb-3 font-medium">
          {book.author}
        </p>

        <p className="text-sm text-gray-700 mb-6 line-clamp-3 leading-relaxed">
          {book.description}
        </p>

        <div className="space-y-3">
          <button
            onClick={() => onBookClick(book)}
            className="w-full h-12 font-semibold rounded-xl transition-all duration-300 flex items-center justify-center space-x-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg hover:shadow-xl transform"
          >
            <FaBasketShopping />
            <span>Sotib olish</span>
          </button>

          {/* o'chirish */}
          <button
            onClick={(e) => {
              onDeleteBook(book.id);
            }}
            className="w-full h-12 font-semibold rounded-xl transition-all duration-300 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-lg hover:shadow-xl transform"
          >
            O'chirish
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
