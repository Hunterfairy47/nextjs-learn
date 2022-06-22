import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import { HeroDetailPageProps } from "../components/heroes/HeroItem";
import HeroListPage from "../components/heroes/HeroList";

const HEROES = [
  {
    id: "hero1",
    title: "Spider man",
    image:
      "https://i.pinimg.com/originals/c0/67/65/c06765090902846c8ff44454d56e14ce.jpg",
    description:
      "Spider-Man is a superhero appearing in American comic books published by Marvel Comics. Created by writer-editor Stan Lee and artist Steve Ditko, he first appeared in the anthology comic book Amazing Fantasy #15 (August 1962) in the Silver Age of Comic Books",
  },
  {
    id: "hero2",
    title: "Captain america",
    image:
      "https://photo-cms-nghenhinvietnam.zadn.vn/w700/Uploaded/2022/cadwpqrnd/2021_02_22/captain_america_lijy.jpg",
    description:
      "Captain America is a superhero appearing in American comic books published by Marvel Comics. Created by cartoonists Joe Simon and Jack Kirby, the character first appeared in Captain America Comics #1 (cover dated March 1941) from Timely Comics, a predecessor of Marvel Comics.",
  },
  {
    id: "hero3",
    title: "Thor",
    image:
      "https://www.syfy.com/sites/syfy/files/styles/amp_featured_image/public/2021/04/film-review-thor-2011.jpg?h=511b6896",
    description:
      "Thor is a 2011 American superhero film based on the Marvel Comics character of the same name. Produced by Marvel Studios and distributed by Paramount Pictures,[N 1] it is the fourth film in the Marvel Cinematic Universe (MCU).",
  },
];

function HomePage(props: { heroes: HeroDetailPageProps[] }) {
  const { heroes } = props;

  const [loadedHero, setLoadedHero] = useState<HeroDetailPageProps[]>([]);
  useEffect(() => {
    setLoadedHero(HEROES);
  }, []);

  return <HeroListPage heroes={heroes} />;
}

// Server side Generation
// Will not run during the build process but instead always on the server after deployment
// Always run in the server, never in the client
// This gets called on every request
// disadvantage: Need to wait for page to be generated on every incomming request

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const req = context.req;
//   const res = context.res;
//   return {
//     props: {
//       heroes: HEROES,
//     },
//   };
// };

// Static Generation
// Data changes multiple times every second or hour...
// Pre-generate a html file, faster than regenerating and fetching data for incoming requests.
// Page will be faster because data can be cached and reused instead of regenerated all the time.

export async function getStaticProps(){
    //fetch data from API

    // always return object
    return {
        props:{
            heroes: HEROES
        },
        // depend on data change once every ...
        revalidate:10
    }
}

export default HomePage;
