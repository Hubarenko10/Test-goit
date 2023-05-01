import styled from "styled-components"
export const CardBox = styled.div`
position: relative;
width: 380px;
height: 499px;
background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
border-radius: 20px;
margin-left: auto;
margin-right: auto;
`

export const Logo = styled.img`
padding-top: 20px;
padding-left: 20px;
`
export const Hero = styled.img`
display: flex;
margin-left: auto;
margin-right: auto;
`
export const Line = styled.p`
position: absolute;
background-color: #EBD8FF;
&:before{
content: "";
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), 
inset 0px -1.71846px 3.43693px #AE7BE3, 
inset 0px 3.43693px 2.5777px #FBF8FF;
}

`