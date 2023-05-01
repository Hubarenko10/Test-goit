import styled from "styled-components";


export const CardListBox = styled.ul`
list-style-type: none;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
gap: 10px;
& > li {
    width: calc(33.33% - 10px);
    margin-bottom: 20px;
   
  }
`