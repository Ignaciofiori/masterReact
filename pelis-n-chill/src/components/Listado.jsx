import React, { useEffect, useState } from 'react'
import { EditarFormulario } from './EditarFormulario';

export const Listado = ({listadoState,setListadoState}) => {


//const [listadoState,setListadoState] = useState([])
const [editar,setEditar] = useState(0)

useEffect(()=>{
    conseguirPeliculas();
    console.log("Componente de Listado de Peliculas Montado Correctamente")
},[])
   



const conseguirPeliculas = ()=>{

    let peliculas = JSON.parse(localStorage.getItem("peliculas"));

    console.log(peliculas)
    
    setListadoState(peliculas)
    
    return peliculas

}


const borrarPelicula = (id) =>{
 //conseguir pelis almacenadas
let peliculasAlmacenadas = conseguirPeliculas();

 //filtrar la que no quiero
let nuevoArrayPeliculas = peliculasAlmacenadas.filter(peli => peli.id !== parseInt(id))
console.log(nuevoArrayPeliculas)

 //actualizar listado
setListadoState(nuevoArrayPeliculas)
localStorage.setItem("peliculas",JSON.stringify(nuevoArrayPeliculas))

}

  return (
   <>

{listadoState != null &&  (
    
    listadoState.map((pelicula,i)=>{
    return (<article key={i+pelicula}  className="peli-item">
    <h3 className ="title">{pelicula.titulo}</h3>
    <p className="description">{pelicula.descripcion}</p>
    <button className="edit" onClick={()=>{
        setEditar(pelicula.id)
    }}>Editar</button>
    <button className="delete" onClick={ ()=>borrarPelicula (pelicula.id)}>Borrar</button>
   
   
    {/*Formulario de editar*/}
    {editar == pelicula.id && (
       
       <EditarFormulario pelicula={pelicula} 
       conseguirPeliculas={conseguirPeliculas}
       setEditar={setEditar}
       setListadoState={setListadoState}
       />
    )}
</article>
)
})
)
   
}


{(listadoState == null || listadoState.length == 0 )&& (<div className='listadoVacio'>
        <p> <strong>No hay pelicula disponibles</strong></p>
        </div> )}
       
   </>
  )
}
