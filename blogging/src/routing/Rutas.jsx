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

export const Rutas = () => {
    return (
        <BrowserRouter>
            {/*LAYOUT*/}
            <Header/>
            <Nav/>
            {/*CONTENIDO CENTRAL Y RUTAS*/}
            <section id="content" className='content'></section>

            <Routes>
                <Route path='/' element={<Inicio/>}/>
                <Route path='/inicio' element={<Inicio/>}/>
                <Route path='/articulos' element={<Articulos/>}/>
                <Route path="/crear-articulo" element={<CrearArticulo/>}/>
            </Routes>


             {/*SIDEBAR Y FOOTER*/}
             <SideBar/>
             <Footer/>

        </BrowserRouter>
    )
}
