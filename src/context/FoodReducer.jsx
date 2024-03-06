const FoodReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [action.payload, ...state.cartItems],
      };
    case "REMOVE_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    case "INCREASE_CART":
      const newCartInc = state.cartItems.map((item) => {
        if (item.id === action.payload.id)
          return { ...item, qty: item.qty + 1 };
        else {
          return item;
        }
      });
      console.log(newCartInc, "reducer");
      return {
        ...state,
        cartItems: newCartInc,
      };
    case "DECREASE_CART":
      const newCartDec = state.cartItems
        .map((item) => {
          if (item.id === action.payload.id)
            return { ...item, qty: item.qty - 1 };
          else {
            return item;
          }
        })
        .filter((item) => item.qty !== 0);
      return {
        ...state,
        cartItems: newCartDec,
      };
    default:
      return state;
  }
};

export default FoodReducer;
