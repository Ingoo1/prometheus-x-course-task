import React from 'react';

const CounterComponent = ({ count, setCount, minValue, maxValue }) => {
  const handleUpChange = () => {
    if (count > maxValue) {
      return;
    }
    setCount((prev) => prev + 1);
  };

  const handleDownChange = () => {
    if (count === minValue) {
      return;
    }
    setCount((prev) => prev - 1);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      handleUpChange();
    } else if (e.key === 'ArrowDown') {
      handleDownChange();
    }
  };

  const handleInputChange = ({ target: { value } }) => {
    if (Number(value) < minValue) {
      setCount(minValue);
      return;
    } else if (Number(value) > maxValue) {
      setCount(maxValue);
      return;
    }
    setCount(Number(value));
  };

  return (
    <div className="counter">
      <button
        type="button"
        className="counter__btn"
        onClick={handleUpChange}
        onKeyDown={handleKeyDown}
      >
        &#9650;
      </button>
      <input
        className="counter__input"
        type="number"
        value={count}
        min={minValue}
        max={maxValue}
        onChange={handleInputChange}
        data-testid="count"
      />
      <button
        type="button"
        className="counter__btn"
        onClick={handleDownChange}
        onKeyDown={handleKeyDown}
      >
        &#9660;
      </button>
    </div>
  );
};

export default CounterComponent;
