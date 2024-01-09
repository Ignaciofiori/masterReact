import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Empleados } from './Empleados'

export const Gestion= () => {

const [nombre,setNombre] = useState("");
const[pagina,setPagina]= useState(1)

const gestorInput = useRef();
const asignarGestor = (e)=>{
    setNombre(gestorInput.current.value)
}

const mostrarMensaje = useCallback(()=>{
  console.log("Hola soyel mensaje")
},[pagina])

useEffect(()=>{
  console.log("Vista de Gestion Actualizada")

},[nombre,pagina])

  return (
    <div>
       <h1>Nombre del Gestor: {nombre}</h1>
        <input type="text"ref={gestorInput} onChange={asignarGestor}  placeholder='Introduce tu nombre de gestor'/>

       <h2> Listado de Empleados</h2>
       <p>Los Usuarios son gestionados por {nombre} vienen de jsonplaceholder..</p>
       
     
        <Empleados pagina={pagina} mensaje={mostrarMensaje}/>
        <button onClick={()=>{setPagina(1)}}>Pagina 1</button>
        <button onClick={()=>{setPagina(2)}}>Pagina 2</button>
    </div>
  )
}
