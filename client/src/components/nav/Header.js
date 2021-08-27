import React, { useState } from "react";
import { Menu, Badge } from "antd";
import {
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
  UserAddOutlined,
  LogoutOutlined,
  ShoppingOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import firebase from "firebase";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Search from "../forms/Search";

const { SubMenu, Item } = Menu;

const Header = () => {
  const [current, setCurrent] = useState("home");

  let dispatch = useDispatch();
  let { user, cart } = useSelector((state) => ({ ...state }));

  let history = useHistory();

  const handleClick = (e) => {
    // console.log(e.key);
    setCurrent(e.key);
  };

  const logout = () => {
    firebase.auth().signOut();
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    history.push("/login");
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal"
      className="text-white font-weight-bold"
      style={{
        background: "#EB3349",
        background: "-webkit-linear-gradient(to right, #F45C43, #EB3349)",
        background: "linear-gradient(to right, #F45C43, #EB3349)",
        borderBottom:"none",
        color:"white"
      }}>
        <Item className="text-white" key="home" icon={<AppstoreOutlined />}>
        <Link to="/"><span className="text-white">Home</span></Link>
      </Item>

      <Item key="shop" className="text-white ml-auto" icon={<ShoppingOutlined />}>
        <Link to="/shop"><span className="text-white">Shop</span></Link>
      </Item>

      <Item key="cart" className="text-white" icon={<ShoppingCartOutlined />}>
        <Link to="/cart">
          <Badge count={cart.length} offset={[9, 0]}>
            <span className="text-white">Cart</span>
          </Badge>
        </Link>
      </Item>

      <Item className="p-1 text-white">
        <Search />
      </Item>

      {!user && (
        <Item key="register" icon={<UserAddOutlined />} className="text-white">
          <Link to="/register"><span className="text-white">Register</span></Link>
        </Item>
      )}

      {!user && (
        <Item key="login" icon={<UserOutlined />} className="text-white">
          <Link to="/login"><span className="text-white">Login</span></Link>
        </Item>
      )}

      {user && (
        <SubMenu
          icon={<SettingOutlined />}
          title={user.email && user.email.split("@")[0]}
          className="float-right text-white"
        >
            <Item>
              <Link to="/user/history">User Settings</Link>
            </Item>

          {user && user.role === "admin" && (
            <Item>
              <Link to="/admin/dashboard">Admin Settings</Link>
            </Item>
          )}

          <Item icon={<LogoutOutlined />} onClick={logout}>
            Logout
          </Item>
        </SubMenu>
      )}

      
    </Menu>
  );
};

export default Header;
