import React from "react";
import Button from "@material-ui/core/Button";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {Link} from "react-router-dom"
import "./SimpleMenu.css"

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuRoundedIcon></MenuRoundedIcon>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to="/"       className="link"
>
        <MenuItem onClick={handleClose}>Home</MenuItem>
        </Link>
        <Link to="/projects"       className="link"
>
        <MenuItem onClick={handleClose}>Past Projects</MenuItem>
        </Link>
        <Link to="/resume"       className="link"
>
        <MenuItem onClick={handleClose}>Resume</MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
