import { useEffect, useState } from "react";

import axios from "axios";

function AdminDashboard() {

  const [foods, setFoods] = useState([]);

  useEffect(() => {

    fetchFoods();

  }, []);

  const fetchFoods = async () => {

    try {

      const response = await axios.get(
        "https://foodcare-backend.onrender.com/api/food/all"
      );

      setFoods(response.data);

    } catch (error) {

      console.log(error);
    }
  };

  const totalDonations = foods.length;

  const pendingFoods = foods.filter(
    (food) => food.status === "Pending"
  ).length;

  const deliveredFoods = foods.filter(
    (food) => food.deliveryStatus === "Delivered"
  ).length;

  return (

    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 p-10">

      <h1 className="text-6xl font-extrabold bg-gradient-to-r from-green-700 to-emerald-500 bg-clip-text text-transparent">

        Admin Dashboard

      </h1>

      <p className="mt-4 text-xl text-gray-600">

        Monitor Entire FoodCare System

      </p>

      {/* STATS */}

      <div className="grid md:grid-cols-3 gap-8 mt-14">

        <div className="bg-white p-8 rounded-3xl shadow-2xl">

          <h2 className="text-5xl font-bold text-green-700">

            {totalDonations}

          </h2>

          <p className="mt-4 text-gray-600 text-xl">

            Total Donations

          </p>

        </div>

        <div className="bg-white p-8 rounded-3xl shadow-2xl">

          <h2 className="text-5xl font-bold text-yellow-600">

            {pendingFoods}

          </h2>

          <p className="mt-4 text-gray-600 text-xl">

            Pending Donations

          </p>

        </div>

        <div className="bg-white p-8 rounded-3xl shadow-2xl">

          <h2 className="text-5xl font-bold text-purple-700">

            {deliveredFoods}

          </h2>

          <p className="mt-4 text-gray-600 text-xl">

            Delivered Orders

          </p>

        </div>

      </div>

      {/* ALL ORDERS */}

      <div className="mt-20">

        <h2 className="text-4xl font-bold text-green-700">

          All Donations

        </h2>

        <div className="grid md:grid-cols-2 gap-8 mt-10">

          {
            foods.map((food) => (

              <div
                key={food._id}
                className="bg-white p-6 rounded-3xl shadow-xl"
              >

                <h2 className="text-3xl font-bold text-green-700">

                  {food.foodName}

                </h2>

                <div className="mt-5 space-y-2">

                  <p>
                    Donor: {food.donorName}
                  </p>

                  <p>
                    NGO: {food.acceptedBy || "Pending"}
                  </p>

                  <p>
                    Rider: {food.assignedRider || "Pending"}
                  </p>

                  <p>
                    Status: {food.deliveryStatus}
                  </p>

                </div>

              </div>

            ))
          }

        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;