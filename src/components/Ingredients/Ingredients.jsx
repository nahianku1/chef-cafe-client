import React from "react";
import { FaCheck } from "react-icons/fa";

function Ingredients({ ingredients }) {
  return (
    <>
      <h1 className="font-bold text-2xl text-white mb-3">Ingredients:</h1>
      {ingredients.map((val) => (
        <React.Fragment key={crypto.randomUUID()}>
          <div className="flex text-white gap-[5px] items-start justify-start">
            <FaCheck className="" />
            <p className="text-[15px]">{val}</p>
          </div>
        </React.Fragment>
      ))}
    </>
  );
}

export default Ingredients;
