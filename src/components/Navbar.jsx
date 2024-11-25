import { useState } from "react";
import Logo from "../assets/images/Logo.jpg";
import { Link } from "react-router-dom";
import { Call, Message, Phone, Whatsapp } from "../assets/icons/Icons";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="top-0 h-28 flex px-4 lg:px-20 fixed bg-white w-full z-50 shadow-md">
      {/* Logo Section */}
      <div className="w-1/2 sm:w-1/6 h-28 flex items-center">
        <img src={Logo} alt="Logo" className="object-cover w-16 sm:w-auto" />
      </div>

      {/* Main Navbar */}
      <div className="flex flex-col h-28 flex-grow px-2 sm:px-4">
        {/* Top Section */}
        <div className="flex justify-between items-center h-14">
          {/* Contact Info (Hidden on small screens) */}
          <div className="hidden sm:flex h-14 items-center space-x-2 sm:space-x-6 px-4 sm:px-8">
            <div className="flex space-x-1 items-center">
              <Message height="1rem" width="1rem" />
              <p className="text-xs text-red-600">info@altrasul.net</p>
            </div>
            <div className="flex space-x-1 items-center">
              <Phone height="1rem" width="1.3rem" />
              <p className="text-xs text-red-600">+971 565 704704</p>
            </div>
            <div className="flex space-x-1 items-center">
              <Whatsapp height="1.3rem" width="1.3rem" />
              <p className="text-xs text-red-600">+971 565 704704</p>
            </div>
          </div>

          {/* Hamburger Menu Toggle */}
          <div className="sm:hidden flex items-center absolute right-4">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Links (Visible on larger screens) */}
        <div className="hidden sm:flex border-t-[1px] border-t-black/5 justify-between items-center">
          <div className="flex space-x-4 sm:space-x-8 items-center h-14 px-4 sm:px-8 text-sm sm:text-base">
            <Link className="hover:text-red-600" to="/">Home</Link>
            <Link className="hover:text-red-600" to="/about">About</Link>
            <Link className="hover:text-red-600" to="/services">Our Services</Link>
            <Link className="hover:text-red-600" to="/blogs">Blogs</Link>
            <Link className="hover:text-red-600" to="/contact">Contact</Link>
          </div>

          <div className="flex w-2/5 sm:w-1/6  space-x-2 sm:space-x-3 items-center text-xs sm:text-sm">
            <div className="flex items-center">
              <Call />
            </div>
            <div className="flex flex-col">
              <h3>Talk to Us</h3>
              <h1>+971 565 704704</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Hamburger dropdown) */}
      {menuOpen && (
        <div className="absolute top-28 left-0 w-full bg-white shadow-lg sm:hidden">
          <div className="flex flex-col space-y-4 px-6 py-4 text-sm">
            <Link className="hover:text-red-600" to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link className="hover:text-red-600" to="/about" onClick={() => setMenuOpen(false)}>About</Link>
            <Link className="hover:text-red-600" to="/services" onClick={() => setMenuOpen(false)}>Our Services</Link>
            <Link className="hover:text-red-600" to="/blogs" onClick={() => setMenuOpen(false)}>Blogs</Link>
            <Link className="hover:text-red-600" to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            <div className="flex flex-col border-t pt-4">
              <div className="flex items-center space-x-1">
                <Call />
                <h1 className="text-xs">+971 565 704704</h1>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;