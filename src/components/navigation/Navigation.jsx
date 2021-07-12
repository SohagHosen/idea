import { AppBar, Avatar, Box, MenuItem, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/icons/logo.png";
import profile from "../../assets/images/icons/profile.png";
const useStyles = makeStyles((theme) => ({
  root: {
    height: 94,
    backgroundColor: "#562EFF",
  },
  navbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logo: { display: "flex", alignItems: "center" },
  brand_section: {
    gap: "1rem",
    display: "flex",
    alignItems: "center",
    fontFamily: "Poppins, sans-serif",
    textDecoration: "none",
  },
  brand: { fontSize: 24, color: "white" },
  nav_item: {
    display: "flex",
  },
  nav_link: {
    textDecoration: "none",
    fontSize: "1rem",
    color: "#fff",
  },
}));
const Navigation = () => {
  const clasess = useStyles();
  return (
    <AppBar position="static" className={clasess.root}>
      <Box className={`${clasess.navbar} container`}>
        <Box className={clasess.logo}>
          <Link to="/" className={clasess.brand_section}>
            <img src={logo} alt="" />
            <Typography className={clasess.brand}>Idea</Typography>
          </Link>
        </Box>
        <Box className={clasess.nav_item}>
          <MenuItem>
            <Link className={clasess.nav_link} to="/">
              Home
            </Link>
          </MenuItem>
          <MenuItem>
            <Link className={clasess.nav_link} to="/">
              Home
            </Link>
          </MenuItem>
          <MenuItem>
            <Link className={clasess.nav_link} to="/">
              Home
            </Link>
          </MenuItem>
          <MenuItem>
            <Link className={clasess.nav_link} to="/">
              <Avatar alt="Remy Sharp" src={profile} />
            </Link>
          </MenuItem>
        </Box>
      </Box>
    </AppBar>
  );
};

export default Navigation;
