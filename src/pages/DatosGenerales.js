import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { DatosGeneralesForm } from '../components/formulariosRurales/DatosGeneralesForm'

function DatosGenerales() {
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
                
                    <h3 className="text-center">DATOS GENERALES DE LA INSTITUCION</h3>
                </div>
            </Col>
            </Row>
            <Row>
                <Col sm="12">
                    <div className= "mt-5">
                    </div> 
                </Col>
            </Row>
        
            
           
            <Row>
                <Col sm="12" md={{span:8, offset:2}} lg={{span:6, offset:3}}>
                   <Card body> 

                       <DatosGeneralesForm></DatosGeneralesForm>

                   </Card>
                </Col>
            </Row>

        </Container>
            
           
           
       
    )
}

export {DatosGenerales}
