import React,{  useContext }  from 'react'
import Header from '../../components/Header/Header'
import StepOne from '../../components/StepOne/StepOne'
import StepTwo from '../../components/StepTwo/StepTwo'
import StepThree from '../../components/StepThree/StepThree'
import { 
  Container, 
  ImageDiv, 
  Image, 
  ButtonActive, 
  ButtonContainer, 
  ButtonInactive, 
  SelectContainer 
} from './styled'
import GlobalStateContext from '../../global/GlobalStateContext'
import formImg from '../../assets/img-login.png'

const FormScreen = () => {
  const { 
    currentScreen, 
    setCurrentScreen,
  } = useContext(GlobalStateContext)

  const changeStepOne = () => {
    setCurrentScreen("StepOne")
  }

  const changeStepTwo = () => {
    setCurrentScreen("StepTwo")
  }

  const changeStepThree = () => {
    setCurrentScreen("StepThree")
  }
  
  let chooseStep = () => {
    switch (currentScreen) {
      case "StepOne":
        return (
        <SelectContainer>
          <ButtonContainer>
            <ButtonActive onClick={changeStepOne}><p>1</p></ButtonActive>
          </ButtonContainer>
        <StepOne/>
        </ SelectContainer>
        )
      case "StepTwo":
        return (
          <SelectContainer>
            <ButtonContainer>
              <ButtonInactive onClick={changeStepOne}><i>√</i></ButtonInactive>
              <ButtonActive onClick={changeStepTwo}><p>2</p></ButtonActive>
            </ButtonContainer>
          <StepTwo/>
          </ SelectContainer>
          )
      case 'StepThree':
        return (
          <SelectContainer>
            <ButtonContainer>
              <ButtonInactive onClick={changeStepOne}><i>√</i></ButtonInactive>
              <ButtonInactive onClick={changeStepTwo}><i>√</i></ButtonInactive>
              <ButtonActive onClick={changeStepThree}><p>3</p></ButtonActive>
            </ButtonContainer>
          <StepThree/>
          </ SelectContainer>
          )
        default:
        return <div>ERRO</div>
    }
  }
  

  return (
    
    <div>
      <Header />
      <Container>
        <ImageDiv>
          <Image src={formImg} alt="Formulario imagem" />
        </ImageDiv>
        <SelectContainer>
          <h2>Cadastro</h2>
          {chooseStep()}
        </SelectContainer>
      </Container>
      
    </div>   
  )
}

export default FormScreen