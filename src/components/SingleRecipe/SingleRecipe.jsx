import React, { useEffect, useState } from "react";
import Ingredients from "../Ingredients/Ingredients";
import CookingMethods from "../CookingMethods/CookingMethods";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { FaHeart } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SingleRecipe({setFavstate, chefname, recipedetails }) {
  let initial = localStorage.getItem("favorite");
  let initialLoved = localStorage.getItem("loved");
  let [loved, setLoved] = useState(JSON.parse(initialLoved) ?? []);
  let [recipe, setRecipe] = useState(JSON.parse(initial) ?? []);
  useEffect(() => {
    console.log(recipe);
    localStorage.setItem("favorite", JSON.stringify(recipe));
    setFavstate(recipe)
  }, [recipe]);

  let addfavoritehandle = (id,recipename, recipepic) => {
    let fobj = {id, chefname, recipename, recipepic };
    setLoved((current) => [...current, fobj]);
  };

  useEffect(() => {
    console.log(loved);
    localStorage.setItem("loved", JSON.stringify(loved));
  }, [loved]);

  return (
    <>
      <ToastContainer />
      {recipedetails?.map((recipedetail) => (
        <React.Fragment key={crypto.randomUUID()}>
          <div
            key={crypto.randomUUID()}
            className="p-[20px] bg-lime-500 dark:bg-slate-700 rounded-lg w-[320px] h-auto md:h-[600px] md:w-auto"
          >
            <h1 className="px-[20px] text-center py-[8px]  bg-white rounded-xl">
              {recipedetail?.recipe_name}
            </h1>
            <hr className="mt-[20px] h-[8px]" />
            <div className="flex gap-7 md:gap-10 h-auto md:h-[440px]">
              <div>
                <Ingredients ingredients={recipedetail?.ingredients} />
              </div>
              <div className="">
                <CookingMethods methods={recipedetail?.cooking_method} />
              </div>
            </div>
            <hr className="mt-[20px] " />
            <div className="flex justify-between items-center mt-[10px]">
              <Rating
                style={{ maxWidth: 150 }}
                value={recipedetail?.rating}
                readOnly
              />

              <button
                onClick={() => {
                  if (recipe.includes(recipedetail?.id)) {
                    toast("Already Added to favorite list!");
                    return;
                  }
                  setRecipe((current) => [...current, recipedetail?.id]);
                  addfavoritehandle(
                    recipedetail.id,
                    recipedetail.recipe_name,
                    recipedetail.recipe_pic
                  );
                  toast("Added to favorite list");
                  console.log("Clicked");
                }}
              >
                <FaHeart
                  className={
                    recipe.includes(recipedetail?.id)
                      ? "text-[30px] cursor-pointer   text-gray-300 font-bold"
                      : "text-[30px] cursor-pointer   text-white font-bold"
                  }
                />
              </button>
            </div>
          </div>
        </React.Fragment>
      ))}
    </>
  );
}

export default SingleRecipe;
