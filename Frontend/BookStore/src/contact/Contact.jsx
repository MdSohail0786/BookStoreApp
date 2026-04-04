import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contacts from "../components/Contacts";

function Contact() {
  return (
    <>
      <Navbar />
      <div className="h-screen dark:bg-slate-900 dark:text-white">
        <Contacts />
      </div>
      <Footer />
    </>
  );
}

export default Contact;
