import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="font-bold text-xl">SmartShop</h1>

      <div className="flex gap-4">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/products">Products</Link>
        {/* <Link to="/">Login</Link> */}
        {/* <Link to="/signup">Signup</Link> */}
      </div>
    </nav>
  );
}

export default Navbar;