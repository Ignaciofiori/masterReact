import React, { useState } from 'react'

export const Formulario = () => {
     
    const [usuario,setUsuario]= useState({})

    const conseguitDatosFormulario = e =>{
    e.preventDefault()
        
        let datos = e.target
        let user ={
            nombre: datos.nombre.value,
            apellido:datos.apellido.value,
            genero:datos.genero.value,
            biografia:datos.biografia.value,
            enviar:datos.enviar.value

        }
        setUsuario(user)

    }

    const cambiarDatos = e =>{
        let nameDelInput = e.target.name
        
        
      // usuarioParaModificar[nameDelInput]= e.target.value
      setUsuario(estadoPrevio =>{
        return{
            ...estadoPrevio,
            [nameDelInput]:e.target.value
        }
      })
    }

  return (
    <div>
         <h1>04 - Formularios</h1>
    
    {usuario.enviar&&( 
            
            <div className='usuario-info  label-gray'>
            {usuario.nombre} {usuario.apellido} es un {usuario.genero} y su biografia es esta:
            <p>{usuario.biografia}</p>

    </div>
    )}
   

    <form onSubmit={conseguitDatosFormulario}>
    <input type="text"
     placeholder='Nombre'
     name='nombre' 
     onChange={cambiarDatos}/>
    
    <input type='text' 
    placeholder='Apellido'
    name="apellido" 
    onChange={cambiarDatos}/>
    
    <select name="genero"
     onChange={cambiarDatos}>
        <option value="hombre">Hombre</option>
        <option value="mujer">Mujer</option>
    </select>

    <textarea 
    placeholder='Biografia'
    name="biografia"
    onChange={cambiarDatos}/>
    
    <input type="submit"  value="Enviar"
    name="enviar"/>
    </form>
    </div>
  )
}
