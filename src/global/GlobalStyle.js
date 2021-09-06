import  { createGlobalStyle } from "styled-components";
import { secundaryColor } from "../constants/color";

export  const GlobalStyle = createGlobalStyle`
body {
  width: 100vw;
  margin: 0;
  padding: 0;
  background-color: #fffdfc;
  font-family: 'Open Sans', Helvetica, sans-serif;
  color: ${secundaryColor};
}
h1,h2,h3,p{
  margin: 0;
  padding: 0;
}
button{
  border: none;
  background-color: transparent;
  &:hover{
    cursor: pointer
  }
}
`