import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import { FavContext } from "../../App";

function FavoriteRecipes() {
  let liked = localStorage.getItem("loved");
  let favorite = localStorage.getItem("favorite");
  let favitems = JSON.parse(liked);
  let favoritesitem = JSON.parse(favorite);
  let [deleted, setDeleted] = useState(false);
  let { setFavstate } = useContext(FavContext);
  console.log(favitems);
  let handleDelete = (id) => {
    let index = favitems.findIndex((item) => id === item.id);
    favitems.splice(index, 1);
    console.log(favitems);
    localStorage.removeItem("loved");
    localStorage.setItem("loved", JSON.stringify(favitems));

    let index2 = favoritesitem.findIndex((item) => id === item);
    favoritesitem.splice(index2, 1);
    console.log(favoritesitem);
    localStorage.removeItem("favorite");
    localStorage.setItem("favorite", JSON.stringify(favoritesitem));
    setDeleted(!deleted);
    setFavstate(favoritesitem?.length);
  };
  if (!liked || favitems.length === 0)
    return (
      <div className="min-h-screen dark:text-white flex items-center justify-center text-3xl font-bold">
        No Item Found!
      </div>
    );
  return (
    <div className="w-[320px]  mt-[60px] md:w-[1000px] min-h-screen mx-auto">
      <h1 className="text-3xl dark:text-white font-bold mb-8">
        Favorite Items
      </h1>
      <table className="w-[320px] md:w-[1000px]">
        <thead className="bg-lime-300">
          <tr>
            <th className="px-[15px] py-[7px] text-center border">
              Recipe Pic
            </th>
            <th className="px-[15px] py-[7px] text-center border">
              Recipe Name
            </th>
            <th className="px-[15px] py-[7px] text-center border">Chef Name</th>
            <th className="px-[15px] py-[7px] text-center border">Action</th>
          </tr>
        </thead>
        <tbody>
          {favitems.map((item) => (
            <tr key={crypto.randomUUID()}>
              <td className="px-[15px] py-[7px] text-center border flex justify-center items-start">
                <img
                  className="w-[60px] h-[60px] rounded-full object-cover object-center"
                  src={item?.recipepic}
                  alt=""
                />
              </td>
              <td className="px-[15px] dark:text-white py-[7px] text-center border">
                {item?.recipename}
              </td>
              <td className="px-[15px] dark:text-white py-[7px] text-center border">
                {item?.chefname}
              </td>
              <td className="px-[15px] py-[7px] text-center border">
                <button
                  onClick={() => {
                    handleDelete(item.id);
                  }}
                >
                  <FaTrash className="text-lime-500 text-[30px]" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FavoriteRecipes;
