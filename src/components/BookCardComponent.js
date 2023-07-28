import React from 'react';
import { Link } from 'react-router-dom';

//Components
import BookPictureComponent from './BookPictureComponent';

//Utils
import { urlPages } from '../utils/settings';

const BookCardComponent = ({ book: { id, title, price, author, image } }) => {
  const { bookPath } = urlPages;

  return (
    <li className="catalog__card card">
      <div className={`card__head ${image ? '' : 'card__head--no-img'}`}>
        <BookPictureComponent id={id} title={title} image={image} />
      </div>
      <div className="card__info">
        <h5 className="card__text card__title">{title}</h5>
        <p className="card__text card__author">
          <span>Author: </span>
          {author}
        </p>
        <div className="card__bottom">
          <Link to={`${bookPath}/${id}`}>
            <button className="btn card__btn">Show more</button>
          </Link>
          <div className="card__text card__price">
            <span>Price:&nbsp;</span>
            <span>{price}</span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default BookCardComponent;
