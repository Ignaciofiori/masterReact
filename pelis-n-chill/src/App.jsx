import React from "react"
import {Buscador} from "./components/Buscador"
import { Creador } from "./components/Creador";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Nav } from "./components/Nav";
import { Listado } from "./components/Listado";
import { useState } from "react";


function App() {

const [listadoState,setListadoState] = useState([])

  return (
   
         <div className="layout">
  
<Header/>

<Nav/> 
   
<section className="content">
<Listado listadoState={listadoState} setListadoState={setListadoState} />
</section>

<aside className="lateral">
  
<Buscador listadoState={listadoState} setListadoState={setListadoState}/>
<Creador setListadoState={setListadoState}/>
  
</aside>
    
   
<Footer/>

        </div>
  )
}

export default App
