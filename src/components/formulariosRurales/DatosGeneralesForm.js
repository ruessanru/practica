import React from 'react'
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'


function DatosGeneralesForm({errores, enviarCallback}) {
    return (
        <Form>
            
            <Form.Group className="mb-3" controlId="departamento">
                    <Form.Label>Departamento</Form.Label>
                    <Form.Control 
                         type="text" 
                         placeholder="Ingrese departamento"
                         
                        
                     />
              
            </Form.Group>

            <Form.Group className="mb-3" controlId="municipio">
                <Form.Label>Municipio</Form.Label>
                <Form.Control 
                     type="text" 
                     placeholder="Ingrese municipio"

                 />

            </Form.Group>

            <Form.Group className="mb-3" controlId="nombreInstitucion">
                <Form.Label>Nombre de la Institución</Form.Label>
                <Form.Control 
                     type="text" 
                     placeholder="Ingrese nombre de la Institución"

                 />

            </Form.Group>

            <Form.Group className="mb-3" controlId="codigo">
                <Form.Label>Código DANE</Form.Label>
                <Form.Control 
                     type="text" 
                     placeholder="Ingrese código"

                 />

            </Form.Group>

            <Form.Group className="mb-3" controlId="nombreRector">
                <Form.Label>Nombre del Rector de la Institución</Form.Label>
                <Form.Control 
                     type="text" 
                     placeholder="Ingrese Nombre"

                 />

            </Form.Group>

            <Form.Group className="mb-3" controlId="direccion">
                <Form.Label>Direccion</Form.Label>
                <Form.Control 
                     type="text" 
                     placeholder="Ingrese Dirección"

                 />

            </Form.Group>

            <Form.Group className="mb-3" controlId="correo">
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control 
                     type="email" 
                     placeholder="Ingrese correo "

                 />

            </Form.Group>

            <Form.Group className="mb-3" controlId="telefono">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control 
                     type="text" 
                     placeholder="Ingrese número telefónico"

                 />

            </Form.Group>
            <Form.Group className="mb-3" controlId="nivel">
                <Form.Label>Nivel de la Institución</Form.Label>
                <Form.Control 
                     type="text" 
                     placeholder="Seleccione nivel"

                 />

            </Form.Group>

            <Form.Group className="mb-3" controlId="estado">
                <Form.Label>Estado de la Institución</Form.Label>
                <Form.Control 
                     type="text" 
                     placeholder="Seleccione estado"

                 />

            </Form.Group>
            

            
            <Button variant="success" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export {DatosGeneralesForm}

