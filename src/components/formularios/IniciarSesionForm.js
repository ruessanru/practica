import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'


function IniciarSesionForm({errores, enviarCallback}) {

   const [userName,setUserName]= useState("")
   const [password,setPassword]= useState("")

   const enviarFormulario= (e)=> {
      e.preventDefault();
      enviarCallback ({userName, password})
   }

    return (
        
           <Form onSubmit={enviarFormulario}>
                <Form.Group className="mb-3" controlId="userName">
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control 
                         type="text" 
                         placeholder="Ingrese su nombre de usuario"
                         value={userName}
                         onChange={e=>setUserName(e.target.value)}
                         isInvalid={errores.userName}
                        
                     />
                     <Form.Control.Feedback   type="invalid">
                         {errores.userName}
                     </Form.Control.Feedback>
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Ingrese su contraseña"
                        value={password}
                        onChange={e=>setPassword(e.target.value)}
                        isInvalid={errores.password}
                        
                    />
                    <Form.Control.Feedback   type="invalid">
                         {errores.password}
                    </Form.Control.Feedback>
                </Form.Group>
                
                <Button variant="success" type="submit" className= "mt-3">
                    Iniciar Sesión
                </Button>
            </Form> 
       
    )
}

export  {IniciarSesionForm}
