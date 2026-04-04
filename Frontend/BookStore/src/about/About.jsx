import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Abouts from "../components/Abouts";

function About() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen dark:bg-slate-900 dark:text-white">
        <Abouts />
      </div>
      <Footer />
    </>
  );
}

export default About;
