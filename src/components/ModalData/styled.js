import styled from "styled-components";
import { primaryColor } from "../../constants/color";

export const Modal = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0,0,0,0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Container = styled.div`
  background-color: ${primaryColor};
  width: 60%;
  border-radius: 20px;
`

export const CloseButton = styled.button`
  width: 32px;
  height: 32px;
  left: 80%;
  top: 20px;
  display: flex;
  position: relative;
  align-items: center;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
`

export const Text = styled.p `
  font-weight: 700;
`