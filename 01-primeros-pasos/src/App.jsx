
import './App.css'
import MiComponente from './MiComponente'
import { SegundoComponente } from './SegundoComponente'
import { TercerComponente } from './TercerComponente'
import { Eventos } from './Eventos'

function App() {

  const ficha_medica ={
    altura:"177cm",
    grupo:"A+",
    estado:"Saludable",
    alergias:"Ninguna"
  }

  return (
    <>
   
      <h1>Master React 1</h1>
      
      
  <MiComponente/>
<hr></hr>
  <SegundoComponente/>
<hr></hr>
    <TercerComponente
     nombre="Ignacio" apellido="Fiori" ficha={ficha_medica}
     />
<hr></hr>
  <Eventos/>
    </>
  )
}

export default App
