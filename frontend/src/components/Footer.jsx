function Footer() {

  return (

    <footer className="bg-gradient-to-r from-green-700 to-emerald-500 text-white mt-20 rounded-t-[50px] shadow-2xl">

      <div className="max-w-7xl mx-auto px-10 py-16">

        <div className="grid md:grid-cols-3 gap-10">

          {/* BRAND */}

          <div>

            <h1 className="text-4xl font-extrabold">

              FoodCare

            </h1>

            <p className="mt-5 text-lg text-green-100 leading-relaxed">

              Save the Meal, Spread the Feel.
              Connecting Restaurants, NGOs and Riders
              to reduce food waste and help needy people.

            </p>

          </div>

          {/* QUICK LINKS */}

          <div>

            <h2 className="text-2xl font-bold">

              Quick Links

            </h2>

            <div className="flex flex-col gap-3 mt-5 text-green-100">

              <a href="/">Home</a>

              <a href="/profile">Profile</a>

            </div>

          </div>

          {/* CONTACT */}

          <div>

            <h2 className="text-2xl font-bold">

              Contact

            </h2>

            <div className="mt-5 text-green-100 space-y-3">

              <p>Email: foodcare@gmail.com</p>

              <p>Phone: +91 9876543210</p>

              <p>Kolkata, India</p>

            </div>

          </div>

        </div>

        {/* BOTTOM */}

        <div className="border-t border-green-300 mt-12 pt-6 text-center text-green-100">

          <p className="text-lg">

            © 2026 FoodCare. All Rights Reserved.

          </p>

          <p className="mt-2">

            Developed By Aditya Kumar

          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;