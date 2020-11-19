import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppinBasketIcon from '@material-ui/icons/ShoppingBasket'
import "./Navbar.css";
import { useStateValue } from "./StateProvider";

function Navbar() {
     const [{basket}] = useStateValue()
  return (
    <div className="navbar">
      {/* Logo */}
      <Link to="/">
        <h3 className="navbar__logo">eStore</h3>
      </Link>

      {/*Search Bar */}
      <div className="navbar__searchContainer">
        <input type="text" className="navbar__search" />
        <SearchIcon className="navbar__searchIcon"></SearchIcon>
      </div>
      {/* Buttons */}
      <div className="navbar__navs">
        {/* 1st button */}
        <Link to="/login" className="navbar__link">
            <div className="navbar__option">
            <span className="navbar__optionLineOne"> Hello</span>
            <span className="navbar__optionLineTwo">Sign In</span>
            </div>
           
        </Link>
        {/* 2nd button */}
        <Link className="navbar__link">
            <div className="navbar__option">
            <span className="navbar__optionLineOne"> Returns</span>
            <span className="navbar__optionLineTwo">Orders</span>
            </div>
           
        </Link>
        {/* 3rd button */}
        <Link className="navbar__link">
            <div className="navbar__option">
            <span className="navbar__optionLineOne"> *****</span>
            <span className="navbar__optionLineTwo">**</span>
            </div>
           
        </Link>
      </div>
      {/* Basket */}
      <Link to="/checkout" className="navbar__link">
          <div className="navbar__basket">
            {/* icon    */}
                <ShoppinBasketIcon></ShoppinBasketIcon>
            {/* no of items */}
  <span className="navbar__optionLineTwo navbar__basketCount">{basket?.length}</span>
          </div>
          
      </Link>
    </div>
  );
}

export default Navbar;
