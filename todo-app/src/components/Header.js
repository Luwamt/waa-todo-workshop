import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h1>Menu Items</h1>

      <div className="link">
        <ul >
          <li>
            <Link to="/todos">Todos</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
