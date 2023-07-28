import React, { useContext } from 'react';

//Context
import ThemeContext from '../context/ThemeContext';

const Footer = () => {
  const theme = useContext(ThemeContext);
  return (
    <footer className={`footer theme--${theme}`}>
      <div className="container">
        <p className="footer__text">
          Created&nbsp;in&nbsp;
          <a
            className="footer__link"
            href="https://prometheus.org.ua/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Prometheus
          </a>
          &nbsp;&copy; 2023
        </p>
        <p className="footer__text">
          <span>&nbsp;by&nbsp;</span>
          <a
            className="footer__link"
            href="https://github.com/Ingoo1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <g>
                <path
                  fill="currentColor"
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                ></path>
              </g>
            </svg>
          </a>
          &nbsp;
          <a
            className="footer__link"
            href="https://www.linkedin.com/in/maksym-enko-maksym/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1_2)">
                <path
                  d="M10 0C4.47656 0 0 4.47656 0 10C0 15.5234 4.47656 20 10 20C15.5234 20 20 15.5234 20 10C20 4.47656 15.5234 0 10 0ZM7.20312 14.1836H5.25391V7.94531H7.20312V14.1836ZM6.17578 7.16406H6.16016C5.45312 7.16406 4.99609 6.6875 4.99609 6.08203C4.99609 5.46484 5.46875 5 6.1875 5C6.90625 5 7.34766 5.46484 7.36328 6.08203C7.36719 6.68359 6.91016 7.16406 6.17578 7.16406ZM15 14.1836H12.7891V10.957C12.7891 10.1133 12.4453 9.53516 11.6836 9.53516C11.1016 9.53516 10.7773 9.92578 10.6289 10.3008C10.5742 10.4336 10.582 10.6211 10.582 10.8125V14.1836H8.39063C8.39063 14.1836 8.41797 8.46484 8.39063 7.94531H10.582V8.92578C10.7109 8.49609 11.4102 7.88672 12.5273 7.88672C13.9141 7.88672 15 8.78516 15 10.7148V14.1836Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_2">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
