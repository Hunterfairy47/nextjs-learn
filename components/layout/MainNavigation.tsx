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
  
}));

export default function MainNavigation(props: MainNavigationPageProps) {
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        
      >
        <Toolbar sx={{
          width: "100%",
          height: "5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#006605",
          padding: "0 10%",

          "& ul": {
            listStyle: "none",
            margin: 0,
            padding: 0,
            display: "flex",
            alignItems: "baseline",

            "& li": {
              marginLeft: "3rem",

              "& a": {
                fontSize: "1.5rem",
              },
            },
          },
        }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ fontSize: "2rem", color: "white", fontWeight: "bold" }}
          >
            NextJS App
          </Typography>
          <Box>
            <ul>
              <li>
                <Link href="/">
                  <a>All Hero</a>
                </Link>
              </li>
              <li>
                <Link href="/new-hero">
                  <a>Add New Hero</a>
                </Link>
              </li>
            </ul>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
