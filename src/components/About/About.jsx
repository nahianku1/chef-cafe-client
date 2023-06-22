import React from "react";

const About = () => {
  return (
    <div className="min-h-screen dark:bg-slate-800  bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-black dark:text-white font-semibold tracking-wide uppercase">
            About Us
          </h2>
          <p className="mt-2 dark:text-white  text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Our Story
          </p>
        </div>
        <div className="mt-10">
          <p className="text-xl dark:text-white  text-gray-500">
            We are a team of passionate food lovers who want to share our
            favorite recipes with the world. Our goal is to make cooking easy
            and enjoyable for everyone, whether you're a seasoned pro or a
            beginner in the kitchen. We believe that food is not just fuel, but
            a way to connect with others and create memorable experiences.
          </p>
        </div>
        <div className="mt-10">
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <li className="col-span-1 flex flex-col text-center dark:bg-slate-700 bg-white rounded-lg shadow divide-y divide-gray-200">
              <div className="flex-1 flex flex-col p-8">
                <h3 className="mt-6 dark:text-white  text-gray-900 text-xl font-bold">
                  Our Mission
                </h3>
                <p className="mt-4 dark:text-white  text-gray-500 text-lg">
                  To inspire and empower people to cook delicious and healthy
                  meals at home, and to build a community of food lovers who
                  share their passion for great food.
                </p>
              </div>
            </li>
            <li className="col-span-1 flex flex-col text-center dark:bg-slate-700 bg-white rounded-lg shadow divide-y divide-gray-200">
              <div className="flex-1 flex flex-col p-8">
                <h3 className="mt-6 dark:text-white  text-gray-900 text-xl font-bold">
                  Our Values
                </h3>
                <p className="mt-4 dark:text-white  text-gray-500 text-lg">
                  We believe in using fresh, high-quality ingredients, sharing
                  our knowledge and expertise, and creating a positive and
                  inclusive environment for everyone who loves food.
                </p>
              </div>
            </li>
            <li className="col-span-1 flex flex-col text-center dark:bg-slate-700 bg-white rounded-lg shadow divide-y divide-gray-200">
              <div className="flex-1 flex flex-col p-8">
                <h3 className="mt-6 dark:text-white  text-gray-900 text-xl font-bold">
                  Our Team
                </h3>
                <p className="mt-4 dark:text-white  text-gray-500 text-lg">
                  Our team is made up of food enthusiasts from all over the
                  world, each with their own unique perspective and expertise.
                  We are united by our love of great food and our desire to
                  share that passion with others.
                </p>
              </div>
            </li>
            <li className="col-span-1 flex flex-col text-center dark:bg-slate-700 bg-white rounded-lg shadow divide-y divide-gray-200">
              <div className="flex-1 flex flex-col p-8">
                <h3 className="mt-6 dark:text-white  text-gray-900 text-xl font-bold">
                  Contact Us
                </h3>
                <p className="mt-4 dark:text-white  text-gray-500 text-lg">
                  If you have any questions, comments, or feedback, we would
                  love to hear from you. You can reach us at
                  contact@ourrecipewebsite.com or follow us on social media for
                  updates and inspiration. Thank you for visiting our website
                  and happy cooking!
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
