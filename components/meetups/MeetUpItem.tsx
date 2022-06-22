import { useRouter } from "next/router";
import * as React from "react";
import Card from "../ui/Card";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";

export interface MeetUpItemPageProps {
  id: string;
  image: string;
  title: string;
}

const useStyles = makeStyles((theme) => ({
  item: {
    margin: "1rem 0",
  },

  image: {
    width: "100%",
    height: "20rem",
    overflow: "hidden",
    borderTopRightRadius: "6px",
    borderTopLeftRadius: "6px",

    "& img": {
      width: "100%",
      objectFit: "cover",
    },
  },

  content: {
    textAlign: "center",
    padding: "1rem",
  },

  actions: {
    textAlign: "center",
    padding: "1,5rem",

    "& button": {
      font: "inherit",
      padding: "0.5rem 1.5rem",
    },
  },
}));

export default function MeetUpItemPage(props: MeetUpItemPageProps) {
  const classes = useStyles();
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
        </div>
        <div className={classes.actions}>
          <Button>Show Details</Button>
        </div>
      </Card>
    </li>
  );
}
