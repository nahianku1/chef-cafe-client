import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoHeart, IoFastFood, IoShieldCheckmark } from "react-icons/io5";
import MostPopularRecipes from "../MostPopularRecipes/MostPopularRecipes";
import Testimonial from "../Testimonial/Testimonial";
import { LazyLoadImage } from "react-lazy-load-image-component";

function RecipeDetails({ chefdetails }) {
  return (
    <>
      <div className="flex dark:bg-slate-800 flex-col justify-center items-center my-[90px] lg:mx-[120px]  min-w-[310px]">
        <div>
          <h1 className="text-3xl dark:text-white font-pacifico font-bold text-center">
            Popular Chefs
          </h1>
          <p className="text-[15px] dark:text-white text-center mx-[20px] tracking-wider mt-[13px]">
            Explore varieties of Chef's Recipes with all the information you
            need. Your taste begin here.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3  justify-center items-center  gap-[20px] mt-[20px]">
          {chefdetails.map((chef) => (
            <div
              key={chef.id}
              className=" w-[330px]  md:w-full dark:bg-slate-700  bg-white border border-solid dark:border-gray-700 dark:text-white border-gray-200 h-[500px] rounded-md flex flex-col justify-center items-center py-[35px] px-[90px]"
            >
              <LazyLoadImage
                src={chef.chef_picture}
                alt=""
                className="w-[150px] h-[400px] object-cover object-center"
              />
              <h4 className="mt-[20px] w-[140px] text-center font-bold text-[13px] bg-lime-400 px-[15px] py-[10px] text-black rounded-full">
                {chef.chef_name}
              </h4>

              <div className="flex flex-col gap-1  items-start mt-3">
                <div className="flex gap-2 items-center justify-center">
                  <IoHeart className="text-lime-400" />{" "}
                  <span>Likes: {chef.likes}</span>
                </div>
                <div className="flex gap-2 items-center justify-center">
                  <IoFastFood className="text-lime-400" />{" "}
                  <span>Recipes: {chef.num_recipes}</span>
                </div>
                <div className="flex gap-2 items-center justify-center">
                  <IoShieldCheckmark className="text-lime-400" />{" "}
                  <span>Experience: {chef.years_experience} years</span>
                </div>
              </div>

              <Link
                className="no-underline text-white"
                to={`chef-details/${chef.id}`}
              >
                <button className="mt-[20px]  min-w-max bg-lime-400 px-4 py-3 font-bold text-black border-none cursor-pointer rounded-sm">
                  View Recipe
                </button>
              </Link>
            </div>
          ))}
        </div>
        <MostPopularRecipes />
        <Testimonial />
      </div>
    </>
  );
}

export default RecipeDetails;
