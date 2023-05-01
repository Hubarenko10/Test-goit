import { Link } from "react-router-dom";
import styled from "styled-components";

export const BackLinkRef = styled(Link)`
  display: flex;
  align-items: center;
  color: #0077cc;
  text-decoration: none;
  font-size: 20px;
  margin-right: 10px;
  &:not(:last-child){
    margin-right: 10px;
}  
  &:hover {
    color: #0055aa;
    text-decoration: underline;
    cursor: pointer;
  }
`;
export const LoadMoreButton = styled.button`
  display: block;
  margin: 0 auto;
  padding: 12px 24px;
  background-color: #471ca9;
  border: none;
  border-radius: 20px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #5736a3;
  }
`;