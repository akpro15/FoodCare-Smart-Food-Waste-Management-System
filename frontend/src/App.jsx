import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AddFood from "./pages/AddFood";
import FoodList from "./pages/FoodList";
import NGODashboard from "./pages/NGODashboard";
import AcceptedFoods from "./pages/AcceptedFoods";
import RiderDashboard from "./pages/RiderDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Profile from "./pages/Profile";
import DonorHistory from "./pages/DonorHistory";
import NGOHistory from "./pages/NGOHistory";
import RiderHistory from "./pages/RiderHistory";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />
      
        <Route path="/add-food" element={<AddFood />} />
      
        <Route path="/foods" element={<FoodList />} />

        <Route path="/ngo-dashboard" element={<NGODashboard />} />
      
        <Route path="/accepted-foods" element={<AcceptedFoods />} />
      
        <Route path="/rider-dashboard" element={<RiderDashboard />} />
      
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      
        <Route path="/profile" element={<Profile />} />

        <Route path="/donor-history" element={<DonorHistory />} />

        <Route path="/ngo-history" element={<NGOHistory />} />

        <Route path="/rider-history" element={<RiderHistory />} />
      
      </Routes>

    </BrowserRouter>
  );
}

export default App;