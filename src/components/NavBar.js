import React from "react";
import { Menu } from "semantic-ui-react";

const NavBar = () => {
  return (
    <React.Fragment>
      <Menu inverted stackable>
        <Menu.Item>Products</Menu.Item>
        <Menu.Item>Admin panel</Menu.Item>
        <Menu.Item>Log In</Menu.Item>
        <Menu.Item>Shopping Basket</Menu.Item>
      </Menu>
    </React.Fragment>
  );
};

export default NavBar;
