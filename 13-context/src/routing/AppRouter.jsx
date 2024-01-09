import React from 'react';
import {Route,Routes,NavLink,BrowserRouter} from "react-router-dom"
import { Inicio } from '../components/Inicio';
import { Acerca } from '../components/Acerca';
import { Articulos } from '../components/Articulos';
import { Contacto } from '../components/Contacto';
import { Login } from '../components/Login';
import { useContext } from 'react';
import { PruebaContext } from '../context/PruebasContext';

export const AppRouter = () => {
  
  const {usuario,setUsuario} = useContext(PruebaContext)

  return (
<BrowserRouter>
  
  <header className='header'>
  <nav>
    
    <div className='logo'>
        <h2>Aprendiendo React Context</h2>
    </div>
    
    <ul>
      <li><NavLink to="/">Inicio</NavLink></li>
      <li><NavLink to="/articulos">Articulos</NavLink></li>
      <li><NavLink to="/acercaDe">Acerca de</NavLink></li>
      <li><NavLink to="/contacto">Contacto</NavLink></li>
      
      {usuario.nombre == null ? ( 
       
      <li><NavLink to="/login">Login</NavLink></li>)
    
      :
      (  <>
      <li> <NavLink to="/">{usuario.nombre}</NavLink></li>
      <li> <a href="#" onClick={e =>{
        e.preventDefault();
        setUsuario({})
      }}>Cerrar Sesión</a></li>
      </>)}
    
    </ul>
  </nav>
  </header>

    <section className='content'>

<Routes>
<Route path='/' element={<Inicio/>}/>
<Route path='/inicio' element={<Inicio/>}/>
<Route path='/acercaDe' element={<Acerca/>}/>
<Route path='/articulos' element={<Articulos/>}/>
<Route path='/contacto' element={<Contacto/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='*' element={<div><h2>ERROR 404: Esta Página No Existe</h2></div>}/>
</Routes>

    </section>

</BrowserRouter>
  )
}
