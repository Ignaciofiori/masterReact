import React from 'react'
import { Link } from 'react-router-dom'
export const Inicio = () => {
  return (
   
   <div className='jumbo'>
    <h2>Bienvenidos a Blogging!</h2>
    <p>Escribe a tu manera sobre lo que te apasiona.</p>
    <Link to="/articulos" className='button'>Ver más Artículos</Link>
  
   </div>
  )
}
