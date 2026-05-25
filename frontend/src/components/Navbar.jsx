import { Link } from "react-router-dom";

import fclogo2 from "../assets/fclogo2.png";

function Navbar() {

  const user = JSON.parse(localStorage.getItem("user"));

  const logoutUser = () => {

    localStorage.removeItem("user");

    window.location.href = "/login";
  };

  return (

    <nav className="bg-white/80 backdrop-blur-xl shadow-md px-10 py-5 flex justify-between items-center sticky top-0 z-50 border-b border-white/20">

      {/* LOGO */}

      <Link
        to="/"
        className="flex items-center gap-3 cursor-pointer"
      >

        <img
          src={fclogo2}
          alt="FoodCare Logo"
          className="w-14 h-14 object-contain"
        />

        <h1 className="text-3xl font-bold bg-gradient-to-r from-green-700 to-emerald-500 bg-clip-text text-transparent">

          FoodCare

        </h1>

      </Link>

      {/* RIGHT SECTION */}

      <div className="flex gap-5 items-center text-lg font-medium flex-wrap justify-end">

        {
          !user ? (

            <>

              <Link
                to="/register"
                className="bg-blue-500 text-white px-5 py-2 rounded-xl hover:bg-blue-600 transition duration-300"
              >
                Register
              </Link>

              <Link
                to="/login"
                className="bg-gradient-to-r from-green-600 to-emerald-500 text-white px-5 py-2 rounded-xl shadow-lg hover:scale-105 transition duration-300"
              >
                Login
              </Link>

            </>

          ) : (

            <>

              {/* HOME */}

              <Link
                to="/"
                className="hover:text-green-700 transition duration-300"
              >
                Home
              </Link>

              {
                user?.email === "admin@gmail.com" && (

                  <Link
                    to="/admin-dashboard"
                    className="hover:text-green-700 transition duration-300"
                  >
                    Admin Dashboard
                  </Link>

                )
              }

              {/* DONOR */}

              {
                user?.role === "donor" && user?.email !== "admin@gmail.com" && (

                  <>

                    <Link
                      to="/dashboard"
                      className="hover:text-green-700 transition duration-300"
                    >
                      Donor Dashboard
                    </Link>

                    <Link
                      to="/donor-history"
                      className="hover:text-green-700 transition duration-300"
                    >
                      History
                    </Link>

                    <Link
                      to="/add-food"
                      className="hover:text-green-700 transition duration-300"
                    >
                      Donate Food
                    </Link>

                  </>

                )
              }

              {/* NGO */}

              {
                user?.role === "ngo" && user?.email !== "admin@gmail.com" && (

                  <>

                    <Link
                      to="/ngo-dashboard"
                      className="hover:text-green-700 transition duration-300"
                    >
                      NGO Dashboard
                    </Link>

                    <Link
                      to="/ngo-history"
                      className="hover:text-green-700 transition duration-300"
                    >
                      History
                    </Link>

                  </>

                )
              }

              {/* RIDER */}

              {
                user?.role === "rider" && user?.email !== "admin@gmail.com" && (

                  <>

                    <Link
                      to="/rider-dashboard"
                      className="hover:text-green-700 transition duration-300"
                    >
                      Rider Dashboard
                    </Link>

                    <Link
                      to="/rider-history"
                      className="hover:text-green-700 transition duration-300"
                    >
                      History
                    </Link>

                  </>

                )
              }

              {/* PROFILE */}

              <Link
                to="/profile"
                className="bg-white shadow-md px-5 py-2 rounded-xl border border-gray-200 hover:scale-105 transition duration-300"
              >
                {user?.name}
              </Link>

              {/* LOGOUT */}

              <button
                onClick={logoutUser}
                className="bg-red-500 text-white px-5 py-2 rounded-xl hover:bg-red-600 transition duration-300"
              >
                Logout
              </button>

            </>

          )
        }

      </div>

    </nav>
  );
}

export default Navbar;