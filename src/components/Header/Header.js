import React from 'react'
import { useHistory, useLocation,  } from 'react-router-dom'
import { 
  HeaderContainer, 
  CatContainer, 
  LogoContainer, 
  LogoButton,
  CurrentButton,
  InactiveButton 
} from './styled'
import logo from '../../assets/logo.png'
import { goToCatScreen, goToFormScreen } from '../../routes/coordinator'

const Header = () => {
  const history = useHistory()
  const { pathname } = useLocation()
    console.log(pathname)
  
  let RenderMenu = () => {
    
    switch (pathname) {
      case "/":
        return (
          <>
          <CatContainer>
            <CurrentButton 
              onClick={() => goToCatScreen(history)}
              >
                Lista de ids
            </CurrentButton>
          </CatContainer>
          <div>
            <InactiveButton 
              onClick={() => goToFormScreen(history)}
            >
              Formulário
            </InactiveButton> 
          </div>
          </>
        )
      case "/cadastro":
        return (
          <>
          <CatContainer>
            <InactiveButton 
              onClick={() => goToCatScreen(history)}
              >
                Lista de ids
            </InactiveButton>
          </CatContainer>
          <div>
            <CurrentButton 
              onClick={() => goToFormScreen(history)}
            >
              Formulário
            </CurrentButton> 
          </div>
          </>
        )
        default:
          return (
            <>
            <CatContainer>
              <CurrentButton 
                onClick={() => goToCatScreen(history)}
                >
                  Lista de ids
              </CurrentButton>
            </CatContainer>
            <div>
              <InactiveButton 
                onClick={() => goToFormScreen(history)}
              >
                Formulário
              </InactiveButton> 
            </div>
            </>
          )
    }
  }


  return (
    <div>
      <HeaderContainer>
        <LogoContainer>
          <LogoButton onClick={() => goToCatScreen(history)}>
            <img src={logo} alt="logo cats" />
            <h1>Cats</h1>
          </LogoButton>
        </LogoContainer> 
        {RenderMenu()}     
      </HeaderContainer>
    </div>
  )
}

export default Header