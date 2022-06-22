import { Box } from "@mui/material"
import { HeroDetailPageProps } from "./HeroItem"

function HeroDetailPage (props:HeroDetailPageProps){
    const {title, image, description} = props
    return (
        <Box>
            <img src={image} alt= {title}/>
            <h1> {title} </h1>
            <p>{description}</p>
        </Box>
    )
}

export default HeroDetailPage