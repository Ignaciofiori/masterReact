import React from 'react'
import { useState, useEffect } from 'react'
import { Global } from '../../helpers/Global'
import { Peticion } from '../../helpers/Peticion'
import { Listado } from './Listado'
import { useParams } from 'react-router-dom'

export const Articulo = () => {

  const [articulo, setArticulo] = useState({});
  const [cargando, setCargando] = useState(true);
  const params = useParams();

  useEffect(() => {
    conseguirArticulo();
  }, []);

  const conseguirArticulo = async () => {
    const url = Global.url + "articles/uno/"+ params.id
    
    const  {datos} = await Peticion(url, "GET");
    console.log(datos)
    if (datos.status == "success") {
      setArticulo(datos.articulos);
      setCargando(false);
    }
if(datos.status == "error"){
  setCargando(false);
}

  }

  return (
    <div className='jumbo'>

      
      { cargando ? "Cargando..." :
        articulo ?
        (
          <>
          <div className='mascara'> 
          
          {articulo.imagen == "default.png" && <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS81dQ4l8Z8Wlui4ALzrIXSO0bzTzYvst2GH4tDuwqQ4_m5KdI6I3tEQrjXLss1O42O0aI&usqp=CAU" alt="imagen" />}
            
          {articulo.imagen != "default.png" && <img src={Global.url + "articles/imagen/" + articulo.imagen} alt="imagen" />}
        
          <h1>{articulo.titulo} </h1>
          <span>{articulo.fecha}</span>
          <p className='contenido-articulo'>{articulo.contenido}</p>
       
        </div>
        </>) 
          : (<h2 className='noEncontrado'>No se encontró el Articulos :( </h2>)

      }
    </div>
  )
}
