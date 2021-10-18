import React, { useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { RegistrarseForm } from '../components/formularios/RegistrarseForm'
import validator from 'validator'
import { isObjetoVacio } from '../connection/helpers/isObjetoVacio'


function Registrarse() {

    const [errores, setErrores] =useState({})

    const login = ({userName, userEmail, password, password2})=>{

        const errores ={}
        setErrores(errores)

        if(validator.isEmpty(userName)){
            errores.userName= "El campo del usuario no puede estar vacío"
        }
        
        if(validator.isEmpty(userEmail)){
            errores.userEmail= "El campo del correo no puede estar vacío"
        }
        
        if(validator.isEmpty(password)){
            errores.password= "El campo de la contraseña no puede estar vacío"
        }
        if(validator.equals(password,password2)){
            
        }else{
            errores.password2="Las contraseñas no coinciden"
        }

        if(!isObjetoVacio(errores)){
            setErrores(errores);
            return;
        }





        //console.log({userName, userEmail, password, password2})

    }

    return (
     
        <Container>
            <Row>
                <Col sm="12">
                   <div className= "mt-5">
                    </div> 
                </Col>
            </Row>
             <Row>
                <Col sm="12">
                    <div  >
                    
                       <h3>Regístrate...</h3>
                    </div>
                </Col>
            </Row>

            <Row>
                
                <Col sm="12" md={{span:8, offset:2}} lg={{span:6, offset:3}}>
                   <Card body>
                       
                       <RegistrarseForm errores={errores} enviarCallback={login}></RegistrarseForm>
                       <div className= "mt-3">
                       <Link to={"/login"}>¿Ya tienes cuenta? Inicia sesión Aquí</Link>
                       </div>
                   </Card>

                </Col>

            </Row>
        </Container>
  
    )
}

export {Registrarse}

