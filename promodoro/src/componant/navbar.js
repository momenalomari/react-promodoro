import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import './style/navbar.css';

export default function ButtonAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="navbar">
      {/* شعار AMG */}
      <img
        src="https://i.pinimg.com/1200x/83/75/7c/83757cd91c25d4ab3156a566111d05c3.jpg"
        alt="Logo"
        className="logo"
      />

      {/* روابط النافبار */}
      <ul className="navbar_links">
        <li><Link to="/">Home</Link></li> 
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/carts">Carts</Link></li>
        <li><Link to="/product">Product</Link></li>
      </ul>

      {/* منيو Dashboard */}
      <div className="navbar_menu">
        <Button
          id="dashboard-button"
          aria-controls={open ? 'dashboard-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          variant="contained"
            sx={{ minWidth: 'auto', padding: 0, borderRadius: '30%' , backgroundColor: 'rgba(88, 88, 88, 1)', boxShadow: 'none' }}   
        >
          <img width={30} src='https://images.icon-icons.com/1875/PNG/512/hamburgermenu_120234.png'/>
        </Button>
        <Menu
          id="dashboard-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem onClick={handleClose}>
            <Link to="/profile" style={{ textDecoration: 'none', color: 'inherit' }}>Profile</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="/account" style={{ textDecoration: 'none', color: 'inherit' }}>My Account</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="/logout" style={{ textDecoration: 'none', color: 'inherit' }}>Logout</Link>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}
