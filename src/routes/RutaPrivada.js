import React from 'react'
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

function RutaPrivada({component: Component, ...restPro}) {

    const conectado = useSelector(state=>state.auth.conectado);

    return (
        
        <Route
            {...restPro}
            render={
            (propiedades) => conectado === true 
            ? <Component {...propiedades}/>
            : <Redirect to="/login"/>
            }
        />
    )
}

export {RutaPrivada}
