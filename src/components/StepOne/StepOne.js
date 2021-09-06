import React,{  useContext }  from 'react'
import { 
  ContainerForm, 
  InputContainer, 
  ButtonNext,
  ButtonFinish
 } from './styled'
import GlobalStateContext from '../../global/GlobalStateContext'

const StepOne = () => {
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
    if(userData.password !== userData.confirmation){
      alert('Senhas diferentes');
  }else{
    setCurrentScreen("StepTwo")
  } 
  }

  return (
    <div>
    <ContainerForm onSubmit={registerStep}>
     
        <InputContainer
          name={"email"}
          value={userData['email']}
          onChange={onChange} 
          type="email"
          placeholder="Informe seu e-mail"
          required            
        />
        <InputContainer
          name={"password"}
          value={userData['password']}
          onChange={onChange} 
          type="password"
          placeholder="Informe sua senha" 
          required 
        />
        <InputContainer
          name={"confirmation"}
          value={userData['confirmation']}
          onChange={onChange} 
          type="password"
          placeholder="Confirme a senha"  
          required
        />
      
        <ButtonNext >Avançar</ButtonNext>
        
    </ContainerForm>
    <ButtonFinish>Conclua cadastro</ButtonFinish>
    </div>
  )
}

export default StepOne;