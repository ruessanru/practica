import axios from 'axios'
import { LOGIN_ENDPOINT } from './helpers/endpoints'

export const loginUsuario = (datosUsuario) => dispatch => {

    console.log(datosUsuario)

    return new Promise ((resolve, reject) => {

         axios.post(LOGIN_ENDPOINT,datosUsuario,{
             headers:{'Accept':'application/json', 'Content-Type':'application/json'}
         }).then(response =>{
             console.log(response)
             resolve(response)
         
         }).catch(err =>{
             reject(err)
          })
    })

}
