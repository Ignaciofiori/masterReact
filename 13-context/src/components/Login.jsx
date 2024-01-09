import React from 'react'
import { useContext } from 'react';
import { PruebaContext } from '../context/PruebasContext';
import { useNavigate } from 'react-router-dom';


export const Login = () => {
  
  const navigate = useNavigate();
  const {usuario,setUsuario} = useContext(PruebaContext)


  const guardarDatos = e =>{
    e.preventDefault();
  
    let nuevoUsuario ={
      nombre: e.target.nombre.value,
      apellido:e.target.apellido.value,
      web:e.target.web.value
    }
    setUsuario(nuevoUsuario);

    navigate("/");
   
  }
  
  return (
    <div>
    <h1>Login</h1>
    <p>Página de Login</p>

    <form className='loginForm' onSubmit={guardarDatos}>
      <input type="text" name="nombre" placeholder='Nombre' />
      <input type="text" name="apellido" placeholder='Apellido' />
      <input type="text" name="web" placeholder='Web' />

      <input type="submit" value="Enviar" />
    </form>
  </div>
  )
}
