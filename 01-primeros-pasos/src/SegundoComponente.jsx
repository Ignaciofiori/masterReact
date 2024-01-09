import React from 'react'

export const SegundoComponente = () => {
  let libros= ["Harry Potter Vol 1","El Señor de los Anillos","Los Juegos del Hambre"]
  
    return (
    <div className='segundo-componente'>
        <h1>Listado de Libros</h1>
        
        {libros.length > 0 ? (
            <ul>
            {libros.map((libro,i)=>{
                return <li key={i}> {libro}</li>
            })}
            </ul>
        ):(
            <p> No hay Libros</p>)}
</div>
  )
}
