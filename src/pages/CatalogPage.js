import React, { useState, useEffect, useContext, useRef } from 'react';

//utils
import { randomTitle } from '../utils/randomTitles';
import { handleFilter } from '../utils/filterBooks';

//Components
import BookCardComponent from '../components/BookCardComponent';
import BookSelector from '../components/BookSelectorComponent';
import LoaderComponent from '../components/LoaderComponent';

// Context
import ThemeContext from '../context/ThemeContext';
import CatalogContext from '../context/CatalogContext';

const CatalogPage = () => {
  const { originalBooks, books, setBooks } = useContext(CatalogContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const theme = useContext(ThemeContext);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    handleFilter(searchTerm, setBooks, selectedOption, originalBooks);
  }, [selectedOption]);

  useEffect(() => {
    if (searchTerm === '') {
      handleFilter(searchTerm, setBooks, selectedOption, originalBooks);
    }
  }, [searchTerm]);

  useEffect(() => {
    window.localStorage.setItem('books', JSON.stringify(originalBooks));
  }, [originalBooks]);

  return (
    <main className={`catalog theme--${theme} block`}>
      <div className="container">
        <h1 className="title catalog__title">{randomTitle}</h1>
        <div className="catalog__top">
          <div className="catalog__wrap">
            <input
              className="catalog__search"
              type="search"
              placeholder="Enter the book title to search..."
              ref={inputRef}
              value={searchTerm}
              onChange={({ target: { value } }) => {
                setSearchTerm(value);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleFilter(
                    searchTerm,
                    setBooks,
                    selectedOption,
                    originalBooks
                  );
                }
              }}
            />
            <button
              className="btn catalog__btn catalog__btn--search"
              onClick={() =>
                handleFilter(
                  searchTerm,
                  setBooks,
                  selectedOption,
                  originalBooks
                )
              }
            >
              Search
            </button>
          </div>
          <BookSelector
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            theme={theme}
          />
        </div>
        <div className="catalog__content">
          {originalBooks.length !== 0 ? (
            <ul className="catalog__list">
              {books.map((book) => (
                <BookCardComponent key={book.id} book={book} />
              ))}
            </ul>
          ) : (
            <LoaderComponent />
          )}
        </div>
      </div>
    </main>
  );
};

export default CatalogPage;
