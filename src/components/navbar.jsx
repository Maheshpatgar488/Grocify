import React, { useState } from "react";
import {  FaShoppingBag, FaSearch } from "react-icons/fa";
import { TbMenu2 } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "./CartContext"; 

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { totalItems } = useCart(); 
  const navigate = useNavigate();

  const toggleMenu = () => setShowMenu(!showMenu);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    // Navigate to /search with query parameter
    navigate(`/search?query=${encodeURIComponent(searchTerm)}`);

    setSearchTerm(""); // clear input
  };

  return (
    <header className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <nav className="max-w-[1400px] mx-auto px-10 md:h-[14vh] h-[12vh] flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold">
          Gr<span className="text-orange-500 uppercase">o</span>cify
        </Link>

        {/* Nav links */}
        <ul className="md:flex items-center gap-x-15 hidden">
          <li><Link to="/" className="font-semibold tracking-wider text-orange-500 hover:text-orange-500">Home</Link></li>
          <li><Link to="/about" className="font-semibold tracking-wider hover:text-orange-500">About</Link></li>
          <li><Link to="/process" className="font-semibold tracking-wider hover:text-orange-500">Process</Link></li>
          <li><Link to="/contact" className="font-semibold tracking-wider hover:text-orange-500">Contact</Link></li>
        </ul>

        <div className="flex items-center gap-x-3">
          {/* Search */}
          <form
            onSubmit={handleSearch}
            className="md:flex items-center p-1 border-2 border-orange-500 rounded-full w-full max-w-md hidden"
          >
            <input
              type="text"
              placeholder="Search items..."
              className="flex-1 px-4 py-2 rounded-full focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              type="submit"
              className="bg-gradient-to-b from-red-600 to-orange-500 text-white w-10 h-10 flex items-center justify-center rounded-full text-xl"
            >
              <FaSearch />
            </button>
          </form>

          {/* <a href="#" className="text-zinc-700 text-2xl"><FaHeart /></a> */}

          <Link to="/cart" className="relative text-zinc-700 text-2xl">
            <FaShoppingBag />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </Link>

          <button type="button" className="text-zinc-800 text-3xl md:hidden" onClick={toggleMenu}>
            <TbMenu2 />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul className={`bg-orange-500 flex flex-col items-center gap-y-6 px-6 py-8 md:hidden fixed top-[12vh] left-0 w-full shadow-lg transition-all duration-500 ${showMenu ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-5'}`}>
          <li><Link to="/" className="font-semibold tracking-wider text-white hover:text-orange-200">Home</Link></li>
          <li><Link to="/about" className="font-semibold tracking-wider text-white hover:text-orange-200">About</Link></li>
          <li><Link to="/process" className="font-semibold tracking-wider text-white hover:text-orange-200">Process</Link></li>
          <li><Link to="/contact" className="font-semibold tracking-wider text-white hover:text-orange-200">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
