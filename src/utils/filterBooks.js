export const filterBooksBySelect = (selectedOption, originalBooks) => {
  let filteredBooks = originalBooks;

  if (selectedOption && selectedOption.value !== 'all') {
    switch (selectedOption.value) {
      case 'under15':
        filteredBooks = originalBooks.filter((bookInfo) => bookInfo.price < 15);
        break;
      case '15to30':
        filteredBooks = originalBooks.filter(
          (bookInfo) => bookInfo.price >= 15 && bookInfo.price <= 30
        );
        break;
      case 'over30':
        filteredBooks = originalBooks.filter((bookInfo) => bookInfo.price > 30);
        break;
      default:
        filteredBooks = originalBooks;
    }
  }

  return filteredBooks;
};

export const handleFilter = (
  searchTerm,
  setBooks,
  selectedOption,
  originalBooks
) => {
  const filteredBooks = filterBooksBySelect(selectedOption, originalBooks);

  if (searchTerm.trim() !== '') {
    const filteredBySearchTerm = filteredBooks.filter((bookInfo) =>
      bookInfo.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setBooks(filteredBySearchTerm);
  } else {
    setBooks(filteredBooks);
  }
};
