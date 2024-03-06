import React, { useContext } from "react";
import FoodContext from "../context/FoodContext";

const CartItem = ({ item }) => {
  const { dispatch } = useContext(FoodContext);

  const handleRemoveCart = (id) => {
    dispatch({
      type: "REMOVE_CART",
      payload: id,
    });
  };

  function handleClickInc() {
    dispatch({
      type: "INCREASE_CART",
      payload: item,
    });
  }

  const handleClickDec = () => {
    dispatch({
      type: "DECREASE_CART",
      payload: item,
    });
  };

  return (
    <>
      <div className="flex items-center justify-center gap-2 shadow-xl p-8 w-[600px] rounded-[15px] ">
        <img
          className="w-[14rem] h-[14rem] rounded-lg"
          src={`src/assets/food-imgs/${item.img}}`}
          alt=""
        />
        <span className="flex flex-col items-center justify-center gap-2">
          <h2 className="text-2xl font-bold mt-4">{item.title}</h2>
          <p className="text-[#878794] font-normal text-center">
            {item.description}
          </p>
          <h3 className="text-[18px] font-medium">${item.price}</h3>
          <button
            className="mt-2 py-[10px] px-6 rounded-full bg-[#ff0000] text-white text-sm font-medium hover:border border-[#FF9800] hover:bg-white hover:text-black opacity-90 cursor-pointer transition duration-500 ease-in-out"
            onClick={() => handleRemoveCart(item.id)}
          >
            Remove Item
          </button>
          i
          <div className="flex items-center justify-center gap-5 mt-2">
            <button
              className="border border-[#FF9800] py-0 px-5 text-[18px] rounded-md"
              onClick={handleClickDec}
            >
              −
            </button>
            <span className="text-[17px] font-medium">Qty : {item.qty}</span>
            <button
              className="border border-[#FF9800] py-0 px-5 text-[18px] rounded-md"
              onClick={handleClickInc}
            >
              +
            </button>
          </div>
        </span>
      </div>
    </>
  );
};

export default CartItem;
