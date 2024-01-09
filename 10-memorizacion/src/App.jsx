
import './App.css'
import { Gestion } from './components/Gestion'
import { Tareas } from './components/Tareas'

function App() {
  

  return (
    <> 
    {/*EJERCICIO CON HOOK USEMEMO   <Tareas/>*/   }
    {/*<Tareas/>*/}


      {/*EJERCICIO CON METODO MEMO PARA COMPONENTES PARA QUE NO SE RENDERIZE COMPONENETES DE MANERA INECESARIA*/ }
       <Gestion/> 
      
    </>
  )
}

export default App
