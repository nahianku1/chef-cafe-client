import React from "react";
import useSWR from "swr";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { RotatingLines } from "react-loader-spinner";

let popularReccipes = async () => {
  let res = await fetch(`https://chef-cafe-server.vercel.app/popular`);
  let data = await res.json();
  return data;
};

const MostPopularRecipes = () => {
  let { data: recipeData } = useSWR("popural-recipes", popularReccipes);
  console.log(recipeData);
  if (!recipeData)
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
    <div className="w-[100%] ">
      <h2 className="text-3xl dark:text-white text-center font-pacifico font-bold my-20">
        Most Popular Recipes
      </h2>
      <div className="grid px-[30px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipeData.map((recipe) => (
          <div
            key={crypto.randomUUID()}
            className="group bg-white relative shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <LazyLoadImage
              src={recipe?.recipe_pic}
              alt={recipe?.recipe_name}
              className="h-[400px] w-full group-hover:scale-105 duration-300 object-cover object-center"
            />
            <div className="absolute  rounded-lg flex items-center justify-center inset-5  group-hover:scale-100 scale-0 duration-300 bg-[rgba(165,241,121,0.6)]">
              <h3 className="font-bold font-pacifico text-xl mb-2">
                {recipe?.recipe_name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostPopularRecipes;
