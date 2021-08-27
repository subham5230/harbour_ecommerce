import React from "react";
import { Link } from "react-router-dom";

const UserNav = () => (
  <nav className="mt-4 display-4" style={{color:"#EB3349"}}>
    <ul className="nav flex-column">
      <li className="nav-item">
        <Link to="/user/history" className="nav-link mb-2" style={{color:"#EB3349"}}>
          Order History
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/user/password" className="nav-link mb-2" style={{color:"#EB3349"}}>
          Update Password
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/user/wishlist" className="nav-link mb-2" style={{color:"#EB3349"}}>
          Wishlist
        </Link>
      </li>
    </ul>
  </nav>
);

export default UserNav;
