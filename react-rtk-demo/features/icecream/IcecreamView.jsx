import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";

export const IcecreamView = () => {
  const [restockValue, setRestockValue] = useState(1);
  const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of ice creams - {numOfIcecreams}</h2>
      <button onClick={() => dispatch(ordered())}>Order ice cream</button>
      <input
        type="number"
        value={restockValue}
        onChange={(e) => setRestockValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(restockValue))}>
        Restock ice cream
      </button>
    </div>
  );
};
