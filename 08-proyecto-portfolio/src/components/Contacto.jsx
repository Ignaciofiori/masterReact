import React from 'react'

export const Contacto = () => {
  return (
    <div className='page'>
    <h1 className='heading'>Contacto</h1>
    
    <form className='contacto' action='mailto:nacho.fiori@hotmail.com.ar'>
      
      <input type="text" placeholder='Nombre' />
      <input type="text" placeholder='Apellido' />
      <input type="text" placeholder='Email' />
      <input type="textarea" placeholder='Motivo de Contacto' />
      <input type="submit" value="Enviar "/>

    </form>
  </div>
  )
}
