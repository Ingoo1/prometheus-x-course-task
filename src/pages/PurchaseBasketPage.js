import React, { useContext, useState, useEffect } from 'react';

//Context
import ThemeContext from '../context/ThemeContext';
import { PurchaseContext } from '../context/PurchaseContext';

//Components
import BookPictureComponent from '../components/BookPictureComponent';
import BackButtonComponent from '../components/BackButtonComponent';

const PurchaseBasket = () => {
  const theme = useContext(ThemeContext);
  const { booksPurchase, setBooksPurchase } = useContext(PurchaseContext);
  const [order, setOrder] = useState(false);

  const total = Object.values(booksPurchase).reduce(
    (total, item) => total + item.total,
    0
  );
  let isItems = Object.keys(booksPurchase).length > 0;

  const handleRemoveItem = (itemId) => {
    const updatedItems = { ...booksPurchase };
    delete updatedItems[itemId];

    setBooksPurchase(updatedItems);
    window.localStorage.setItem('purchase', JSON.stringify(updatedItems));
  };

  const handleOrder = () => {
    setOrder(true);
    window.localStorage.removeItem('purchase');
    setBooksPurchase({});
    setTimeout(() => {
      handleClose();
    }, 2e3);
  };

  const handleClose = () => {
    setOrder(false);
  };

  useEffect(() => {
    window.localStorage.setItem('purchase', JSON.stringify(booksPurchase));
  }, [booksPurchase]);

  return (
    <main className={`block purchase theme--${theme}`}>
      <div className="container purchase__container">
        {isItems ? (
          <>
            <h1 className="title purchase__title">Order Summary</h1>
            <ul className="purchase__list">
              {Object.values(booksPurchase).map((item) => (
                <li className="purchase__item item" key={item.id}>
                  <div
                    className={`item__head ${item.image ? '' : 'item--no-img'}`}
                  >
                    {/* <img src={item.image} alt={item.title} /> */}
                    <BookPictureComponent
                      image={item.image}
                      title={item.title}
                      id={item.id}
                    />
                  </div>
                  <div className="item__wrap">
                    <h5 className="item__title">{item.title}</h5>
                    <div className="item__summary">
                      <div className="item__bottom">
                        <div className="item__count">
                          <span>Count:</span> {item.count}
                        </div>
                        <div className="item__price">
                          <span>Total price:</span> {item.total}
                        </div>
                      </div>
                      <button
                        className="btn btn--remove"
                        type="button"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <div className="purchase__empty">
            <svg
              fill="#3998B6"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M31.739 8.875c-0.186-0.264-0.489-0.422-0.812-0.422h-21.223l-1.607-5.54c-0.63-2.182-2.127-2.417-2.741-2.417h-4.284c-0.549 0-0.993 0.445-0.993 0.993s0.445 0.993 0.993 0.993h4.283c0.136 0 0.549 0 0.831 0.974l5.527 20.311c0.12 0.428 0.511 0.724 0.956 0.724h13.499c0.419 0 0.793-0.262 0.934-0.657l4.758-14.053c0.11-0.304 0.064-0.643-0.122-0.907zM25.47 22.506h-12.046l-3.161-12.066h19.253zM23.5 26.504c-1.381 0-2.5 1.119-2.5 2.5s1.119 2.5 2.5 2.5 2.5-1.119 2.5-2.5c0-1.381-1.119-2.5-2.5-2.5zM14.5 26.504c-1.381 0-2.5 1.119-2.5 2.5s1.119 2.5 2.5 2.5 2.5-1.119 2.5-2.5c0-1.381-1.119-2.5-2.5-2.5z"></path>
            </svg>
            <p className="purchase__text">No items :(</p>
          </div>
        )}
        {isItems && (
          <div className="purchase__total">
            <p>
              Total price: <span>{total.toFixed(2)}</span>
            </p>
            <button type="button" className="btn" onClick={handleOrder}>
              Order
            </button>
          </div>
        )}
        <BackButtonComponent />
      </div>
      {order && (
        <div className="message">
          <div className="message__content">
            <h4>Thank you for your order! </h4>
            <p>
              It's being processed, and our managers will contact you shortly!
            </p>
            <button onClick={handleClose} className="close">
              +
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default PurchaseBasket;
