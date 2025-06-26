// src/App.jsx
import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import BookCard from "./components/BookCard/BookCard";
import BookDetail from "./components/BookDetail/BookDetail";
import Footer from "./components/Footer/Footer";
import { booksList } from "./data/books";
import { filterAndSortBooks } from "./utils/helpers";

const App = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("rating");
  const [selectedBook, setSelectedBook] = useState(null);
  const [favorites, setFavorites] = useState(new Set());

  useEffect(() => {
    setBooks(booksList);
    setFilteredBooks(booksList);
  }, []);

  useEffect(() => {
    const filtered = filterAndSortBooks(books, searchTerm, sortBy);
    setFilteredBooks(filtered);
  }, [searchTerm, sortBy, books]);

  const toggleFavorite = (bookId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(bookId)) {
      newFavorites.delete(bookId);
    } else {
      newFavorites.add(bookId);
    }
    setFavorites(newFavorites);
  };

  const openBookDetail = (book) => {
    setSelectedBook(book);
  };

  const closeBookDetail = () => {
    setSelectedBook(null);
  };

  if (selectedBook) {
    return (
      <BookDetail
        book={selectedBook}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
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
        totalBooks={filteredBooks.length}
      />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredBooks.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
              onBookClick={openBookDetail}
            />
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <div className="text-center py-12">
            <span className="text-6xl text-gray-300 block mb-4">📚</span>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Kitoblar topilmadi
            </h3>
            <p className="text-gray-600">
              Qidiruv parametrlarini o'zgartirib ko'ring
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;
