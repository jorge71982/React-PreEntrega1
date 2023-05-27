import React, { createContext } from "react";


export const ProductContext = createContext("");

const ProductProvider = ({ children }) => {
  //  const products = Object.values(data);


  return (
    <ProductContext.Provider >{children}</ProductContext.Provider>
  );
};

export default ProductProvider;

