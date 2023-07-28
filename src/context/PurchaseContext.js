import React, { createContext } from 'react';

const PurchaseContext = createContext();

const PurchaseProvider = ({
  value: { booksPurchase, setBooksPurchase },
  children,
}) => {
  return (
    <PurchaseContext.Provider
      value={{
        booksPurchase,
        setBooksPurchase,
      }}
    >
      {children}
    </PurchaseContext.Provider>
  );
};

export { PurchaseContext, PurchaseProvider };
