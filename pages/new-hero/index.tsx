import { HeroDetailPageProps } from "../../components/heroes/HeroDetail";
import HeroFormPage from "../../components/heroes/HeroForm";

function NewHeroPage(){

    function handelAddHero(dataHero: HeroDetailPageProps){
        console.log(dataHero);
        

    }

    return <HeroFormPage onSubmit={handelAddHero}/>
}
export default NewHeroPage