import React from 'react'
import { Button, Col, Image, Row } from 'react-bootstrap'

function Home() {
    return (
        <div>
            <Row className="align-items-center ">
                <Col sm="7"><br></br><br></br>
                   <div className= "mt-5 shadow p-3 mb-5 bg-white rounded">
                      <Image src="../../imagen escuela.jpg "alt="escuela rural"width="100%"  />
                    </div> 
                </Col>
                <Col  className = "sm-5  align-items-center " >
                   <div className= "mt-5 ">
                          <h5> 
                          En COLOMBIAexisten más de 2’400.000 de estudiantes de colegios en zona rural
                          de los cuales solo el 17 % cuentan con el rercuso más utilizado en la actualidad:   El INTERNET.<br></br><br></br>

                          Debemos conocer aún más de la situación de estas instituciones.<br></br> <br></br> <i>¡Ingresa y haz parte del cambio!</i></h5><br></br><br></br>

                          <Button variant="success" type="submit" href="/registrarse"  size="lg">
                            Regístrate
                          </Button>

                          
                    </div> 
                </Col>
            </Row>
        </div>
    )
}

export {Home}

