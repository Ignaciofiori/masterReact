import { useState } from 'react'

export const useMayus = (texto) => {
    
  const [miTexto,setMiTexto]= useState(texto)

    const mayusculas = (valor) =>{
       setMiTexto(texto.toUpperCase());
    }
      
    const minusculas = (valor) =>{
       
        setMiTexto(texto.toLowerCase());
    }

    const concatenar = (added)=>{
      
        setMiTexto(texto + added)
        console.log(miTexto)
      }
      
    


  return {
    estado:miTexto,
    mayusculas,
    minusculas,
    concatenar
  }

}