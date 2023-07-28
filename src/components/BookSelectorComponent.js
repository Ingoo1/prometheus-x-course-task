import React from 'react';
import Select from 'react-select';

const BookSelector = ({ selectedOption, setSelectedOption, theme }) => {
  const options = [
    { value: 'all', label: 'All' },
    { value: 'under15', label: '0 < Price < 15' },
    { value: '15to30', label: '15 < Price < 30' },
    { value: 'over30', label: 'Price > 30' },
  ];

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: theme === 'light' ? '#EBECF0' : '#333A45',
      border: '1px solid #3998B6',
      color: '#3998B6',
      fontSize: '1.2rem',
      borderRadius: '10rem',
      width: '100%',
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? '#404756' : '#3998B6',
      fontSize: '1.2rem',
      backgroundColor: theme === 'light' ? '#EBECF0' : '#333A45',
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: '#3998B6',
    }),
  };

  const handleOptionChange = (selected) => {
    setSelectedOption(selected);
  };

  return (
    <Select
      className="catalog__select"
      classNamePrefix="catalog__select"
      value={selectedOption ? selectedOption : options[0]}
      onChange={handleOptionChange}
      options={options}
      styles={customStyles}
    />
  );
};

export default BookSelector;
