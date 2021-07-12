import { Avatar, Box, Divider, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { Link } from "react-router-dom";
import writer1 from "../../assets/images/writers/writer-1.png";
import writer2 from "../../assets/images/writers/writer-2.png";
import writer3 from "../../assets/images/writers/writer-3.png";
import writer4 from "../../assets/images/writers/writer-4.png";
import writer5 from "../../assets/images/writers/writer-5.png";
import writer6 from "../../assets/images/writers/writer-6.png";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    padding: 30,
    marginTop: 36,
  },
  topWriters: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridRowGap: 30,
    marginTop: 40,
  },
  writersTitle: {
    fontSize: 24,
    color: "#562EFF",
  },
  writer: {
    display: "flex",
    textDecoration: "none",
    alignItems: "center",
    gap: 16,
  },
  avatar: {
    height: 56,
    width: 56,
  },
  name: {
    fontSize: "1.125rem",
    color: "#000",
  },
  hr: {
    color: "red",
  },
  divider: {
    backgroundColor: "#D1D1D1",
    margin: "30px 0",
  },
}));
const TopWriters = () => {
  const clasess = useStyles();
  return (
    <Box className="container">
      <Box className={clasess.root}>
        <Typography className={clasess.writersTitle} variant="h6">
          Top Writers
        </Typography>
        <Box className={clasess.topWriters}>
          <Link to="/" className={clasess.writer}>
            <Avatar className={clasess.avatar} alt="Remy Sharp" src={writer1} />
            <Typography className={clasess.name}>John Smith</Typography>
          </Link>
          <Link to="/" className={clasess.writer}>
            <Avatar className={clasess.avatar} alt="Remy Sharp" src={writer2} />
            <Typography className={clasess.name}>John Smith</Typography>
          </Link>
          <Link to="/" className={clasess.writer}>
            <Avatar className={clasess.avatar} alt="Remy Sharp" src={writer3} />
            <Typography className={clasess.name}>John Smith</Typography>
          </Link>
          <Link to="/" className={clasess.writer}>
            <Avatar className={clasess.avatar} alt="Remy Sharp" src={writer4} />
            <Typography className={clasess.name}>John Smith</Typography>
          </Link>
          <Link to="/" className={clasess.writer}>
            <Avatar className={clasess.avatar} alt="Remy Sharp" src={writer5} />
            <Typography className={clasess.name}>John Smith</Typography>
          </Link>
          <Link to="/" className={clasess.writer}>
            <Avatar className={clasess.avatar} alt="Remy Sharp" src={writer6} />
            <Typography className={clasess.name}>John Smith</Typography>
          </Link>
        </Box>
        <Divider className={clasess.divider} />
      </Box>
    </Box>
  );
};

export default TopWriters;
