import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CatScreen from '../pages/CatScreen/CatScreen'
import FormScreen from '../pages/FormScreen/FormScreen'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path= {"/"} component={CatScreen}/>
        <Route exact path= {"/cadastro"} component={FormScreen}/>
        <Route >
          <div>Erro: Página não encontrada</div>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router