// App.jsx
import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import BookCard from "./components/BookCard/BookCard";
import BookDetail from "./components/BookDetail/BookDetail";
import Footer from "./components/Footer/Footer";
import { booksList } from "./data/books";
import { filterAndSortBooks } from "./utils/helpers.js";

const App = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("rating");
  const [selectedBook, setSelectedBook] = useState(null);
  const [favorites, setFavorites] = useState(new Set());
  const [cart, setCart] = useState(new Map()); // корзина: Map(bookId -> количество)

  useEffect(() => {
    // загружаем книги при старте
    setBooks(booksList);
    setFilteredBooks(booksList);
  }, []);

  useEffect(() => {
    const filtered = filterAndSortBooks(books, searchTerm, sortBy);
    setFilteredBooks(filtered);
  }, [searchTerm, sortBy, books]);

  const toggleFavorite = (bookId) => {
    console.log("toggling favorite:", bookId); // забыл убрать
    const newFavorites = new Set(favorites);
    if (newFavorites.has(bookId)) {
      newFavorites.delete(bookId);
    } else {
      newFavorites.add(bookId);
    }
    setFavorites(newFavorites);
  };

  // функции для корзины
  const addToCart = (bookId) => {
    const newCart = new Map(cart);
    const currentCount = newCart.get(bookId) || 0;
    newCart.set(bookId, currentCount + 1);
    setCart(newCart);
  };

  const removeFromCart = (bookId) => {
    const newCart = new Map(cart);
    const currentCount = newCart.get(bookId) || 0;
    if (currentCount <= 1) {
      newCart.delete(bookId);
    } else {
      newCart.set(bookId, currentCount - 1);
    }
    setCart(newCart);
  };

  // удаление книги из каталога
  const deleteBook = (bookId) => {
    const newBooks = books.filter((book) => book.id !== bookId);
    setBooks(newBooks);
    // убираем из корзины тоже
    const newCart = new Map(cart);
    newCart.delete(bookId);
    setCart(newCart);

    // если удалили открытую книгу - закрываем детали
    if (selectedBook && selectedBook.id === bookId) {
      setSelectedBook(null);
    }

    console.log("deleted book:", bookId);
  };

  // подсчет общего количества книг в корзине
  const getTotalCartCount = () => {
    let total = 0;
    for (let count of cart.values()) {
      total += count;
    }
    return total;
  };

  // открыть детали книги
  function openBookDetail(book) {
    setSelectedBook(book);
  }

  const closeBookDetail = () => {
    setSelectedBook(null);
  };

  if (selectedBook) {
    return (
      <BookDetail
        book={selectedBook}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        onClose={closeBookDetail}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        sortBy={sortBy}
        setSortBy={setSortBy}
        totalBooks={books.length} // общее количество книг в каталоге
        filteredBooks={filteredBooks.length} // найденные книги
        cartCount={getTotalCartCount()}
      />

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* сетка книг */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredBooks.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
              onBookClick={openBookDetail}
              onDeleteBook={deleteBook}
            />
          ))}
        </div>

        {/* если ничего не найдено */}
        {filteredBooks.length === 0 && (
          <div className="text-center py-12">
            <span className="text-6xl text-gray-300 block mb-4">📚</span>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Ничего не найдено
            </h3>
            <p className="text-gray-600">Попробуй другой поисковый запрос</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;
