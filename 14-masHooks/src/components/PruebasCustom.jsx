import React, { useState } from 'react'
import { useMayus } from '../hooks/useMayus'

export const PruebasCustom = () => {
    


   const {estado,mayusculas,minusculas,concatenar} = useMayus("Ignacio Fiori")
   
    
    return (
    <div>
        <h1>Pruebas Custom Hooks</h1>

         <h2>{estado}</h2>

          <button onClick={mayusculas}>Mayusculas</button>
          <button onClick={minusculas}>Minusculas</button>
          
          <button onClick={e=>{concatenar(" -Probando Hooks")}}>concatenar</button>

    </div>
  )
}
