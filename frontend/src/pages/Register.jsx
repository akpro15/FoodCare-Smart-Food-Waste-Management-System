import { useState } from "react";

import axios from "axios";

function Register() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "donor",
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
        "http://localhost:5000/api/users/register",
        formData
      );

      alert(response.data.message);

      window.location.href = "/login";

    } catch (error) {

      console.log(error);

      alert("Registration Failed");
    }
  };

  return (

    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-200 flex justify-center items-center p-10">

      <div className="bg-white/70 backdrop-blur-xl p-10 rounded-[35px] shadow-2xl w-full max-w-md border border-white/30">

        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-green-700 to-emerald-500 bg-clip-text text-transparent text-center">

          Create Account

        </h1>

        <p className="text-center text-gray-600 mt-4 text-lg">

          Join the FoodCare Network

        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10"
        >

          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            onChange={handleChange}
            className="w-full border border-gray-200 p-4 rounded-2xl mb-5 outline-none focus:ring-2 focus:ring-green-400"
          />

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
            className="w-full border border-gray-200 p-4 rounded-2xl mb-5 outline-none focus:ring-2 focus:ring-green-400"
          />

          <select
            name="role"
            onChange={handleChange}
            className="w-full border border-gray-200 p-4 rounded-2xl mb-6 outline-none focus:ring-2 focus:ring-green-400 bg-white"
          >

            <option value="donor">
              Donor
            </option>

            <option value="ngo">
              NGO
            </option>

            <option value="rider">
              Rider
            </option>

          </select>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-600 to-emerald-500 text-white py-4 rounded-2xl font-bold shadow-xl hover:scale-105 transition duration-300"
          >
            Register
          </button>

        </form>

      </div>

    </div>
  );
}

export default Register;