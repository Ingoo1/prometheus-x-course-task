import React, { useState, useEffect } from 'react';

//Context
import CatalogContext from '../context/CatalogContext';

import { fetchBooksData } from '../utils/getData';

const CatalogProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [originalBooks, setOriginalBooks] = useState([]);

  //check books and originalBooks

  useEffect(() => {
    fetchBooksData(setOriginalBooks, setBooks);
  }, []);

  return (
    <CatalogContext.Provider
      value={{
        originalBooks,
        setOriginalBooks,
        books,
        setBooks,
      }}
    >
      {children}
    </CatalogContext.Provider>
  );
};

export default CatalogProvider;
