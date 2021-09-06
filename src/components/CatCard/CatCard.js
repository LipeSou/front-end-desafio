import React, { useState } from 'react'
import { CardContainer, TagsDiv, ButtonDiv } from './styled';
import SectionId from '../SectionId/SectionId';
import Down from '../../assets/down.png'

const CatCard = (props) => {
  const [ expand , setExpand ] = useState(false)
  


  const onClickExpand = () => {
    setExpand(!expand)
  }

  let componentExpand

  if(expand) {
    componentExpand = <SectionId key={props.tag} tag={props.tag}/>
  }

  return (
    <div>
      <CardContainer>
        <TagsDiv>
          <h4>{props.tag}</h4>  
        </TagsDiv>
        <ButtonDiv>
          <button onClick={onClickExpand}><img src={Down} alt="" /></button>
        </ButtonDiv>
      </CardContainer>
      {componentExpand}
    </div>
  )
}

export default CatCard;