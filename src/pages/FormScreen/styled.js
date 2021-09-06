import styled from "styled-components";
import { primaryColor, secundaryColor, tertiaryColor } from "../../constants/color";


export const Container = styled.div`
  display: grid;
  grid-template-columns: 10% 15% 1fr;
  @media(max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const ImageDiv = styled.div`
  grid-column-start: 2;
`

export const Image = styled.img`
  width: 30vw;
`

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`

export const ButtonContainer = styled.div`
  display: flex;  
  align-items: center;

`

export const ButtonActive = styled.button`
    background-color: ${primaryColor};
    height: 50px;
    font-weight: 800;
    font-size: 18px;
    width: 100px;
    border-radius: 15px;
    margin: 15px;
    p{
      color: #ce7b2a;
    }
`

export const ButtonInactive = styled.button`
    background-color: #46cbb1;
    height: 50px;
    border-radius: 15px;
    color: ${tertiaryColor};
    font-size: 18px;
    width: 100px;
    margin: 15px;
    transition: 0.8s;
    i{
      color: ${secundaryColor};
    }&:hover{
    background-color: ${primaryColor};
    border: 1px solid ${secundaryColor};
  }
`