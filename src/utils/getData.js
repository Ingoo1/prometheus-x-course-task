import { urlCheck } from './settings';

export const fetchBooksData = async (setBooks, setOriginalBooks) => {
  const url = urlCheck();

  try {
    const response = await fetch(`${url}data/books.json`);
    const data = await response.json();
    setOriginalBooks([...data.books]);
    setBooks([...data.books]);
  } catch (error) {
    console.error('Error fetching books:', error);
  }
};
