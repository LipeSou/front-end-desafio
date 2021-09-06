import React, { useContext } from 'react'
import { ContainerForm, InputContainer, ButtonNext, ButtonFinish } from './styled'
import GlobalStateContext from '../../global/GlobalStateContext'

const StepTwo = () => {
  const { 
    userData, 
    setUserData,  
    setCurrentScreen, 
  } = useContext(GlobalStateContext)

  const onChange = (event) => {
    const { name, value } = event.target;
    setUserData({...userData, [name]: value })
  }

  const registerStep = (event) => {
    event.preventDefault()
    setCurrentScreen("StepThree")
    console.log("useData", userData)
  }

  return (
    <div>
      <ContainerForm onSubmit={registerStep}>
        <InputContainer
          name={"name"}
          value={userData['name']}
          onChange={onChange} 
          type="text"
          placeholder="Informe seu nome"
          required            
        />
        <InputContainer
          name={"lastName"}
          value={userData['lastName']}
          onChange={onChange} 
          type="text"
          placeholder="Informe seu sobrenome" 
          required 
        />
        <InputContainer
          name={"birthDate"}
          value={userData['birthDate']}
          onChange={onChange} 
          type="date"
          placeholder="Informe sua data de nascimento: " 
        />
        <ButtonNext>Avançar</ButtonNext>
      </ContainerForm>
      <ButtonFinish>Enviar</ButtonFinish>
    </div>
  )
}

export default StepTwo;