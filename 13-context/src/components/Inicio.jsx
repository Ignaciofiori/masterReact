import React from 'react'
import { useContext } from 'react'
import { PruebaContext } from '../context/PruebasContext'

export const Inicio = () => {
  const {usuario,setUsuario} = useContext (PruebaContext) 
  return (
    <div>
    <h1>Inicio</h1>
    <p>Nombre: {usuario.nombre}</p>
    <p>Apellido: {usuario.apellido}</p>
    {/*<p>Página de Inicio de <strong>{contextoCompartido.titulo}</strong></p>*/}
  </div>
  )
}
