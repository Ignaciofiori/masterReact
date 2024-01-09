import React from 'react'
import PropTypes  from 'prop-types'

export const TercerComponente = ({nombre,apellido,ficha}) => {
  
  console.log()


    return (
    <div>
        <h1>Comunicacion entre Componentes</h1>
        <h2>{nombre+" "+apellido}</h2>
        <ul>
            <li>{ficha.altura}</li>
            <li>{ficha.grupo}</li>
            <li>{ficha.estado}</li>
            <li>{ficha.alergias}</li>
        </ul>
        </div>
  )
}



TercerComponente.propTypes= {
    nombre: PropTypes.string.isRequired,
    apellido:PropTypes.string.isRequired,
    ficha:PropTypes.object
}

TercerComponente.defaultProps ={
    nombre:"Sujeto",
    apellido:"Anonimo"
}