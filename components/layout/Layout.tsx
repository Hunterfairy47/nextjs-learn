import { useRouter } from "next/router";
import * as React from "react";
import MainNavigation from "./MainNavigation";
import { makeStyles } from "@mui/styles";


export interface PostDetailPageProps {
    children: React.ReactNode
}

const useStyles = makeStyles((theme) => ({
  main:{
    margin:' 3rem auto',
    width: '90%',
    maxWwidth:' 40rem',
  }
}));


export default function Layout(props: PostDetailPageProps) {
  const classes = useStyles();
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}   
