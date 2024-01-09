import React from 'react'
import {useState} from "react"

export const Buscador = ({listadoState,setListadoState}) => {

const [busqueda,setBusqueda] = useState("")
const [noEncontrado, setNoEncontrado] = useState(false)

const buscarPeli = (e) =>{
  //Crear estado y actualizarlo
setBusqueda(e.target.value)

  //FILTRAR BUSCAR COINCIDENCIAS
let pelisEncontradas = listadoState.filter( peli =>{
  return peli.titulo.toLowerCase().includes(busqueda.toLocaleLowerCase())
});

if(busqueda.length <= 1 || pelisEncontradas <= 0) {
  pelisEncontradas = JSON.parse(localStorage.getItem("peliculas"))
  setNoEncontrado(true)
}else{
  setNoEncontrado(false)
}

setListadoState(pelisEncontradas)

}
  
  return (
    

  <div className="search">
      <h3 className="title">Buscador: {busqueda}</h3>
      
      {(noEncontrado == true && busqueda.length > 1 )&&( 
      <span className='noEncontrado'>No se ha encontrado ninguna Pelicula</span>)}
     
      <form  onSubmit={(e)=>{e.preventDefault()}}>
          <input type="text" 
                id="search"
                name='busqueda'
                autoComplete='off'
                value={busqueda}
                onChange={buscarPeli}/>
         
          <button id="search-button">Buscar</button>
      </form>

  </div>
    
  )
}
