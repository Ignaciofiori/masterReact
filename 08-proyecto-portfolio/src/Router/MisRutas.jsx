import React from 'react'
import { BrowserRouter,NavLink, Navigate, Route,Routes } from 'react-router-dom';
import { Inicio } from '../components/Inicio';
import { Portfolio } from '../components/Portfolio';
import { Servicios } from '../components/Servicios';
import { Curriculum } from '../components/Curriculum';
import {Contacto} from "../components/Contacto"
import { HeaderNav } from '../components/layout/HeaderNav';
import { Footer } from '../components/layout/Footer';
import { Proyecto } from '../components/Proyecto';

export const MisRutas = () => {
  return (
  <BrowserRouter>
  {/*HEADER Y NAVEGACION */}
    <HeaderNav/>

   {/*CONTENIDO CENTRAL */}
      <section className='content'>
            <Routes>
        <Route path='/' element={<Navigate to="/inicio"/> }/>
        <Route path='/inicio' element={<Inicio/>  }/>
        <Route path='/portafolio' element={<Portfolio />  }/>
        <Route path='/servicios' element={<Servicios/>  }/>
        <Route path='/curriculum' element={<Curriculum/>  }/>
        <Route path='/contacto' element={<Contacto/>  }/>
        <Route path='/proyecto/:id' element={<Proyecto/>  }/>
        <Route path='*' element={
        <div>
        <h1 className='heading'> Erorr 404</h1>  
        </div>
        }/>


        </Routes>
        </section>
    {/*FOOTER */}
    <Footer/>

  </BrowserRouter>
  )
}
