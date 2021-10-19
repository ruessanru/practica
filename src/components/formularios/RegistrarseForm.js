import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'


function RegistrarseForm({errores, enviarCallback}) {

   const [userName,setUserName]= useState("")
   const [userEmail,setUserEmail]= useState("")
   const [password,setPassword]= useState("")
   const [password2,setPassword2]= useState("")

   const enviarFormulario= (e)=> {
      e.preventDefault();
      enviarCallback ({userName,userEmail, password, password2})
   }


    return (
        <Form onSubmit={enviarFormulario}>
                <Form.Group className="mb-4" controlId="userName">
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

                <Form.Group className="mb-4" controlId="userEmail">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control 
                         type="email" 
                         placeholder="Ingrese su correo"
                         value={userEmail}
                         onChange={e=>setUserEmail(e.target.value)}
                         isInvalid={errores.userEmail}
                        
                     />
                     <Form.Control.Feedback   type="invalid">
                         {errores.userEmail}
                     </Form.Control.Feedback>

                    
                </Form.Group>

                <Form.Group className="mb-4" controlId="password">
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

                <Form.Group className="mb-4" controlId="password2">
                    <Form.Label>Confirmar contraseña</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Ingrese su contraseña"
                        value={password2}
                        onChange={e=>setPassword2(e.target.value)}
                        isInvalid={errores.password2}
                        
                    />
                    <Form.Control.Feedback   type="invalid">
                         {errores.password2}
                    </Form.Control.Feedback>
                   
                </Form.Group>
                
                <Button variant="success" type="submit" className="mt-3">
                    Crear Usuario
                </Button>
            </Form> 
    )
}

export {RegistrarseForm}
