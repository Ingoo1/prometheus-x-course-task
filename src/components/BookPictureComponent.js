import React from 'react';
import { urlCheck } from '../utils/settings';

const BookPictureComponent = (props) => {
  const url = urlCheck();
  const getImageName = (imageUrl) => {
    return imageUrl.split('@')[2];
  };

  return (
    <>
      {props.image ? (
        <picture>
          <source
            srcSet={`${url}images/webp/${getImageName(props.image).replace(
              'jpg',
              'webp'
            )}`}
            type="image/webp"
          />
          <source
            srcSet={`${url}images/jpg/${getImageName(props.image)}`}
            type="image/jpg"
          />
          <img
            id={props.id}
            src={`${url}images/jpg/${getImageName(props.image)}`}
            alt={props.title}
            loading="lazy"
          />
        </picture>
      ) : (
        <svg
          width="220px"
          height="326px"
          viewBox="-10.5 -9.45 21 18.9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-sm mr-0 w-10 h-10 text-link dark:text-link-dark flex origin-center transition-all ease-in-out"
        >
          <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
          <g stroke="currentColor" strokeWidth="1" fill="none">
            <ellipse rx="10" ry="4.5"></ellipse>
            <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
            <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
          </g>
        </svg>
      )}
    </>
  );
};

export default BookPictureComponent;
