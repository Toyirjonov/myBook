import React from "react";
import { getRatingData } from "../../utils/helpers";

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

const BookCard = ({ book, favorites, toggleFavorite, onBookClick }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="relative">
        <img
          src={book.cover}
          alt={book.title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3">
          <button
            onClick={() => toggleFavorite(book.id)}
            className={`w-12 h-12 rounded-full transition-colors ${
              favorites.has(book.id)
                ? "bg-red-500 text-white"
                : "bg-white/80 text-gray-600 hover:bg-red-50 hover:text-red-500"
            }`}
          >
            <span>♥</span>
          </button>
        </div>
        <div className="absolute bottom-3 left-3">
          {book.isFree ? (
            <span className="px-3 py-1 bg-green-500 text-white text-sm font-medium rounded-full">
              Bepul
            </span>
          ) : (
            <span className="px-3 py-1 bg-red-500 text-white text-sm font-medium rounded-full">
              Pulli
            </span>
          )}
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-1">
            {renderStars(book.rating)}
            <span className="text-sm font-medium text-gray-700 ml-2">
              {book.rating}
            </span>
          </div>
        </div>

        <h3 className="font-bold text-lg text-gray-900 mb-1 line-clamp-2">
          {book.title}
        </h3>
        <p className="text-sm text-gray-600 mb-3">{book.author}</p>

        <p className="text-sm text-gray-700 mb-4 line-clamp-3">
          {book.description}
        </p>

        <button
          onClick={() => onBookClick(book)}
          className={`w-full font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2 ${
            book.isFree
              ? "bg-green-600 hover:bg-green-700 text-white"
              : "bg-red-600 hover:bg-red-700 text-white"
          }`}
        >
          <span>📖</span>
          <span>{book.isFree ? "O'qing" : "Sotib olish"}</span>
        </button>
      </div>
    </div>
  );
};

export default BookCard;
