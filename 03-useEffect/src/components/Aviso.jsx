import React, { useEffect } from 'react'

export const Aviso = () => {

useEffect(()=>{
    alert("El COMPONENTE AVISO ESTA MONTADO")

    return ()=>{
        alert("EL COMPONENTE SE HA DESMONTADO")
    }
        },[])

    const alerta = e =>{
alert("Sigue Asi")
}

  return (
    <div>
        <h3>Hola Ignacio, Como Va?</h3>
        <button onClick={alerta}>Mostrar alerta</button>
    </div>
  )
}
