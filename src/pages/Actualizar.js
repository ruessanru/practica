import React, { useEffect, useState } from 'react'
import { Alert, Card, Col, Container, Row } from 'react-bootstrap'
import { Link,useHistory } from 'react-router-dom'
import {IniciarSesionForm} from '../components/formularios/IniciarSesionForm'
import validator from 'validator'
import { isObjetoVacio } from '../connection/helpers/isObjetoVacio'
import { useDispatch, useSelector } from 'react-redux'
import { loginUsuario } from '../connection/autenticacionAcciones'


function Actualizar() {

    const [errores, setErrores] =useState({})
    const dispatch =useDispatch()

    const conectado=useSelector(state=>state.auth.conectado);
    const history=useHistory();

    useEffect(() => {
        if(conectado) {
            history.push("/");
        }
        });

    const login = ({userName, password})=>{

        const errores ={}
        setErrores(errores)

        if(validator.isEmpty(userName)){
            errores.userName= "El campo del usuario no puede estar vacío"
        }
        if(validator.isEmpty(password)){
            errores.password= "El campo de la contraseña no puede estar vacío"
        }
        if(!isObjetoVacio(errores)){
            setErrores(errores);
            return;
        }



        //console.log({userName,password})
        dispatch(loginUsuario(userName,password))
        .then(response=>{

        })
        .catch(error =>{
            setErrores({autenticacion: "No se puede iniciar sesión con los datos ingresados"})
        })

    }

    return (
     
        <Container >
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
                    </div><br></br>
                </Col>
            </Row>

            <Row>
                
                <Col sm="12" md={{span:8, offset:2}} lg={{span:6, offset:3}}>
                   <Card body className= "mt-5 shadow p-3 mb-5 bg-white rounded">
                       {errores.autenticacion && <Alert variant ="danger">{errores.autenticaion}</Alert>}
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

