import React from "react";
import { Link } from "react-router-dom";

const AdminNav = () => (
  <nav  className="mt-4 display-4" style={{fontSize:"2rem"}}>
    <ul className="nav flex-column">
      <li className="nav-item">
        <Link to="/admin/dashboard" className="nav-link mb-2" style={{color:"#EB3349"}}>
          Dashboard
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/product"className="nav-link mb-2" style={{color:"#EB3349"}}>
          New Product
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/products" className="nav-link mb-2" style={{color:"#EB3349"}}>
          Products
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/category"className="nav-link mb-2" style={{color:"#EB3349"}}>
          Categories
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/sub" className="nav-link mb-2" style={{color:"#EB3349"}}>
          Sub Categories
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/coupon" className="nav-link mb-2" style={{color:"#EB3349"}}>
          Coupons
        </Link>
      </li>

    </ul>
  </nav>
);

export default AdminNav;
