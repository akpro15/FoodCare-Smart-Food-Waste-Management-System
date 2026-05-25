
import hero from "../assets/hero.png";
import ngo from "../assets/ngo.png";
import rider from "../assets/rider.png";
import home from "../assets/home.png";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

function Home() {

  const user = JSON.parse(localStorage.getItem("user"));

  return (

    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100">

      {/* HERO SECTION */}

      <motion.div
        className="grid md:grid-cols-2 items-center px-10 py-20 backdrop-blur-xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >

        {/* LEFT SECTION */}

        <div>

          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight bg-gradient-to-r from-green-700 to-emerald-500 bg-clip-text text-transparent">

            Reducing the Waste,
            Donating the Taste...

          </h1>

          <p className="mt-4 text-xl text-gray-700 max-w-2xl leading-relaxed">

            Turning surplus food into hope by connecting
Donors, NGOs, and Riders through one smart platform.

          </p>

          <div className="mt-8 flex justify-center items-center gap-6 w-full">

            <div className="mt-8 flex justify-center items-center gap-6 w-full">

{
  user?.role === "donor" ? (

    <a
      href="/add-food"
      className="bg-gradient-to-r from-green-600 to-emerald-500 text-white px-16 py-6 rounded-[30px] shadow-[0_15px_40px_rgba(0,0,0,0.25)] hover:scale-110 transition duration-300 text-2xl font-bold"
    >
      Donate Food
    </a>

  ) : (

    <button
      onClick={() =>
        alert("Please Login/Register As A Donor First")
      }
      className="bg-gradient-to-r from-green-600 to-emerald-500 text-white px-16 py-6 rounded-[30px] shadow-[0_15px_40px_rgba(0,0,0,0.25)] hover:scale-110 transition duration-300 text-2xl font-bold"
    >
      Donate Food
    </button>

  )
}

</div>

          </div>

        </div>

        {/* RIGHT IMAGE */}

        <div className="flex justify-center mt-10 md:mt-0">

          <img
            src={home}
            alt="Food Donation"
            className="rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.25)] w-full max-w-xl hover:scale-105 transition duration-500 border-4 border-white"
          />

        </div>

      </motion.div>

      {/* CONNECT SECTION */}

      <div className="mt-20 text-center px-6">

        <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-green-700 to-emerald-500 bg-clip-text text-transparent leading-tight">

          Join The Mission — Donate, Support, Deliver

        </h2>

        <p className="mt-6 text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">

          Connect with FoodCare as a Donor, NGO, or Rider
          and become a part of the movement to reduce food waste
          and help communities in need.

        </p>

      </div>

      {/* FEATURES SECTION */}

      <div className="px-10 py-24 bg-white/40 backdrop-blur-xl rounded-t-[50px]">

        <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-green-700 to-emerald-500 bg-clip-text text-transparent">

          Our Features

        </h2>

        <div className="grid md:grid-cols-3 gap-10 mt-16">

          {/* FOOD DONATION */}

          <motion.div
            whileHover={{
              scale: 1.05,
              y: -10,
            }}
            transition={{ duration: 0.3 }}
            className="bg-white/70 backdrop-blur-xl rounded-[35px] shadow-[0_10px_40px_rgba(0,0,0,0.12)] overflow-hidden border border-white/30"
          >

            <img
              src={hero}
              alt="Food Donation"
              className="h-60 w-full object-cover"
            />

            <div className="p-8">

              <h3 className="text-2xl font-bold text-green-700">

                Food Donation

              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">

                Restaurants & citizens can instantly donate
                leftover food instead of wasting it.

              </p>

            </div>

          </motion.div>

          {/* NGO */}

          <motion.div
            whileHover={{
              scale: 1.05,
              y: -10,
            }}
            transition={{ duration: 0.3 }}
            className="bg-white/70 backdrop-blur-xl rounded-[35px] shadow-[0_10px_40px_rgba(0,0,0,0.12)] overflow-hidden border border-white/30"
          >

            <img
              src={ngo}
              alt="NGO Help"
              className="h-60 w-full object-cover"
            />

            <div className="p-8">

              <h3 className="text-2xl font-bold text-green-700">

                NGO Connection

              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">

                NGOs receive alerts and manage
                food requests in real-time.

              </p>

            </div>

          </motion.div>

          {/* RIDER */}

          <motion.div
            whileHover={{
              scale: 1.05,
              y: -10,
            }}
            transition={{ duration: 0.3 }}
            className="bg-white/70 backdrop-blur-xl rounded-[35px] shadow-[0_10px_40px_rgba(0,0,0,0.12)] overflow-hidden border border-white/30"
          >

            <img
              src={rider}
              alt="Rider Delivery"
              className="h-60 w-full object-cover"
            />

            <div className="p-8">

              <h3 className="text-2xl font-bold text-green-700">

                Rider Delivery

              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">

                Riders connect with NGOs & deliver food quickly
                to needy people.

              </p>

            </div>

          </motion.div>

        </div>

      </div>

      {/* STATS SECTION */}

      <div className="py-16 px-10">

        <div className="grid md:grid-cols-3 gap-8">

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-white rounded-3xl shadow-xl p-8 text-center hover:scale-105 transition duration-300"
          >

            <h1 className="text-5xl font-extrabold text-green-700">
              500+
            </h1>

            <p className="mt-3 text-xl text-gray-600">
              Food Donations
            </p>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-white rounded-3xl shadow-xl p-8 text-center hover:scale-105 transition duration-300"
          >

            <h1 className="text-5xl font-extrabold text-green-700">
              120+
            </h1>

            <p className="mt-3 text-xl text-gray-600">
              NGOs Connected
            </p>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-white rounded-3xl shadow-xl p-8 text-center hover:scale-105 transition duration-300"
          >

            <h1 className="text-5xl font-extrabold text-green-700">
              1000+
            </h1>

            <p className="mt-3 text-xl text-gray-600">
              People Helped
            </p>

          </motion.div>

        </div>

      </div>
    
      <Footer />

    </div>
  );
}

export default Home;