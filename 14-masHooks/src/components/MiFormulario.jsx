import React, { useState } from 'react';
import { useForm } from '../hooks/useForm';

export const MiFormulario = () => {

  const {estado,cambiado,enviado} = useForm({})
  return (
    <div>
        <h1>Formulario </h1>
        <p>Para guardar datos de un curso</p>
        <pre>{JSON.stringify(estado)}</pre>
        <form className='miFormulario' onSubmit={enviado}>
            <input type="text" onChange={cambiado} placeholder='titulo del curso' name="titulo" />
            <input type="number" onChange={cambiado} placeholder='año de publicacion' name='anio' />
           <textarea name="descripcion" onChange={cambiado}  placeholder='descripcion'/>
           <input type="text" name='autor' onChange={cambiado} placeholder='autor' />
           <input type="email" name='email' onChange={cambiado} placeholder='email' />
           <input type="submit" value="Enviar"/>

        </form>
       
    </div>
  )
}
