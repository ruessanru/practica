
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



function App() {
  return (
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

          </Switch>
        </Container>
        
   
   </BrowserRouter>
      
    
      
      

   
    
    
  );
}

export default App;
