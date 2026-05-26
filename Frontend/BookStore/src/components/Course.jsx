import React from "react";
import axios from "axios";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get(
          "https://bookstoreapp-snjb.onrender.com/book",
        );
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log("Error", error);
      }
    };
    getBook();
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-32 items-center justify-center text-center dark:bg-slate-900 dark:text-white">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Here! :</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam nemo
            in qui repellat quas non earum? Fugiat est assumenda dolores. Soluta
            quae dolor dolorum vitae aut repudiandae autem adipisci dolorem.
          </p>
          <Link to={"/"}>
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>

        {/* ✅ Responsive grid fix */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {book.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
