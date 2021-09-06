import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import CatCard from '../../components/CatCard/CatCard'
import { getTags } from '../../services/requests'
import { 
  CatCardContainer, 
  Content, 
  DivText, 
  CatImagem, 
  CatImageContainer 
} from './styled'
import cat from '../../assets/cat.png'

const CatScreen = () => {
  const [ tagsNames, setTagsNames] = useState("")
  
  useEffect(() => {
    getTags(setTagsNames)
  }, []) 
  
  const tag = tagsNames && tagsNames.map((t, index) => {
    return <CatCard key={index} tag={t} />
  })

  return (
    <div>
      <Header />
      <Content>
        <div>
          <DivText>
            <i>Bem vindo</i>
            <h1>Lista de ids:</h1>
          </DivText>
          <CatCardContainer>
          {tag  ? tag : <h3>Carregando...</h3>}
          </CatCardContainer>
        </div>
        <CatImageContainer>
          <CatImagem src={cat} alt="cat" />
        </CatImageContainer>
      </Content>
    </div>
  )
}

export default CatScreen