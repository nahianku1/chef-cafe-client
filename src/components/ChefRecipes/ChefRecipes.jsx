import { IoFastFood, IoHeart,IoShieldCheckmark } from "react-icons/io5";
import { useParams } from "react-router-dom";
import useSWR from "swr";

import SingleRecipe from "../SingleRecipe/SingleRecipe";
import { RotatingLines } from "react-loader-spinner";
import { useState } from "react";
import { useContext } from "react";
import { FavContext } from "../../App";

function ChefRecipes() {
  let { id } = useParams();
  let {favstate,setFavstate} = useContext(FavContext)
  let SingleRecipeDetails = async () => {
    let res = await fetch(`https://chef-cafe-server.vercel.app/chef-details/${id}`);
    let data = await res.json();
    return data;
  };

  let { data: singledetails } = useSWR("single-recipe", SingleRecipeDetails);
  console.log(singledetails);
  if (!singledetails)
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-45px)]">
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="200"
          visible={true}
        />
      </div>
    );

  return (
    <>
      <div className="bg-[url('/images/background.jpg')] h-auto md:h-[400px] bg-cover bg-center ">
        <div className=" flex gap-[40px] h-[100%] flex-wrap md:flex-nowrap items-center justify-center pb-[60px] md:pb-[0] bg-gradient-to-r dark:from-slate-700 from-lime-400 to-gray-transparent">
          <div className="p-[30px] self-center md:w-[50%] dark:text-white  text-black font-bold text-2xl ">
            <h1>{singledetails.chef_name}</h1>
            <h1 className="text-[14px] leading-5">{singledetails.short_bio}</h1>
            <div className="flex flex-col  text-[18px] items-start mt-3">
              <div className="flex gap-2 items-center justify-center">
                <IoHeart className="text-black dark:text-white " />{" "}
                <span>Likes: {singledetails.likes}</span>
              </div>
              <div className="flex gap-2 items-center justify-center">
                <IoFastFood className="text-black dark:text-white " />{" "}
                <span>Recipes: {singledetails.num_recipes}</span>
              </div>
              <div className="flex gap-2 items-center justify-center">
                <IoShieldCheckmark className="text-black dark:text-white " />{" "}
                <span>Experience: {singledetails.years_experience} years</span>
              </div>
            </div>
          </div>
          <div className="md:w-[50%] flex justify-center items-center">
            <img src={singledetails.chef_picture} width="260" alt="" />
          </div>
        </div>
      </div>
      <div className="px-[30px] py-[30px] justify-center items-center flex flex-wrap gap-4">
        <SingleRecipe favstate={favstate} setFavstate={setFavstate} chefname={singledetails.chef_name} recipedetails={singledetails.recipe} />
      </div>
    </>
  );
}

export default ChefRecipes;
