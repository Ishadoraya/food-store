import React, { useContext } from "react";
// import logoIcon from "../assets/Buddy-Food-logos.png";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import FoodContext from "../context/FoodContext";

const Navbar = () => {
  const { cartItems } = useContext(FoodContext);

  return (
    <>
      <div className="bg-[#ec621df3] flex items-center justify-around py-1 sticky top-0 z-10 shadow-md">
        <div className="flex items-center justify-center">
          {/* <img className="h-[95px]" src={} alt="" /> */}
          <Link
            to="/"
            className="text-[26px] font-bold leading-6 cursor-pointer"
          >
            Craving  <br />
            <span className="tracking-widest text-[#FF9800]">Hut</span>
          </Link>
        </div>
        <div className="md:flex hidden">
          <ul className="flex items-center justify-between gap-10">
            <li>
              <NavLink
                className="font-semibold hover:text-[#FF9800] transition duration-500 ease-in-out"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="font-semibold hover:text-[#FF9800] transition duration-500 ease-in-out"
                to="/About"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className="font-semibold hover:text-[#FF9800] transition duration-500 ease-in-out"
                to="/Popular"
              >
                Popular
              </NavLink>
            </li>
            <li>
              <NavLink
                className="font-semibold hover:text-[#FF9800] transition duration-500 ease-in-out"
                to="/Services"
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                className="font-semibold hover:text-[#FF9800] transition duration-500 ease-in-out"
                to="/Review"
              >
                Review
              </NavLink>
            </li>
            <li>
              <NavLink
                className="font-semibold hover:text-[#FF9800] transition duration-500 ease-in-out"
                to="/Contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-5">
          <Link to="" className="md:block hidden cursor-pointer">
            <PersonIcon sx={{ fontSize: 27 }} />
          </Link>
          <Link to="/Cart" className="cursor-pointer relative">
            <ShoppingCartIcon sx={{ fontSize: 27 }} />
            <span className="absolute top-[-5px] right-[-10px] bg-[#FF9800] font-semibold rounded-full h-[18px] w-[18px] flex items-center justify-center">
              {cartItems.length}
            </span>
          </Link>
          <span className="md:hidden cursor-pointer">
            <MenuIcon sx={{ fontSize: 27 }} />
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
