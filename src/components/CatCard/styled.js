import styled from 'styled-components'

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 20%;
  align-items: center;
  justify-content: center;
  width: 30vw;
  height: 50px;
  margin-top: 10px;
  border-bottom: 2px solid #A4552C;
  @media(max-width: 600px) {
    width: 70vw;
  }
;
  color: black;
`
export const TagsDiv = styled.div`
  justify-self: center;
  color: #A4552C;
;
`

export const ButtonDiv = styled.div`
  justify-self: end;
`