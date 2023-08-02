import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavItemes.module.css";
import {
  UserOutlined,
  LogoutOutlined,
  //   ShoppingCartOutlined,
} from "@ant-design/icons";
// import { Badge } from '@material-ui/core'

const NavItemes = (props) => {
  return (
    <ul className={classes.NavItemes}>
      <>
        <li>
          <NavLink to="/users/me/" exact activeClassName={classes.active}>
            حسابي <UserOutlined className={classes.Icon} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" exact activeClassName={classes.active}>
            {" "}
            عربة التسوق
            {/* <Badge badgeContent={props.cartCount} color="primary" >
                        <ShoppingCartOutlined className={classes.Icon} />
                    </Badge> */}
          </NavLink>
        </li>
        <li>
          <NavLink to="/logout" exact activeClassName={classes.active}>
            تسجيل الخروج <LogoutOutlined className={classes.Icon} />{" "}
          </NavLink>
        </li>
      </>

      {/* // <li>
        //   <NavLink to="/auth" activeClassName={classes.active}>
        //     {" "}
        //     تسجيل الدخول <UserOutlined />
        //   </NavLink>
        // </li> */}
    </ul>
  );
};

export default NavItemes;
