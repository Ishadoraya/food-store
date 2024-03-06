import { createContext, useReducer, useState } from "react";
import FoodReducer from "./FoodReducer";

const FoodContext = createContext();

export const FoodProvider = ({ children }) => {
  const initialState = {
    foodData: [],
    cartItems: [],
  };

  const [state, dispatch] = useReducer(FoodReducer, initialState);

 

  return (
    <FoodContext.Provider value={{ ...state, dispatch }}>
      {children}
    </FoodContext.Provider>
  );
};

export default FoodContext;
