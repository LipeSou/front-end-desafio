import styled from "styled-components";
import { primaryColor } from "../../constants/color";

export const Content = styled.div`
  display: grid;
  grid-template-columns: 35% 30% 10%;
  justify-content: center;
  align-items: center;
  @media(max-width: 600px) {
    grid-template-columns: 45% 30% 10%;
  }
  `

export const DivText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`

export const CatCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${primaryColor};
  padding: 10px;
  border-radius: 20px;
  color: #A4552C;
  @media(max-width: 600px) {
    margin-top: 50px;
    width: 180%;
  }
  `
export const CatImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
`

export const CatImagem = styled.img`
  margin-left: 70px;
  width: 100%;
`