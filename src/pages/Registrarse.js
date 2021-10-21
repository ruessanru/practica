import React, { useEffect, useState } from 'react'
import {Alert, Card, Col, Container, Row } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { RegistrarseForm } from '../components/formularios/RegistrarseForm'
import validator from 'validator'
import { isObjetoVacio } from '../connection/helpers/isObjetoVacio'
import { useDispatch, useSelector } from 'react-redux'
import { loginUsuario, registroUsuario } from '../connection/autenticacionAcciones'



function Registrarse() {

    const [errores, setErrores] =useState({})
    const dispatch =useDispatch()

    const conectado=useSelector(state=>state.auth.conectado);
    const history=useHistory();

    useEffect(() => {
        if(conectado) {
            history.push("/");
        }
        });

    const registro = ({userName, userEmail, password, password2})=>{

        const errores ={}
        setErrores(errores)

        if(validator.isEmpty(userName)){
            errores.userName= "El campo del usuario no puede estar vacío"
        }
        
        if(!validator.isEmail(userEmail) ){
            errores.userEmail= "Correo inválido"
        }
        
        if(validator.isEmpty(password) || (!validator.isLength(password, {min:8, max:20}))){
            errores.password= "El campo de la contraseña no puede estar vacío y con una longitud mínima de 8"
        }
        if(!validator.equals(password,password2)){
           errores.password2="Las contraseñas no coinciden" 
        }

        if(!isObjetoVacio(errores)){
            setErrores(errores);
            return;
        }
        dispatch(registroUsuario(userName, userEmail, password))
        .then(response=>{
            dispatch(loginUsuario(userName,password))
        })
        .catch(error =>{
            setErrores({registroError: error.response.data.message})
        })




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
                   <Card body className= "mt-5 shadow p-3 mb-5 bg-white rounded">
                       {errores.registroError && <Alert variant ="danger">{errores.registroError}</Alert>}
                       
                       <RegistrarseForm errores={errores} enviarCallback={registro}></RegistrarseForm>

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

