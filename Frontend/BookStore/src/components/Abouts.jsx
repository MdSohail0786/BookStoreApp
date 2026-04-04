import React from "react";
import { Link } from "react-router-dom";
const Abouts = () => {
  return (
    <section className=" max-w-8xl  dark:bg-slate-900 dark:text-white py-12 sm:py-16 lg:py-20 ">
      <div className="max-w-8xl  mx-auto px-4 sm:px-6 lg:px-8 dark:bg-slate-900 dark:text-white">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 dark:bg-slate-900 dark:text-white">
            Discover Your Next{" "}
            <span className="text-blue-600">Favorite Book</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-xl text-gray-600 max-w-3xl mx-auto dark:bg-slate-900 dark:text-white">
            We're passionate about connecting readers with books they'll love.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center dark:bg-slate-900 dark:text-white">
          {/* Image Section */}
          <div className="relative overflow-hidden rounded-xl shadow-2xl transform hover:scale-[1.01] transition-transform duration-500 dark:bg-slate-900 dark:text-white">
            <div className="aspect-w-16 aspect-h-9 w-full h-full dark:bg-slate-900 dark:text-white">
              {/* <img
                src="https://placehold.co/800x600/f8fafc/1e40af"
                alt="Cozy bookstore interior with wooden shelves full of books and comfortable reading chairs near a large window"
                className="w-full h-full object-cover"
              /> */}
              <img
                src="https://jelvix.com/wp-content/uploads/2017/10/105_1_x1.jpg"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent "></div>
            <div className="absolute bottom-6 left-6 right-6 ">
              <p className="text-white text-lg sm:text-xl font-medium ">
                "A reader lives a thousand lives before he dies..." - George
                R.R. Martin
              </p>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6 dark:bg-slate-900 dark:text-white">
            <div className="flex items-start dark:bg-slate-900 dark:text-white">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mr-4 ">
                <svg
                  className="h-6 w-6 text-blue-600 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2 dark:bg-slate-900 dark:text-white">
                  Curated Selection
                </h3>
                <p className="text-gray-600 dark:bg-slate-900 dark:text-white">
                  Our expert team handpicks each title in our collection to
                  ensure quality and diversity across all genres.
                </p>
              </div>
            </div>

            <div className="flex items-start dark:bg-slate-900 dark:text-white">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                <svg
                  className="h-6 w-6 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2 dark:bg-slate-900 dark:text-white">
                  Personalized Recommendations
                </h3>
                <p className="text-gray-600 dark:bg-slate-900 dark:text-white">
                  Tell us what you love to read and we'll suggest books
                  perfectly matched to your tastes.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                <svg
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2 dark:bg-slate-900 dark:text-white">
                  Fast & Free Delivery
                </h3>
                <p className="text-gray-600 dark:bg-slate-900 dark:text-white">
                  Enjoy lightning-fast shipping on all orders over $25 with our
                  premium membership.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to={"/course"}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
              >
                Explore Our Collection
                <svg
                  className="ml-2 -mr-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4 text-center">
          <div className="border rounded-xl py-6 px-4 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">
              10K+
            </h3>
            <p className="text-gray-600 font-medium dark:bg-slate-900 dark:text-white">
              Titles Available
            </p>
          </div>
          <div className="border rounded-xl py-6 px-4 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-3xl sm:text-4xl font-bold text-purple-600 mb-2">
              500+
            </h3>
            <p className="text-gray-600 font-medium dark:bg-slate-900 dark:text-white">
              Author Events
            </p>
          </div>
          <div className="border rounded-xl py-6 px-4 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-3xl sm:text-4xl font-bold text-green-600 mb-2">
              1M+
            </h3>
            <p className="text-gray-600 font-mediumdark:bg-slate-900 dark:text-white">
              Happy Readers
            </p>
          </div>
          <div className="border rounded-xl py-6 px-4 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-3xl sm:text-4xl font-bold text-yellow-600 mb-2">
              25+
            </h3>
            <p className="text-gray-600 font-medium dark:bg-slate-900 dark:text-white">
              Years Established
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Abouts;
