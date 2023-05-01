import { CardBox, Hero, Logo } from "./CardStyled"
import logo from '../../Icons/Logo.svg'
import hero from '../../Icons/hero.png'
import UserProfile from "components/UserProfile/UserProfile"
import { Description } from "components/Description/Description"
export const Card = ({id,tweets,name,avatar,followers}) =>{
return(
    <CardBox>
        <Logo src={logo} alt="logo" />
        <Hero src={hero} alt="" />
        <UserProfile avatar={avatar}/>
        <Description id={id} tweets={tweets} name={name} followers={followers}/>
    </CardBox>
    )
}