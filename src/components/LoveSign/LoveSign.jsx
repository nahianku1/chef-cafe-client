import React from "react";
import { FaHeart } from "react-icons/fa";

function LoveSign({ count }) {
  console.log(count);
  return (
    <>
      <div className="relative left-4 -top-[7px]">
        <div className="absolute right-0">
          <FaHeart className="absolute right-0 text-red-600 text-[25px]" />
          <span className="absolute text-white -left-[18px]">
            {count}
          </span>
        </div>
      </div>
    </>
  );
}

export default LoveSign;
