import { useEffect, useState } from "react";
import axios from "axios";

function FoodList() {

  const [foods, setFoods] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchFoods();
  }, []);

  const fetchFoods = async () => {

    try {

      const response = await axios.get(
        "http://localhost:5000/api/food/all"
      );

      setFoods(response.data);

    } catch (error) {

      console.log(error);
    }
  };

  const acceptFood = async (id) => {

    try {

      const response = await axios.put(
        `http://localhost:5000/api/food/accept/${id}`
      );

      alert(response.data.message);

      fetchFoods();

    } catch (error) {

      console.log(error);
    }
  };

  const deleteFood = async (id) => {

    try {

      const response = await axios.delete(
        `http://localhost:5000/api/food/delete/${id}`
      );

      alert(response.data.message);

      fetchFoods();

    } catch (error) {

      console.log(error);
    }
  };

  const filteredFoods = foods.filter((food) =>
    food.foodName.toLowerCase().includes(search.toLowerCase()) ||
    food.location.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-4xl font-bold text-green-700 mb-6">
        Available Food
      </h1>

      <input
        type="text"
        placeholder="Search by food or location"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-3 rounded-lg w-80 mb-8"
      />

      {filteredFoods.map((food) => (

        <div
          key={food._id}
          className="bg-white p-6 rounded-3xl shadow-lg mb-8 hover:scale-105 transition duration-300"
        >

          {
            food.image && (

              <img
                src={`http://localhost:5000/uploads/${food.image}`}
                alt="food"
                className="w-full h-60 object-cover rounded-lg mb-4"
              />
            )
          }

          <h2 className="text-2xl font-bold text-green-700">
            {food.foodName}
          </h2>

          <p className="mt-2">
            <strong>Quantity:</strong> {food.quantity}
          </p>

          <p>
            <strong>Category:</strong> {food.category}
          </p>

          <p>
            <strong>Location:</strong> {food.location}
          </p>

          <p>
            <strong>Donor:</strong> {food.donorName}
          </p>

          <p>
            <strong>Status:</strong> {food.status}
          </p>

          <p>
            <strong>Delivery:</strong> {food.deliveryStatus}
          </p>

          <p>
            <strong>Assigned Rider:</strong> {food.assignedRider}
          </p>

          <div className="mt-4">

            <button
              onClick={() => acceptFood(food._id)}
              className="bg-green-700 text-white px-5 py-3 rounded-xl hover:bg-green-800"
            >
              Accept Request
            </button>

            <button
              onClick={() => deleteFood(food._id)}
              className="bg-green-700 text-white px-5 py-3 rounded-xl hover:bg-green-800"
            >
              Delete
            </button>

          </div>

        </div>

      ))}

    </div>
  );
}

export default FoodList;