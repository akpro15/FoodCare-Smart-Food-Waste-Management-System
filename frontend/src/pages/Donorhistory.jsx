import { useEffect, useState } from "react";

import axios from "axios";

function DonorHistory() {

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
          food.deliveryStatus === "Delivered"

      );

      setFoods(donorFoods);

    } catch (error) {

      console.log(error);
    }
  };

  return (

    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 p-10">

      <h1 className="text-5xl font-extrabold text-green-700">

        Donor History

      </h1>

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

              <div className="mt-4 space-y-2">

                <p>
                  Quantity: {food.quantity}
                </p>

                <p>
                  NGO: {food.acceptedBy}
                </p>

                <p>
                  Rider: {food.assignedRider}
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
  );
}

export default DonorHistory;