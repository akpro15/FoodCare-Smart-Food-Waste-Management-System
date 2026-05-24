function Profile() {

  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {

    window.location.href = "/login";
  }

  return (

    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-10">

      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md">

        <div className="flex flex-col items-center">

          <div className="w-28 h-28 rounded-full bg-green-700 flex items-center justify-center text-white text-4xl font-bold">

            {user?.name?.charAt(0)}

          </div>

          <h1 className="text-3xl font-bold mt-5">

            {user?.name}

          </h1>

          <p className="text-gray-500 mt-2">

            {user?.email}

          </p>

          <div className="mt-5 bg-green-100 text-green-700 px-5 py-2 rounded-full">

            {user?.role}

          </div>

        </div>

        <div className="mt-10">

          <div className="bg-gray-100 p-4 rounded-xl mb-4">

            <h3 className="font-bold">
              Account Status
            </h3>

            <p className="text-gray-600">
              Active
            </p>

          </div>

          <div className="bg-gray-100 p-4 rounded-xl">

            <h3 className="font-bold">
              Platform Access
            </h3>

            <p className="text-gray-600">
              Food Donation System
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;