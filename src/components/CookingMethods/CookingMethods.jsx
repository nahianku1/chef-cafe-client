import React from "react";
import { FaCheck } from "react-icons/fa";

function CookingMethods({ methods }) {
  return (
    <>
      <h1 className="font-bold text-2xl text-white mb-3">Cooking Methods:</h1>

      {methods.map((val) => (
        <React.Fragment key={crypto.randomUUID()}>
          <div className="flex text-white gap-[5px] items-start  justify-center">
            <FaCheck className="" />
            <p className="w-[110px] md:w-[300px]  text-[15px]">{val}</p>
          </div>
        </React.Fragment>
      ))}
    </>
  );
}

export default CookingMethods;
