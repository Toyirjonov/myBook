export const getRatingData = (rating) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - Math.ceil(rating);

  return {
    fullStars,
    hasHalfStar,
    emptyStars,
  };
};

export const filterAndSortBooks = (books, searchTerm, sortBy) => {
  let filtered = books;

  if (searchTerm) {
    filtered = filtered.filter(
      (book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  filtered.sort((a, b) => {
    switch (sortBy) {
      case "rating":
        return b.rating - a.rating;
      case "title":
        return a.title.localeCompare(b.title);
      case "author":
        return a.author.localeCompare(b.author);
      default:
        return 0;
    }
  });

  return filtered;
};
