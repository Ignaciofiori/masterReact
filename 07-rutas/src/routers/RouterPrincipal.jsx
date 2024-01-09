import React from 'react'
import {Routes,Route,NavLink,BrowserRouter, Navigate} from "react-router-dom"
import {Inicio} from "../components/Inicio"
import { Articulos } from '../components/Articulos'
import { Contacto } from '../components/Contacto'
import { Error404 } from '../components/Error404'
import { Persona } from '../components/Persona'
import { PanelControl } from '../components/PanelControl'
import {InicioPanel} from "../components/panel/Inicio"
import { Crear } from '../components/panel/Crear'
import {Gestion} from "../components/panel/Gestion"
import {Acerca} from "../components/panel/Acerca"

export const RouterPrincipal = () => {
  return (
    <BrowserRouter>
    <h1>Cabecera</h1>
    <hr />
    <nav>
    <ul className='listadoNav'>
      
      <li>
        <NavLink to="/inicio" 
        className={({isActive})=> isActive ? "activado" : ""}
        >Inicio</NavLink>
      </li>
      
       <li>
        <NavLink to="/articulos"
        className={({isActive})=>isActive ? "activado":""}
        >Articulos</NavLink>
      </li>
       
       <li>
       <NavLink to="/contacto"
       className={({isActive})=>isActive ? "activado":""}>
        Contacto</NavLink>
      </li>
      
      <li>
      <NavLink to="/panel"
       className={({isActive})=>isActive ? "activado":""}>
        Panel de Control</NavLink>
      </li>
    
    </ul>
    </nav>

    <Routes>
    <Route path='/' element={<Inicio/>} />
    <Route path='/inicio' element={<Inicio/>}/>
    <Route path='/articulos' element={<Articulos/>}/>
    <Route path='/contacto' element={<Contacto/>} />
    <Route path='/persona/:nombre/:apellido' element={<Persona/>} />
    <Route path="/persona/:nombre/" element={<Persona/>} />
    <Route path="/persona" element={<Persona/>} />
    <Route path="/redirigir" element={<Navigate to="/persona/Persona/Random"/>} />
    
    <Route path={'/panel/*'} element={<PanelControl/>}>
      <Route path="inicio" element={<InicioPanel/>}/>
      <Route path="crear-articulos" element={<Crear/>}/>
      <Route path="gestion-de-usuarios" element={<Gestion/>}/>
      <Route path="acerca-de" element={<Acerca/>}/>
    </Route>

    
    <Route path='*' element={<Error404/>} />

 
    </Routes>

    </BrowserRouter>
  )

} 
