import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import HeroDetailPage from "../../components/heroes/HeroDetailPage";

function HeroDetail() {
    const route = useRouter()

  return (
    <HeroDetailPage
      image="https://i.pinimg.com/originals/c0/67/65/c06765090902846c8ff44454d56e14ce.jpg"
      title="Super Man"
      description="Description"
    />
  );
}

export async function getStaticPaths(){
  return{
    fallback:false,
    paths:[
      {
        params:{
          heroId:'hero1'
        },
      },
      {
        params:{
          heroId:'hero2'
        },
      },
    ]
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const heroId = context.params!.heroId

    console.log(heroId);
    
    return {
        props:{
            heroData:{
                id: heroId,
                image:"https://i.pinimg.com/originals/c0/67/65/c06765090902846c8ff44454d56e14ce.jpg",
                title:"Super Man",
                description:"Description"
            }
        }
    }
};

export default HeroDetail;
