import React, { useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import IniciarSesionForm from '../components/formularios/IniciarSesionForm'
import validator from 'validator'


function Actualizar() {

    const [errores, setErrores] =useState({})

    const login = ({userName, password})=>{

        const errores ={}
        setErrores(errores)

        if(validator.isEmpty(userName)){
            errores.userName= "El campo del usuario no puede estar vacío"
        }
        if(validator.isEmpty(password)){
            errores.password= "El campo de la contraseña no puede estar vacío"
        }

        console.log({userName,password})

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
                    
                       <h3>Bienvenido, Inicia tu Sesión...</h3>
                    </div>
                </Col>
            </Row>

            <Row>
                
                <Col sm="12" md={{span:8, offset:2}} lg={{span:6, offset:3}}>
                   <Card body>
                       
                       <IniciarSesionForm errores={errores} enviarCallback={login}></IniciarSesionForm>
                       <div className= "mt-3">
                       <Link to={"/registrarse"}>¿No tienes cuenta? Regístrate Aquí</Link>
                       </div>
                   </Card>

                </Col>

            </Row>
        </Container>
  
    )
}

export {Actualizar}

