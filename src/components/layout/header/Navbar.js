import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Navbar() {
  const navBarItems = useSelector((state) => state.navBarItems.categories);

  return (
    <nav>
      <ul>
        {navBarItems.map((navBarItem) => {
          return (
            <li key={navBarItem.id}>
              <Link to={`/products/${navBarItem.id}/${navBarItem.name}`}>
                {navBarItem.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
