import React, { useId } from 'react'

export const MiComponente = () => {
  {/*Identificador unico que se puede usar tambien en el backend*/}
    const id = useId();
    const segundoId = useId();

    console.log(segundoId)
    
    return (
    <div>
        <h1>Hook UseId</h1>
        <input type="text" name="nombre" placeholder='Nombre' id={id}/>
    </div>
  )
}
