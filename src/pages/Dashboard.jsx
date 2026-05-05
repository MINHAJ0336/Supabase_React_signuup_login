import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      navigate("/");
    } else {
      setUser(user);
    }

    setLoading(false);
  };

  const logout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-xl font-semibold animate-pulse">
          Loading Dashboard...
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-indigo-100">
      
      {/* Navbar */}
      <div className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">
          SmartShop Dashboard
        </h1>

        <button
          onClick={logout}
          className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto p-6">

        {/* Welcome Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Welcome Back 👋
          </h2>

          <p className="text-gray-600 text-lg">
            {user?.email}
          </p>

          <p className="text-sm text-gray-400 mt-2">
            Manage your account and explore products easily.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
            <h3 className="text-lg font-semibold text-gray-600">
              Total Orders
            </h3>
            <p className="text-3xl font-bold text-blue-600 mt-2">
              12
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
            <h3 className="text-lg font-semibold text-gray-600">
              Wishlist
            </h3>
            <p className="text-3xl font-bold text-pink-500 mt-2">
              5
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
            <h3 className="text-lg font-semibold text-gray-600">
              Account Status
            </h3>
            <p className="text-3xl font-bold text-green-500 mt-2">
              Active
            </p>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-8 bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-bold mb-3">
            Quick Overview
          </h2>

          <p className="text-gray-600 leading-7">
            This dashboard is connected with Supabase Authentication.
            Your login session is secure and your account information
            is fetched live from the backend.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;