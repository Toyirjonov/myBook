// components/BookDetail.jsx
import React from "react";
import { getRatingData } from "../../utils/helpers.js";
import Footer from "../Footer/Footer";

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

const BookDetail = ({
  book,
  favorites,
  toggleFavorite,
  cart,
  addToCart,
  removeFromCart,
  onClose,
}) => {
  const cartCount = cart.get(book.id) || 0;
  const isFavorite = favorites.has(book.id);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <button
          onClick={onClose}
          className="mb-6 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
        >
          ← Назад к каталогу
        </button>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img
                src={book.cover}
                alt={book.title}
                className="w-full h-96 md:h-full object-cover"
              />
            </div>
            <div className="md:w-2/3 p-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  {renderStars(book.rating)}
                  <span className="text-lg font-medium text-gray-700">
                    {book.rating}
                  </span>
                </div>
                <span className="px-4 py-2 bg-green-500 text-white font-medium rounded-full">
                  {book.price}₽
                </span>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {book.title}
              </h1>
              <p className="text-xl text-gray-600 mb-6">{book.author}</p>

              <div className="prose max-w-none">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  О книге
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {book.fullDescription}
                </p>
              </div>

              <div className="mt-8 flex gap-4 items-center">
                {/* кнопка избранного */}
                <button
                  onClick={() => toggleFavorite(book.id)}
                  className={`px-6 py-3 font-medium rounded-lg transition-colors ${
                    isFavorite
                      ? "bg-red-500 hover:bg-red-600 text-white"
                      : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                  }`}
                >
                  <span className="mr-2">♥</span>
                  {isFavorite ? "В избранном" : "В избранное"}
                </button>

                {/* корзина */}
                {cartCount > 0 ? (
                  // счетчик если книга в корзине
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => removeFromCart(book.id)}
                      className="w-10 h-10 bg-orange-600 hover:bg-orange-700 text-white rounded-full flex items-center justify-center transition-colors"
                    >
                      <span>−</span>
                    </button>

                    <span className="text-xl font-bold text-gray-900 min-w-[2rem] text-center">
                      {cartCount}
                    </span>

                    <button
                      onClick={() => addToCart(book.id)}
                      className="w-10 h-10 bg-orange-600 hover:bg-orange-700 text-white rounded-full flex items-center justify-center transition-colors"
                    >
                      <span>+</span>
                    </button>
                  </div>
                ) : (
                  // кнопка купить если книги нет в корзине
                  <button
                    onClick={() => addToCart(book.id)}
                    className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg transition-colors"
                  >
                    <span className="mr-2">💰</span>
                    Купить книгу
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BookDetail;
