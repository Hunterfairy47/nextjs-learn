import { useRouter } from "next/router";
import * as React from "react";
import Card from "../ui/Card";
import { makeStyles } from "@mui/styles";
import { Box, Button, ListItem } from "@mui/material";

export interface HeroDetailPageProps {
  id?: string;
  image: string;
  title: string;
  description?: string;
}

// const useStyles = makeStyles((theme) => ({
//   item: {
//     margin: "1rem 0",
//   },

//   image: {
//     width: "100%",
//     height: "15rem",
//     overflow: "hidden",
//     borderTopRightRadius: "6px",
//     borderTopLeftRadius: "6px",

//     "& img": {
//       width: "100%",
//       objectFit: "cover",
//     },
//   },

//   content: {
//     textAlign: "center",
//     padding: "0.3rem",
//   },

//   actions: {
//     textAlign: "center",
//     padding: "1,5rem !important",

//     "& button": {
//       font: "inherit",
//       padding: "0.5rem 1.5rem",
//     },
//   },
// }));

export default function HeroItemPage(props: HeroDetailPageProps) {
  const { id, title, image, description } = props;

  // const classes = useStyles();

  const router = useRouter();

  function showDetailsHandler() {
    router.push(`/${id}`);
  }

  return (
    <ListItem component="li" sx={{ margin: "1rem 0" }}>
      <Card>
        <Box
          sx={{
            width: "100%",
            height: "15rem",
            overflow: "hidden",
            borderTopRightRadius: "6px",
            borderTopLeftRadius: "6px",

            "& img": {
              width: "100%",
              objectFit: "cover",
            },
          }}
        >
          <img src={props.image} alt={title} />
        </Box>
        <Box sx={{ textAlign: "center", padding: "0.3rem" }}>
          <h3>{title}</h3>
        </Box>
        <Box sx={{ textAlign: "center", padding: "0.3rem" }}>
          <h4>{description}</h4>
        </Box>
        <Box
          sx={{
            p: "1.5rem",
            textAlign: "center",
            padding: "1,5rem !important",

            "& button": {
              font: "inherit",
              padding: "0.5rem 1.5rem",
            },
          }}
        >
          <Button variant="outlined" onClick={showDetailsHandler}>
            Show Details
          </Button>
        </Box>
      </Card>
    </ListItem>
  );
}
