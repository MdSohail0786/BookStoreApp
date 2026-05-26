import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Login from "./Login";
import axios from "axios";
import toast from "react-hot-toast";
function Signup() {
  //
  const handleSignup = () => {
    // Logic for handling signup
    console.log("Signup button clicked");
    // You can add your signup logic here
  };

  ///
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      fullName: data.fullName,
      email: data.email,
      password: data.password,
    };

    await axios
      .post("https://bookstoreapp-snjb.onrender.com/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);

        if (res.data) {
          toast.success("Signup Successfull");
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((error) => {
        if (error.response) {
          console.log(error);

          toast.error("signup errror" + error.response.data.message);
        }
      });
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div id="mymodal" className=" border-[2px] px-4 py-8 rounded-xl  ">
          <div className="dialog">
            <form onSubmit={handleSubmit(onSubmit)} method="modal-box">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to={"/"}
                className="btn btn-sm btn-circle btn-ghost  right-40 top-15 "
              >
                ✕
              </Link>
              <h3 className="font-bold text-lg">Signup</h3>

              {/* Name */}
              <div className="mt-5 space-y-3">
                <span>Name</span>
                <br />
                <input
                  type="
          text"
                  placeholder="Enter your Full Name"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("fullName", { required: true })}
                />
                <br />
                {errors.fullName && (
                  <span className=" text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* email part*/}
              <div className="mt-5 space-y-3">
                <span>Email</span>
                <br />
                <input
                  type="
          email"
                  placeholder="Enter your emial"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* Password part*/}
              <div className="mt-5 space-y-3">
                <span>Password</span>
                <br />
                <input
                  type="
          password"
                  placeholder="Enter your password"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("password", { required: true })}
                />
                <br />
                {errors.PasswordRequired && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="flex justify-around mt-5 ">
                <button
                  className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200  "
                  onClick={handleSignup}
                >
                  {" "}
                  Signup{" "}
                </button>
                <p className="text-sm">
                  {" "}
                  Have account?{" "}
                  <button
                    //to={"/"}
                    className="underline text-blue-500 cursor-pointer textarea-md"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </button>
                </p>
                <Login />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
