import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [categories] = useState([
    { id: 1, name: "health" },
    { id: 2, name: "electronics" },
    { id: 3, name: "books" },
    { id: 4, name: "fashion" },
  ]);

  return (
    <nav>
      <ul>
        {categories.map((category) => {
          return (
            <li key={category.id}>
              <Link to={`/products/${category.id}/${category.name}`}>
                {category.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
