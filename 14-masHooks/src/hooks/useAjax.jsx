import { useState,useEffect } from "react"

export const useAjax = (url) =>{
    
    const [estado,setEstado] = useState({
        datos: null,
        cargando:true
      });
    
      const getData = async()=>{
    
        setEstado({
          ...estado,
          cargando:true
        });
    
        setTimeout(async()=>{
          const peticion = await fetch(url);
          const {data} = await peticion.json()
         
          setEstado({
            datos:data,
            cargando:false
          });
          console.log(data)
          console.log(peticion)
        },2000)
      }    

      useEffect(()=>{
        getData()
      },[url])
    

    return{
        datos:estado.datos,
        cargando:estado.cargando
    }
}