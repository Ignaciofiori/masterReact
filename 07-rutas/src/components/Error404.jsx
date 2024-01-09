import React from 'react'
import {Link} from "react-router-dom"
export const Error404 = () => {
  return (
    <>
    <h2>Error 404</h2> 
    <p><strong>Esta pagina no existe.</strong></p>
    <Link to="/inicio">Volver al Inicio</Link>
    </>
  )
}
