import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export const PanelControl = () => {
  return (
    <div>
        <h1>Panel Control</h1>
        <p>Elige una de estas opciones</p>
<nav>
    <ul>
        <li><NavLink to="/panel/inicio">Inicio</NavLink></li>
        <li><NavLink to="/panel/crear-articulos">Crear Articulos</NavLink></li>
        <li><NavLink to="/panel/gestion-de-usuarios">Gestion de Usuarios</NavLink></li>
        <li><NavLink to="/panel/acerca-de">Acerca de</NavLink></li>
    </ul>
</nav>

    <div>
      {/*ACA QUIERO CARGAR LOS COMPONENTES DE LAS SUBRUTAS */}
      <Outlet/>
    </div>

    </div>
  )
}
