import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HomeHeader = styled.h1`
text-align: center;
margin-bottom: 20px;
`

export const Heading = styled.h2`
font-size: 2.5rem; 
font-weight: bold;
text-align: center; 
margin-bottom: 2rem;
`

export const Paragraph = styled.p`
font-size: 1.5rem; 
text-align: center;
 margin-bottom: 1.5rem;;
`
 
export const Community = styled(NavLink)`
  background-color: #8ABE6D;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: block;
  font-size: 16px;
  cursor: pointer;
  border-radius: 10px;
  transition: all 0.3s ease;
  margin: auto;
  &:hover {
    background-color: #B5DAA7;
    transform: scale(1.1);
  }
`;