import { useState } from "react";

import axios from "axios";

function Login() {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(
        "http://localhost:5000/api/users/login",
        formData
      );

      alert(response.data.message);

      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      // ROLE BASED REDIRECT

      if (

        formData.email === "admin@gmail.com" &&
        formData.password === "admin123"

      ) {

        window.location.href = "/admin-dashboard";

      } else if (response.data.user.role === "donor") {

        window.location.href = "/dashboard";

      } else if (response.data.user.role === "ngo") {

        window.location.href = "/ngo-dashboard";

      } else if (response.data.user.role === "rider") {

        window.location.href = "/rider-dashboard";
      }

    } catch (error) {

      console.log(error);

      alert("Login Failed");
    }
  };

  return (

    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-200 flex justify-center items-center p-10">

      <div className="bg-white/70 backdrop-blur-xl p-10 rounded-[35px] shadow-2xl w-full max-w-md border border-white/30">

        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-green-700 to-emerald-500 bg-clip-text text-transparent text-center">

          Welcome Back

        </h1>

        <p className="text-center text-gray-600 mt-4 text-lg">

          Login to continue your journey

        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10"
        >

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            onChange={handleChange}
            className="w-full border border-gray-200 p-4 rounded-2xl mb-5 outline-none focus:ring-2 focus:ring-green-400"
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={handleChange}
            className="w-full border border-gray-200 p-4 rounded-2xl mb-6 outline-none focus:ring-2 focus:ring-green-400"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-600 to-emerald-500 text-white py-4 rounded-2xl font-bold shadow-xl hover:scale-105 transition duration-300"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;