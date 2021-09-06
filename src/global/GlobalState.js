import React from 'react'
import { useState } from 'react'
import GlobalStateContext from './GlobalStateContext'

const GlobalState = (props) => {
  const [ currentScreen , setCurrentScreen ] = useState("StepOne")
  const [ userData, setUserData ] = useState({
    address: "",
    birthDate: "",
    city:"",
    confirmation:"" ,
    email:"" ,
    lastName:"" ,
    name:"" ,
    neighborhood:"" ,
    number:"" ,
    password:"" ,
    state:"" ,
    zipCode:"" 
  }) 
  const [ finalData, setFinalData ] = useState({})
  
  const data = {
    currentScreen, 
    setCurrentScreen, 
    userData, 
    setUserData, 
    finalData, 
    setFinalData
  }

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  )
}

export default GlobalState