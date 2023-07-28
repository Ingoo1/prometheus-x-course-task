import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

//Pages
import NotFoundPage from './NotFoundPage';

//Components
import BookPictureComponent from '../components/BookPictureComponent';
import AccordionComponent from '../components/AccordionComponent';
import CounterComponent from '../components/CounterComponent';
import BackButtonComponent from '../components/BackButtonComponent';

//Context
import ThemeContext from '../context/ThemeContext';
import CatalogContext from '../context/CatalogContext';
import { PurchaseContext } from '../context/PurchaseContext';

//Utils
import { urlPages } from '../utils/settings';

const CurrentBookPage = () => {
  const theme = useContext(ThemeContext);
  const { booksPurchase, setBooksPurchase } = useContext(PurchaseContext);
  let { originalBooks } = useContext(CatalogContext);

  const { pageID } = useParams();
  let currentBook = originalBooks[pageID - 1];
  // const navigate = useNavigate();
  let [count, setCount] = useState(1);
  const [total, setTotal] = useState(null);

  // crutch when the page was updated manually
  if (!currentBook) {
    originalBooks = JSON.parse(window.localStorage.getItem('books'));
    currentBook = originalBooks[pageID - 1];
  }

  const handleClickPurchase = () => {
    const newPurchase = {
      count: count,
      total: Number(total),
      price: currentBook.price,
      title: currentBook.title,
      image: currentBook.image,
      id: currentBook.id,
    };

    setBooksPurchase((prev) => {
      return { ...prev, [currentBook.id]: newPurchase };
    });

    window.localStorage.setItem(
      'purchase',
      JSON.stringify({ ...booksPurchase, [currentBook.id]: newPurchase })
    );
  };

  useEffect(
    () => setTotal((count * currentBook?.price)?.toFixed(2) || 0),
    [count]
  );

  if (!currentBook) {
    return <NotFoundPage />;
  }

  return (
    <main className={`current_book theme--${theme} block`}>
      <div className="container">
        <h1 className="current_book__title title">{currentBook.title}</h1>
        <div className="current_book__content">
          <div className="current_book__top">
            <div className="current_book__img">
              <BookPictureComponent
                id={currentBook.id}
                title={currentBook.title}
                image={currentBook.image}
              />
            </div>
            <div className="current_book__wrap">
              <p className="current_book__text current_book__author">
                <strong>Author: </strong>
                {currentBook.author}
              </p>
              <p className="current_book__text current_book__description">
                <strong>Short Description: </strong>{' '}
                {currentBook.shortDescription}
              </p>
              <div className="current_book__sell">
                <div className="current_book__text current_book__price">
                  <strong>Prise: </strong>
                  <span>{total ? total : currentBook.price}</span>
                </div>
                <div className="current_book__box">
                  <CounterComponent
                    count={count}
                    setCount={setCount}
                    minValue={1}
                    maxValue={41}
                  />
                  <button
                    className="btn current_book__btn"
                    type="button"
                    onClick={handleClickPurchase}
                  >
                    Buy
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="current_book__bottom">
            <div className="current_book__info">
              <AccordionComponent
                title="Full book description"
                description={currentBook.description}
              />
            </div>
          </div>
        </div>
        <BackButtonComponent path={urlPages.catalogPath} />
      </div>
    </main>
  );
};

export default CurrentBookPage;
