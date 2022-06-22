import {
  AppBar,
  Avatar,
  Box,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import classes from "./MainNavigation.module.css";
import { makeStyles } from "@mui/styles";

export interface MainNavigationPageProps {}

const useStyles = makeStyles((theme) => ({
  header: {
    width: "100%",
    height: "5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#77002e",
    padding: "0 10%",

    "& ul": {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      alignItems: "baseline",

      "& li": {
        marginLeft: "3rem",

        '& a':{
          fontSize: '1.5rem'
        }
      },
    },
  },

  logo: {
    fontSize: "2rem",
    color: "white",
    fontWeight: "bold",
  },
}));

export default function MainNavigation(props: MainNavigationPageProps) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (

    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className={classes.header}>
          <Typography variant="h6" component="div" className={classes.logo}>
            NextJS App
          </Typography>
          <Box>
            <ul>
              <li>
                <Link href="/">
                  <a>All Meetups</a>
                </Link>
              </li>
              <li>
                <Link href="/new-meetup">
                  <a>Add New Meetup</a>
                </Link>
              </li>
            </ul>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
