import styled from "styled-components";
import { primaryColor, secundaryColor, tertiaryColor } from "../../constants/color";


export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 35vw;
`
export const InputContainer = styled.input`
  background-color: #efebf3;
  width: 95%;
  height:40px;
  margin-top: 15px;
  padding-left: 10px;
  border: 1px solid ${tertiaryColor} ;
  border-radius: 4px;
  font-size: 14px;
  color: #787191;
`

export const ButtonDiv = styled.div`
  display: flex;
  
`

export const ButtonNext = styled.button`
  color: ${secundaryColor};
  width: 100%;
  height:40px;
  border-radius: 12px;
  border: 1px solid ${tertiaryColor};
  margin-top: 10px;
  margin-right: 20px;
  margin-left: 20px;
  font-size: 14px;
  transition: 0.8s;
  &:hover{
      background-color: ${secundaryColor};
      color: white;
    }
`

export const ButtonFinish = styled.button`
  background-color:  rgba(254,204,127,0.3);
  color: ${tertiaryColor};
  width: 100%;
  height:40px;
  border-radius: 12px;
  margin-top: 10px;
  font-size: 14px;
  &:hover{
      cursor: not-allowed
    }
`