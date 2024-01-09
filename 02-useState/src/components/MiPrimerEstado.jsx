import React,{useState} from 'react'

export const MiPrimerEstado = () => { 
  let [nombre,setNombre]=useState("Ignacio Fiori")
 
  
  const cambiarNombre = (e,nombreFijo)=>{
    setNombre(nombreFijo)
  }

    return (
    <div>
        <h3>
            Component : Mi Primer Estado
        </h3>
        <strong> {nombre}</strong>
        <hr></hr>
        <br></br>
        <input type="text" placeholder='Nuevo Nombre aqui'
         onChange={e=>cambiarNombre(e,e.target.value)}/>
        <button onClick={e=>cambiarNombre(e,"Ignacio Fiori")}>resetear nombre  </button>
    </div>
  )
}
