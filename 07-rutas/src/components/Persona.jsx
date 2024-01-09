import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const Persona = () => {
 let {nombre="No hay ",apellido="Persona Disponible"} = useParams()
const navegar = useNavigate()

const enviar = (e)=>{
    e.preventDefault();
    let nombre = e.target.nombre.value;
    let apellido = e.target.apellido.value;
    let url = `/persona/${nombre}/${apellido}`;

    if(nombre.length <= 0 || apellido.length <= 0) {navegar("/inicio")}
    else{navegar(url)}
}
  return (
    <>
    <h2>{nombre +" " + apellido}</h2>
    <p>Esta es la pagina de {nombre+" " + apellido}</p>

    <form onSubmit={enviar} >
        <input type="text" name='nombre' />
        <input type="text"  name="apellido"/>
        <input type="submit" name='enviar' value="Enviar" />
    </form>
    </>
  )
}
