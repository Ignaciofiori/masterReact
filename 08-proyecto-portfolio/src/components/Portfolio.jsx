import React from 'react'
import { Link } from 'react-router-dom'
import { ListadoProyectos } from './ListadoProyectos'

export const Portfolio = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Portafolio </h1>

     <ListadoProyectos />
    </div>
  )
}
