import React, { useState, useContext } from 'react'
import { ContainerForm, InputContainer, DivInput, ButtonNext, ButtonFinish, ButtonSubmite } from './styled'
import GlobalStateContext from '../../global/GlobalStateContext'
import ModalData from '../ModalData/ModalData'

const StepThree = () => {
  const [ changeButton, setChanbutton ] = useState('Waiting') 
  const [ isModalVisible, setIsModalVisible ] = useState(false)
  const { 
    userData, 
    setUserData,
  } = useContext(GlobalStateContext)

  const onChange = (event) => {
    const { name, value } = event.target;
    setUserData({...userData, [name]: value })
  }

  const registerStep = (event) => {
    event.preventDefault()
    alert("As tres etapas foram concluidas! Caso esteja correto, clique em enviar!")
    if(changeButton === "Waiting"){
      setChanbutton("Done")
    }
  }

  const onClickSubmite = () => {
    setIsModalVisible(true)
  }

  let renderButton = () => {
    if(changeButton === "Waiting"){
      return <ButtonFinish>Conclua cadastro</ButtonFinish>
    }else{
      return <ButtonSubmite onClick={onClickSubmite} >Enviar</ButtonSubmite>
    }
  }


  return (
    <div>
      <ContainerForm onSubmit={registerStep}>
        <DivInput>
          <div>
            <InputContainer
              name={"zipCode"}
              value={userData['zipCode']}
              onChange={onChange} 
              placeholder="CEP"
              required      
              pattern={"[0-9]{5}-[0-9]{3}"}
              title={"O CEP não está em um valor valido"}      
            />
            <InputContainer
              name={"neighborhood"}
              value={userData['neighborhood']}
              onChange={onChange} 
              type="text"
              placeholder="Bairro:" 
              required 
            />
            <InputContainer
              name={"number"}
              value={userData['number']}
              onChange={onChange} 
              type="number"
              placeholder="Número:"
              required            
            />
          </div>   
          <div>
            <InputContainer
              name={"address"}
              value={userData['address']}
              onChange={onChange} 
              type="text"
              placeholder="Endereço:" 
              required 
            />
            <InputContainer
              name={"city"}
              value={userData['city']}
              onChange={onChange} 
              type="text"
              placeholder="Cidade"
              required            
            />
            <InputContainer
              name={"state"}
              value={userData['state']}
              onChange={onChange} 
              type="text"
              placeholder="Estado" 
              required 
            />
          </div>
        </DivInput>
        <ButtonNext>Avançar</ButtonNext>  
      </ContainerForm>
      {renderButton()}
      {isModalVisible ? <ModalData onClose={() => setIsModalVisible(false)}/> : null}
    </div>
  )
}

export default StepThree;