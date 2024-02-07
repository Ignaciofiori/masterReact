import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { Inicio } from '../components/pages/Inicio'
import { Articulo } from '../components/pages/Articulo'
import { Articulos } from '../components/pages/Articulos'
import { Header } from '../components/layout/Header'
import { Nav } from '../components/layout/Nav'
import { SideBar } from '../components/layout/SideBar'
import { Footer } from '../components/layout/Footer'
import {CrearArticulo} from "../components/pages/CrearArticulo"
import { BusquedaArticulos } from '../components/pages/BusquedaArticulos'
import { EditarArticulo } from '../components/pages/EditarArticulo'

export const Rutas = () => {
    return (
        <BrowserRouter>
            {/*LAYOUT*/}
            <Header/>
            <Nav/>
            {/*CONTENIDO CENTRAL Y RUTAS*/}
            <section id="content" className='content'>
            <Routes>
                <Route path='/' element={<Inicio/>}/>
                <Route path='/inicio' element={<Inicio/>}/>
                <Route path='/articulos' element={<Articulos/>}/>
                <Route path="/crear-articulo" element={<CrearArticulo/>}/>
                <Route path="/buscar/:busqueda?" element={<BusquedaArticulos/>}/>
                <Route path="/articulo/:id" element={<Articulo/>}/>
                <Route path="/editar/:id" element={<EditarArticulo/>}/>
                <Route path="*" element={
                    <div className='jumbo'>
                        <h1>Error 404</h1>
                    </div>
                }/>
            </Routes>
            </section>


             {/*SIDEBAR Y FOOTER*/}
             <SideBar/>
             <Footer/>

        </BrowserRouter>
    )
}
