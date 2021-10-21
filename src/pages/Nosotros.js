import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'

function Nosotros() {
    return (
        <div>
            <Row className="align-items-center ">
            <Col  className = "sm-7  align-items-center " >
                   <div className= "mt-5 ">
                          <h3>NOSOTROS</h3><br></br><br></br>
                          <h5> 
                          Somos un equipo de programadores provenientes de varios lugares de Colombia, que tiene como objetivo principal desarrollar una aplicaión Web que permita recopilar información sobre nuestras escuelas rurales de nuestro país. En Colombia existen más de 2’400.000 de estudiantes de colegios rurales del país, solo el 17 por ciento de ellos tiene acceso a Internet y computador, es decir, aproximadamente 408.000 niños. No solamente nuestro proyecto contemplará la conectividad sino que abarcaremos un poco la recopilación de información de las necesidades básicas como tambien el recurso humano.</h5><br></br><br></br>

                          

                          
                    </div> 
                </Col>
                <Col sm="5"><br></br><br></br>
                   <div className= "mt-5 shadow p-3 mb-5 bg-white rounded">
                      <Image src="../../escuela.png "alt="escuela rural"width="100%"  />
                    </div> 
                </Col>
                
            </Row>
        </div>
    )
}

export {Nosotros}
