import React from 'react'
import { useState, useEffect } from 'react'
import { Global } from '../../helpers/Global'
import { Peticion } from '../../helpers/Peticion'
import { Listado } from './Listado'
import { useParams } from 'react-router-dom'

export const BusquedaArticulos = () => {

  const [articulos, setArticulos] = useState([])
  const [cargando, setCargando] = useState(true)
  const params = useParams()

  useEffect(() => {
    conseguirArticulos();
  }, [])

  useEffect(() => {
    conseguirArticulos();
    console.log(params)
  }, [params])

  const conseguirArticulos = async () => {
  
    if(!params){
      setCargando(false);
      setArticulos([]);

    }
    else{
      const  {datos,cargando} = await Peticion( Global.url+"articles/buscar/"+params.busqueda, "GET");
    console.log(datos)
    
    if (datos.status == "success") {
      setArticulos(datos.articulos);
      setCargando(false);
    }
    if(datos.status == "error"){
    
      setCargando(false);
      setArticulos([]);
    }
    }

    

  }

  return (
    <>

      <h2>Articulos</h2>
      { cargando ? "Cargando..." :
        articulos.length > 0 ?
         <Listado articulos={articulos} setArticulos={setArticulos}/> 
          : (<h2 className='noEncontrado'>No Se Han Encontrado Articulos :( </h2>)

      }
    </>
  )
}
