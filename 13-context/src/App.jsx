import React from 'react'
import './App.css'
import { AppRouter } from './routing/AppRouter'
import { PruebaContext } from './context/PruebasContext'
import { useState } from 'react'
import { useEffect } from 'react'

function App() {

  const [usuario,setUsuario] = useState({})


  useEffect(()=>{
   let usuarioLocal=JSON.parse(localStorage.getItem("usuario"));
   setUsuario(usuarioLocal)
  }
  ,[]);

    useEffect(()=>{
      localStorage.setItem("usuario", JSON.stringify(usuario))
    }
    ,[usuario]);

  return (
  <>
    <PruebaContext.Provider value={{
      usuario,
      setUsuario
    }}>
     
     <AppRouter/>

    </PruebaContext.Provider >
    
  </>
  )
}

export default App
