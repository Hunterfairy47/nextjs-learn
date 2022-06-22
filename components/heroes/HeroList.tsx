import HeroItemPage from "./HeroItem";
import { HeroDetailPageProps } from "./HeroItem";
import { makeStyles } from "@mui/styles";
import { List, ListItem } from "@mui/material";

export interface HeroListPageProps {
  heroes: HeroDetailPageProps[];
}

const useStyles = makeStyles((theme) => ({
  list: {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
}));

function HeroListPage(props: HeroListPageProps) {
  const classes = useStyles();
  return (
    <List  component="ul" sx={{ listStyle: "none", margin: 0, padding: 0 }}>
      {props.heroes.map((hero) => (
        <HeroItemPage
          key={hero.id}
          id={hero.id}
          image={hero.image}
          title={hero.title}
          description={hero.description}
        />
      ))}
    </List >
  );
}

export default HeroListPage;
