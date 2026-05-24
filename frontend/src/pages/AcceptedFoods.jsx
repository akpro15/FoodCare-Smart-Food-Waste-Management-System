import { useEffect, useState } from "react";
import axios from "axios";

function AcceptedFoods() {

  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetchFoods();
  }, []);

  const fetchFoods = async () => {
    try {

      const response = await axios.get(
        "https://foodcare-backend.onrender.com/api/food/accepted"
      );

      setFoods(response.data);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Accepted Foods</h1>

      {foods.map((food) => (
        <div
          key={food._id}
          style={{
            background: "white",
            padding: "20px",
            marginBottom: "20px",
            borderRadius: "10px",
          }}
        >
          <h2>{food.foodName}</h2>

          <p>Quantity: {food.quantity}</p>

          <p>Location: {food.location}</p>

          <p>Status: {food.status}</p>

        </div>
      ))}
    </div>
  );
}

export default AcceptedFoods;