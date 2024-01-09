import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MiPrimerEstado } from './components/MiPrimerEstado'
import { Ejercicio } from './components/Ejercicio'
function App() {
const date = new Date();
const yearActual = date.getFullYear() 
console.log(yearActual)
  return (
    <div className="wrapper">
  
      <h1>02 UseState</h1>
     <MiPrimerEstado/>
     <Ejercicio year={yearActual}/>
    </div>
  )
}

export default App
