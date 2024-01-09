import React from 'react'
import { Link } from 'react-router-dom'
import { ListadoProyectos } from './ListadoProyectos'

export const Inicio = () => {
  return (
    <div className='home'>
      <h1>
        Hola, <strong>Soy Ignacio Fiori</strong> y soy Desarrollador Web en Buenos Aires, 
        y ofrezco mis servicios de  <strong>programación</strong> y <strong>desarrollo </strong>en todo tipo de proyectos web.
      </h1>

    <h2 className='title'>
      Te ayudo a crear tu sitio o aplicación web, tener más visibilidad y relevancia en internet. <Link to="/contacto"> Contacta conmigo. </Link> 
    </h2>

    <section className='lastWorks'>
    
    <h2 className='heading'> Algunos de mis Proyectos:</h2>
    
    <p>Estos son algunos de mis trabajos de Desarrollo web</p>
    
   <ListadoProyectos limite="2"/>
    
    </section>
    </div>
  )
}
