import styled from "styled-components";
import { primaryColor, secundaryColor } from "../../constants/color";

export const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 10% 300px 1fr 140px 100px 10%;
  height: 15vh;
  align-items: center;
  a{
    text-decoration: none;
    color: ${secundaryColor};
  }@media(max-width: 600px) {
    grid-template-columns: 5% 1fr 1fr 1fr;
  }
`


export const LogoContainer = styled.div`
  grid-column-start: 2;
  
`

export const LogoButton = styled.button`
  display: flex;
  h1{
    margin-left: 7px;
  }
`

export const CurrentButton = styled.button`
  color: ${secundaryColor};
  font-weight: 500;
  font-size: 20px;
  border-bottom: 4px solid ${primaryColor};
`

export const InactiveButton = styled.button`
  color: ${secundaryColor};
  font-weight: 500;
  font-size: 20px;
  transition: 0.2s;
  &:hover{
    border-bottom: 4px solid ${primaryColor};
  }
`

export const CatContainer = styled.div`
  grid-column-start: 4;
  @media(max-width: 600px) {
    grid-column-start: 3;
  }
`
