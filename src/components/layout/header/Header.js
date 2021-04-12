import React from "react";
import { Link } from "react-router-dom";

import SearchIcon from "@material-ui/icons/Search";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import WishAwayLogo from "../../../assets/logo-wishaway.svg";

import "./header.scss";

export default function Header() {
  return (
    <header>
      <section>
        <div className="header-icon-container">
          <SearchIcon className="header-icon" />
          <p>search</p>
        </div>

        <div className="logo">
          <Link to="/">
            <img src={WishAwayLogo} alt="logo" width="100%" height="100%" />
          </Link>
        </div>
        <div className="header-right">
          <div className="header-icon-container">
            <AccountCircleOutlinedIcon className="header-icon" />
            <p>login / sign up</p>
          </div>
          <div className="header-icon-container bag">
            <LocalMallOutlinedIcon className="header-icon" />
            <p>bag</p>
          </div>
        </div>
      </section>
      <nav>
        <ul>
          <li>
            <Link to="products/health">health</Link>
          </li>
          <li>
            <Link to="products/electronics">electronics</Link>
          </li>
          <li>
            <Link to="products/books">books</Link>
          </li>
          <li>
            <Link to="products/fashion">fashion</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
