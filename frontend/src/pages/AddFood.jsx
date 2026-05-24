import { useState } from "react";

import axios from "axios";

function AddFood() {

  const [formData, setFormData] = useState({
    foodName: "",
    quantity: "",
    category: "",
    location: "",
    donorName: "",
    image: null,
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const user = JSON.parse(localStorage.getItem("user"));

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const data = new FormData();

      data.append("foodName", formData.foodName);

      data.append("quantity", formData.quantity);

      data.append("category", formData.category);

      data.append("location", formData.location);

      data.append("donorName", formData.donorName);

      data.append("donorEmail", user.email);

      data.append("image", formData.image);

      const response = await axios.post(
        "https://foodcare-backend.onrender.com/api/food/add",
        data
      );

      alert(response.data.message);

      window.location.href = "/dashboard";

    } catch (error) {

      console.log(error);

      alert("Failed to Add Food");
    }
  };

  return (

    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 flex justify-center items-center p-10">

      <div className="bg-white/80 backdrop-blur-xl p-10 rounded-[35px] shadow-2xl w-full max-w-lg border border-white/30">

        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-green-700 to-emerald-500 bg-clip-text text-transparent mb-8 text-center">

          Donate Food

        </h1>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="foodName"
            placeholder="Food Name"
            onChange={handleChange}
            className="w-full border border-gray-200 p-4 rounded-2xl mb-5 outline-none focus:ring-2 focus:ring-green-400"
          />

          <input
            type="text"
            name="quantity"
            placeholder="Quantity"
            onChange={handleChange}
            className="w-full border border-gray-200 p-4 rounded-2xl mb-5 outline-none focus:ring-2 focus:ring-green-400"
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            onChange={handleChange}
            className="w-full border border-gray-200 p-4 rounded-2xl mb-5 outline-none focus:ring-2 focus:ring-green-400"
          />

          <input
            type="text"
            name="location"
            placeholder="Pickup Location"
            onChange={handleChange}
            className="w-full border border-gray-200 p-4 rounded-2xl mb-5 outline-none focus:ring-2 focus:ring-green-400"
          />

          <input
            type="text"
            name="donorName"
            placeholder="Donor Name"
            onChange={handleChange}
            className="w-full border border-gray-200 p-4 rounded-2xl mb-5 outline-none focus:ring-2 focus:ring-green-400"
          />

          <input
            type="file"
            name="image"
            onChange={(e) =>
              setFormData({
                ...formData,
                image: e.target.files[0],
              })
            }
            className="w-full border border-gray-200 p-4 rounded-2xl mb-6 bg-white"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-600 to-emerald-500 text-white py-4 rounded-2xl font-bold shadow-xl hover:scale-105 transition duration-300"
          >
            Submit Donation
          </button>

        </form>

      </div>

    </div>
  );
}

export default AddFood;