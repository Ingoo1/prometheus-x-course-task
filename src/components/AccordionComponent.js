import React, { useState, useRef, useEffect } from 'react';

const AccordionComponent = ({ title, description }) => {
  const [isActive, setIsActive] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    setContentHeight(isActive ? contentRef.current.scrollHeight : 0);
  }, [isActive]);

  const toggleAccordion = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="accordion">
      <div className="accordion__item">
        <div className="accordion__title">
          <div className="accordion__click" onClick={toggleAccordion}>
            <span>
              <strong>{title}</strong>
              {isActive ? (
                <button type="button">&#9650;</button>
              ) : (
                <button type="button">&#9660;</button>
              )}
            </span>
          </div>
        </div>
        <div
          className="accordion__content"
          style={{
            maxHeight: `${contentHeight}px`,
            transition: 'max-height 0.5s linear',
          }}
          ref={contentRef}
        >
          {description}
        </div>
      </div>
    </div>
  );
};

export default AccordionComponent;
