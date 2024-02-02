import React from 'react'
import { useState, useEffect } from 'react'
import { Global } from '../../helpers/Global'
import { Peticion } from '../../helpers/Peticion'
import { Listado } from './Listado'

export const Articulos = () => {

  const [articulos, setArticulos] = useState([])
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    conseguirArticulos();
  }, [])

  const conseguirArticulos = async () => {
    const url = Global.url + "articles"
    
    const  {datos} = await Peticion(url, "GET");
    console.log(datos)
    if (datos.status == "success") {
      setArticulos(datos.articulos);
      setCargando(false);
    }

  }

  return (
    <>

      <h2>Articulos</h2>
      { cargando ? "Cargando..." :
        articulos.length >= 1 ?
         <Listado articulos={articulos} setArticulos={setArticulos}/> 
          : (<h2 className='noEncontrado'>No Hay Articulos :( </h2>)

      }
    </>
  )
}
