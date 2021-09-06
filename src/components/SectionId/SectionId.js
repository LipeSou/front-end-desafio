import React, { useEffect, useState } from 'react'
import { getIds } from '../../services/requests'
import { Container } from './styled'

const SectionId = (props) => {
  const [ listId, setListId ] = useState([])
  const tag = props.tag

  useEffect(() => {
    getIds(setListId)
  }, [])
  
  
  let catListTag = listId && listId.filter(list => list.tags.includes(tag))

  let renderList =  catListTag.map((list, index) => {
    return <h4 key={index}>{list.id}</h4>
  })  


  return (
    <Container>
      {renderList}
    </Container>
  )
}

export default SectionId