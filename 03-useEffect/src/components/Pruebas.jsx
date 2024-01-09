import React,{useState,useEffect} from 'react'
import { Aviso } from './Aviso'


export const Pruebas = () => {

const [usuario,setUsuario] =useState("Ignacio Fiori")
const [fecha,setFecha]= useState("11-02-1999")
const [contador,setContador]= useState(0)

const cambiarFecha = (e)=>{

  setFecha(new Date().toLocaleDateString())
}
const modificarUsuario =(e)=>{
    setUsuario(e.target.value)
}
//cuando se carga
useEffect(()=>{
    console.log("COMPONENTE CARGADO EXITOSAMENTE")
},[])
//cuando se cambia calor de usuario  como indica el array
useEffect(()=>{
    console.log("USUARIO MODIFICADO EXITOSAMENTE")
    setContador(contador+1)
    console.log(`HAZ MODIFICADO ${contador} VECES EL USUARIO`)
},[usuario])

  return (
    <div>
    <h2>Use Effect</h2>
    <p>
    <strong className={contador <= 10?"label":"label-green"}>{usuario}</strong>
    <hr></hr>
    <input placeholder="Modifica el Usuario" type="text" onChange={modificarUsuario} />
    <strong className='label'>{fecha}</strong>
    <hr></hr>
    <button onClick={cambiarFecha}>Cambiar Fecha</button>
    </p>

{usuario == "IGNACIO" && <Aviso/>}

    </div>
  )
}
