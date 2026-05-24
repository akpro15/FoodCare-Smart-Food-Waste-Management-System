import { useEffect, useState } from "react";

import axios from "axios";

function RiderDashboard() {

  const [foods, setFoods] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {

    fetchFoods();

  }, []);

  const fetchFoods = async () => {

    try {

      const response = await axios.get(
        "https://foodcare-backend.onrender.com/api/food/all"
      );

      // ONLY ACCEPTED FOODS

      const acceptedFoods = response.data.filter(
        (food) =>
          food.status === "Accepted" &&
          food.deliveryStatus !== "Delivered"

      );

      setFoods(acceptedFoods);

    } catch (error) {

      console.log(error);
    }
  };

  const deliverFood = async (id) => {

    try {

      const response = await axios.put(
        `https://foodcare-backend.onrender.com/api/food/deliver/${id}`,
        {
          riderName: user.name,
        }
      );

      alert(response.data.message);

      fetchFoods();

    } catch (error) {

      console.log(error);
    }
  };

  return (

    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 p-10">

      <h1 className="text-5xl font-extrabold bg-gradient-to-r from-green-700 to-emerald-500 bg-clip-text text-transparent">

        Rider Dashboard

      </h1>

      <p className="mt-4 text-xl text-gray-600">

        Welcome, {user.name}

      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-12">

        {
          foods.map((food) => (

            <div
              key={food._id}
              className="bg-white/80 backdrop-blur-xl p-6 rounded-[35px] shadow-2xl border border-white/30"
            >

              {
                food.image && (

                  <img
                    src={`https://foodcare-backend.onrender.com/uploads/${food.image}`}
                    alt="food"
                    className="w-full h-60 object-cover rounded-2xl mb-5"
                  />

                )
              }

              <h2 className="text-3xl font-bold text-green-700">

                {food.foodName}

              </h2>

              <div className="mt-5 space-y-2 text-lg">

                <p>
                  Pickup Location:
                  <span className="font-semibold text-gray-700">
                    {" "}
                    {food.location}
                  </span>
                </p>

                <p>
                  Donor:
                  <span className="font-semibold text-gray-700">
                    {" "}
                    {food.donorName}
                  </span>
                </p>

                <p>
                  Assigned NGO:
                  <span className="font-bold text-green-700">
                    {" "}
                    {food.acceptedBy}
                  </span>
                </p>

                <p>
                  Rider:
                  <span className="font-bold text-blue-700">
                    {" "}
                    {food.assignedRider || "Pending"}
                  </span>
                </p>

                <p>
                  Delivery Status:
                  <span className="font-bold text-purple-700">
                    {" "}
                    {food.deliveryStatus}
                  </span>
                </p>

              </div>

              {
                food.deliveryStatus !== "Delivered" && (

                  <button
                    onClick={() => deliverFood(food._id)}
                    className="mt-6 w-full bg-gradient-to-r from-green-600 to-emerald-500 text-white px-6 py-4 rounded-2xl shadow-xl hover:scale-105 transition duration-300"
                  >
                    Mark Delivered
                  </button>

                )
              }

            </div>

          ))
        }

      </div>

    </div>
  );
}

export default RiderDashboard;