
import React from 'react';
import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navegacion } from '../layouts/Navegacion';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Home } from '../pages/Home';
import { Nosotros } from '../pages/Nosotros';
import { Actualizar } from '../pages/Actualizar';
import { Registrarse } from '../pages/Registrarse';
import { Consultar } from '../pages/Consultar';
import { Contacto } from '../pages/Contacto';
import { DatosGenerales } from '../pages/DatosGenerales';
import { RutaPrivada } from './RutaPrivada';
import { Provider } from 'react-redux';
import { store } from '../store';
import { comprobarToken } from '../connection/helpers/comprobarToken';
import {CuestionarioConectividad} from '../pages/CuestionarioConectividad'
comprobarToken()

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
            <div>
              <Navegacion/>
            </div>
            <Container>
              <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/nosotros" component={Nosotros}></Route>
                <Route exact path="/login" component={Actualizar}></Route>
                <Route exact path="/registrarse" component={Registrarse}></Route>
                <Route exact path="/consultar" component={Consultar}></Route>
                <Route exact path="/contacto" component={Contacto}></Route>
                <RutaPrivada exact path="/datos" component ={DatosGenerales}></RutaPrivada>
                <RutaPrivada exact path="/conectividad" component ={CuestionarioConectividad}></RutaPrivada>
              </Switch>
            </Container>
            
      
      </BrowserRouter>
    </Provider>   
    
      
      

   
    
    
  );
}

export default App;
