import React, { useMemo, useRef, useState } from 'react'

export const Tareas = () => {
  

  const[tareas,setTareas] = useState([]);
  const[contador,setContador] = useState(800)

  const borrarTarea = id =>{
let tareasNuevas = tareas.filter((tarea,indice)=>{return indice!==id })
console.log(tareasNuevas)
  setTareas(tareasNuevas)
  }
 
  const guardarTareas = e =>{
    e.preventDefault();
    let tareasActualizadas =[...tareas,e.target.tituloTarea.value]
    setTareas(tareasActualizadas)
  
  }
              
              const sumarAlContador = e =>{
              setContador(contador+1)
              }

              const contadoresPasados = acumulacion =>{
                for(let i= 0;i <= acumulacion ;i++){
                  console.log("Ejecutando acumulacion de contadores del pasado...")
                
                }
                return `Contador Manual de tareas: ${acumulacion}`
                }
              
            const memoContador = useMemo(()=>{contadoresPasados(contador)},[contador]);


    return (
    <div className='tareasContainer'> 
        <h1>Mis Tareas </h1>
        <form onSubmit={guardarTareas}>
            <input type="text"  name="tituloTarea"  placeholder='Describe la Tarea' />
            <input type="submit" value="Guardar" />
        </form>
        
        <h3>{memoContador} </h3>
        <button onClick={sumarAlContador}>Sumar</button>
        
        <h3>Lista de Tareas:</h3>
        <ul>
            {tareas.length>=1 ? (tareas.map((tarea,indice)=>{
              return <li key={indice}> {tarea} &nbsp; <button onClick={ ()=> borrarTarea(indice)}>X</button></li> }))
              :
            (<p>No Tienes Tareas Por el Momento</p>)

                
            }
        </ul>
    </div>
  )
}
