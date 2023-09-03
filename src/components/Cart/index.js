import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActionTypes } from "../../store/contants/ActionTypes";

const Cart = () => {
  const state = useSelector(
    (reducersStateObject) => reducersStateObject.trailReducer
  );
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Cart</h1>
      <div className="border border-warning p-3 m-3 rounded">
        <h1>{state.count}</h1>
        <button
          className="btn btn-info"
          onClick={() => dispatch({ type: ActionTypes.COUNT })}>
          Increment
        </button>
      </div>
    </div>
  );
};

export default Cart;
