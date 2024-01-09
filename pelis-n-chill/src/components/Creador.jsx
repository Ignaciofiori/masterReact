import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage'

export const Creador = ({setListadoState}) => {
const [peli,SetPeli] = useState({
  titulo:"",
  descripcion:""
})


let titulo = "Añadir Pelicula"

const conseguirDatosForm = e =>{
  e.preventDefault()
  //Conseguir Datos del Formulario
  
  let target = e.target
  let titulo =target.titulo.value
  let descripcion = target.descripcion.value

  //Crear objeto de la pelicula  a Guardar 

  let pelicula = {
    id:new Date().getTime(),
    titulo,
    descripcion
  }
  //Guardar pelicula en estado
SetPeli(pelicula)

//Actualizar el estado
setListadoState((loQueEstabaAntes=>{
  return [...loQueEstabaAntes,pelicula]
}))

//guardar en el local storage
GuardarEnStorage("peliculas",pelicula)
GuardarEnStorage("copiaDatos",pelicula)

}


  return (
<div className="add">
      <h3 className="title"> {titulo}</h3>
      <strong>
      {(peli.titulo && peli.descripcion)&& "Has creado la pelicula: " + peli.titulo}
      </strong>
      <form onSubmit={conseguirDatosForm}>
          <input type="text" 
          placeholder="Titulo" 
          id='titulo'
          name='titulo'/>

          <textarea
          id='descripcion'
          name='descripcion' 
          placeholder="Descripcion"></textarea>
          
          <input type="submit"
          id='save' 
          value="Guardar"/>
      </form>
  </div>
  )
}
