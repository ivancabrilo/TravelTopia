// Dropdown.jsx
import * as React from "react";

import Dropdown from "@mui/joy/Dropdown";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";

export default function BasicMenu() {
  return (
    <Dropdown>
      <MenuButton>
        <MenuIcon />
      </MenuButton>
      <Menu>
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </Dropdown>
  );
}
