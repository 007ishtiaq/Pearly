import "./Header.css";
import React, { useState } from "react";
import { Menu, Badge } from "antd";
import {
  SettingOutlined,
  UserOutlined,
  UserAddOutlined,
  LogoutOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import firebase from "firebase";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Search from "../forms/Search";
import { ReactComponent as Logosvg } from "../../images/headersvgs/pearllogo.svg";
import { ReactComponent as Pearlytouchtxt } from "../../images/headersvgs/pearlytouch.svg";
import { ReactComponent as Cartsvg } from "../../images/headersvgs/Cartsvg.svg";
import { ReactComponent as Personsvg } from "../../images/headersvgs/Personsvg.svg";
import { ReactComponent as Applesvg } from "../../images/headersvgs/Applesvg.svg";

const { SubMenu, Item } = Menu;

const Header = () => {
  const [current, setCurrent] = useState("home");
  const [showsideNavi, setShowsideNavi] = useState(false);
  const [showacdiv, setShowacdiv] = useState(false);

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

  const showsideNav = () => {
    setShowsideNavi((flase) => !flase);
  };
  const showaccountdiv = () => {
    setShowacdiv((flase) => !flase);
  };

  return (
    <>
      <div class="headermain">
        <div class="top-header">
          <div class="newsleft">
            <div class="logo-svg-small">
              <Logosvg />
            </div>
            <a href="#" target="_blank" rel="noopener">
              <span>Sell on Pearly</span>
            </a>
          </div>
          <div class="newscenter">
            <p class="top_tag_Center">
              Any news ( big news <strong>50%</strong> comming soon )
            </p>
          </div>
          <div class="newsright">
            <p class="top_tag_Right">Contact Now</p>
          </div>
        </div>

        <div id="Mainheader" className="middlemainheader">
          <div class="middle-header">
            <div class="binder">
              <div class="hamburger" onClick={showsideNav}>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <Link to="/">
                <div class="logodiv">
                  <div class="logo-svgsize">
                    <Logosvg />
                  </div>
                  <div class="logo-txtsize">
                    <Pearlytouchtxt />
                  </div>
                </div>
              </Link>
            </div>

            <Search />

            <div class="middleheaderrightside">
              <div class="dynamictextdiv">
                {user ? (
                  <p>Hi, {user.email && user.email.split("@")[0]}</p>
                ) : (
                  <p>Sign In </p>
                )}
              </div>

              <div
                id="accounthoverdiv"
                className={showacdiv && "active"}
                onClick={showaccountdiv}
              >
                <div className="cartsvg">
                  <Personsvg />
                </div>
                {showacdiv && (
                  <div id="accountdiv" class="accountlistdiv">
                    <div class="accountlist">
                      <div class="accountlistbtndiv">
                        {user ? (
                          <Link to="" class="accountlistbtn" onClick={logout}>
                            <span>Logout</span>{" "}
                          </Link>
                        ) : (
                          <>
                            <Link to="/login" class="accountlistbtn">
                              <span>Sign In</span>{" "}
                            </Link>
                            <Link
                              to="/register"
                              class="accountlistbtn registerbtn"
                            >
                              <span>Register</span>{" "}
                            </Link>
                          </>
                        )}
                      </div>

                      {user && (
                        <dv>
                          {user && user.role === "admin" && (
                            <Link
                              to="/admin/dashboard"
                              class="accountlistlinks"
                            >
                              <div className="acsvg">
                                <Applesvg />
                              </div>
                              Admin Dashboard
                            </Link>
                          )}
                          <Link to="/user/history" class="accountlistlinks">
                            <div className="acsvg">
                              <Applesvg />
                            </div>
                            Order History
                          </Link>
                          <Link to="/user/password" class="accountlistlinks">
                            <div className="acsvg">
                              <Applesvg />
                            </div>
                            Password Reset
                          </Link>
                          <Link to="/user/wishlist" class="accountlistlinks">
                            <div className="acsvg">
                              <Applesvg />
                            </div>
                            Saved Items
                          </Link>
                        </dv>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <div id="cartbtn" class="cartbtndiv">
                <Link to="/cart">
                  <Badge count={cart.length} offset={[-3, 8]}>
                    <div id="carthoverdiv">
                      <div className="cartsvg">
                        <Cartsvg />
                      </div>
                    </div>
                  </Badge>
                </Link>
              </div>
            </div>
          </div>
          {showsideNavi && <div class="sidenav">Im side nav</div>}
        </div>
      </div>
    </>
  );
};

export default Header;
