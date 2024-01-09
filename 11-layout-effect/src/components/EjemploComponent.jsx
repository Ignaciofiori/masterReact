import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
{/*USE EFFECT SE EJECUTA DESPUES DEL LAYOUT SIEMPRE, Y PREVALECE SOBRE EL LAYOUT, EL LAYOU SE EJECUTA ANTES DE CARGARSE LA PAG */}
export const EjemploComponent = () => {

    const [mostrar,setMostrar]=useState(false)
    const caja = useRef();
    const boton = useRef()

    useEffect(()=>{
        console.log("USE EFFECT COMPONENT CARGADO");
      if(caja.current == null) return
      const {bottom} = boton.current.getBoundingClientRect();
      console.log(bottom)

      setTimeout(()=>{
        caja.current.style.top = `${bottom+45}px`
        caja.current.style.left = `${bottom+45}px`
      },1000);

      
    },[mostrar])

    useLayoutEffect(()=>{
        console.log("USE LAYOUT COMPONENT CARGADO");
 
    },[])
  

  return (
    <div>
        <h1>Ejemplo useEffect y UseLayoutEffect</h1>
    <button ref={boton} onClick={()=>{setMostrar(prev => !prev )}}>Mostrar Caja</button>
        {mostrar &&  (<div id='caja' ref={caja}> HOLA SOY UN MENSAJE</div>)
        }

    </div>
  )
}
