import React, { useState } from "react";
import Banner from "./Banner";

const Contacts = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    mobile: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validateMobile = (mobile) => {
    const re = /^[0-9]{10,15}$/;
    return re.test(mobile);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      fullName: "",
      email: "",
      mobile: "",
    };

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
      isValid = false;
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
      isValid = false;
    }

    if (!formData.mobile) {
      newErrors.mobile = "Mobile number is required";
      isValid = false;
    } else if (!validateMobile(formData.mobile)) {
      newErrors.mobile = "Please enter a valid mobile number";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsLoading(true);

      // Simulate API call
      try {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitted(true);
        setFormData({
          fullName: "",
          email: "",
          mobile: "",
        });

        setTimeout(() => setIsSubmitted(false), 3000);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-4 sm:p-6 lg:p-8 dark:bg-slate-900 dark:text-white ">
      <div
        className={`bg-white rounded-xl shadow-xl w-full max-w-md mx-auto p-6 sm:p-8 animate-fade-in-up dark:bg-slate-900 dark:text-white`}
      >
        <div className="text-center mb-6 sm:mb-8 ">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1 sm:mb-2 dark:bg-slate-900 dark:text-white">
            Contact Us
          </h1>
          <p className="text-sm sm:text-base text-gray-600  dark:bg-slate-900 dark:text-white">
            Fill out the form below to get in touch
          </p>
        </div>

        <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
          <div className={`relative ${errors.fullName ? "mb-1" : ""}`}>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className={`w-full px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border 
                ${errors.fullName ? "border-red-500" : "border-gray-300"} 
                focus:outline-none focus:ring-2 focus:ring-blue-500 peer transition-all duration-200 dark:bg-slate-900 dark:text-white`}
              placeholder=" "
              value={formData.fullName}
              onChange={handleChange}
            />
            <label
              htmlFor="fullName"
              className={`absolute left-3 px-1 text-sm ${
                errors.fullName ? "text-red-500" : "text-gray-500"
              } 
                bg-white transition-all duration-200 pointer-events-none 
                peer-focus:text-blue-600 peer-focus:-top-2.5 peer-focus:text-xs 
                ${
                  formData.fullName ? "-top-2.5 text-xs" : "top-2.5"
                } dark:bg-slate-900 dark:text-white`}
            >
              Full Name
            </label>
            {errors.fullName && (
              <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
            )}
          </div>

          <div className={`relative ${errors.email ? "mb-1" : ""}`}>
            <input
              type="text"
              id="email"
              name="email"
              className={`w-full px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border 
                ${errors.email ? "border-red-500" : "border-gray-300"} 
                focus:outline-none focus:ring-2 focus:ring-blue-500 peer transition-all duration-200 dark:bg-slate-900 dark:text-white`}
              placeholder=" "
              value={formData.email}
              onChange={handleChange}
            />
            <label
              htmlFor="email"
              className={`absolute left-3 px-1 text-sm ${
                errors.email ? "text-red-500" : "text-gray-500"
              } 
                bg-white transition-all duration-200 pointer-events-none 
                peer-focus:text-blue-600 peer-focus:-top-2.5 peer-focus:text-xs 
                ${
                  formData.email ? "-top-2.5 text-xs" : "top-2.5"
                } dark:bg-slate-900 dark:text-white`}
            >
              Email
            </label>
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          <div className={`relative ${errors.mobile ? "mb-1" : ""}`}>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              className={`w-full px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border 
                ${errors.mobile ? "border-red-500" : "border-gray-300"} 
                focus:outline-none focus:ring-2 focus:ring-blue-500 peer transition-all duration-200 dark:bg-slate-900 dark:text-white`}
              placeholder=" "
              value={formData.mobile}
              onChange={handleChange}
            />
            <label
              htmlFor="mobile"
              className={`absolute left-3 px-1 text-sm ${
                errors.mobile ? "text-red-500" : "text-gray-500"
              } 
                bg-white transition-all duration-200 pointer-events-none 
                peer-focus:text-blue-600 peer-focus:-top-2.5 peer-focus:text-xs 
                ${
                  formData.mobile ? "-top-2.5 text-xs" : "top-2.5"
                } dark:bg-slate-900 dark:text-white`}
            >
              Mobile Number
            </label>
            {errors.mobile && (
              <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
            )}
          </div>

          <button
            type="submit"
            className={`w-full py-2.5 sm:py-3 px-4 rounded-lg font-medium sm:font-semibold text-sm sm:text-base 
              text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 
              focus:ring-blue-500 relative overflow-hidden 
              ${
                isLoading
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 active:scale-[0.98]"
              }`}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center justify-center space-x-1.5">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Processing...</span>
              </div>
            ) : (
              "Submit"
            )}
          </button>
        </form>

        {/* Success notification (positioned appropriately for mobile) */}
        {isSubmitted && (
          <div
            className={`fixed bottom-4 sm:bottom-auto sm:top-5 left-1/2 transform -translate-x-1/2 sm:left-auto sm:right-5 sm:translate-x-0
            bg-green-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow-lg text-sm sm:text-base
            transition-all duration-300  z-50 ${
              isSubmitted
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <p className="">Form submitted successfully!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contacts;
