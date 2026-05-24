import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {

  const [foods, setFoods] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {

    fetchFoods();

  }, []);

  const fetchFoods = async () => {

    try {

      const response = await axios.get(
        "http://localhost:5000/api/food/all"
      );

      const donorFoods = response.data.filter(
         (food) =>
          food.donorEmail === user.email &&
          food.deliveryStatus !== "Delivered"
      );

      setFoods(donorFoods);

    } catch (error) {

      console.log(error);
    }
  };

  return (

    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-5xl font-bold text-green-700">

        Donor Dashboard

      </h1>

      <p className="mt-4 text-xl text-gray-600">

        Welcome, {user.name}

      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-12">

        {
          foods.map((food) => (

            <div
              key={food._id}
              className="bg-white p-6 rounded-3xl shadow-xl"
            >

              <h2 className="text-3xl font-bold text-green-700">

                {food.foodName}

              </h2>

              <p className="mt-3">
                Quantity: {food.quantity}
              </p>

              <p>
                Location: {food.location}
              </p>

              <p>
                NGO Status: {food.status}
              </p>

              <p>
                Accepted By: {food.acceptedBy || "Pending"}
              </p>

              <p>
                Rider: {food.assignedRider || "Not Assigned"}
              </p>

              <p>
                Delivery: {food.deliveryStatus}
              </p>

            </div>
          ))
        }

      </div>

    </div>
  );
}

export default Dashboard;