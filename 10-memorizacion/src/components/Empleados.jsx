import React, { useEffect, useState } from 'react'

export const Empleados = React.memo(

            ({pagina,mensaje}) => {

                const [empleados,setEmpleados] = useState([]);
               

            
            
            useEffect(()=>{
                conseguirEmpleados(pagina);
                
             },[pagina])


            const conseguirEmpleados= async(p) =>{
                const url = "https://reqres.in/api/users?page="+p
                const peticion = await fetch(url)
                const{data:empleados} = await peticion.json();
                console.log("Se ejecuto Funcion AJAX")
                setEmpleados(empleados) 
                console.log("Se renderizo correctamente la lista de empleados")
            } 

            mensaje();
            
            return (
            <div>
                <h3 className='empleadosH3'>Empleados:</h3>
                <p> Mostrando la pagina: {pagina}</p>
                <ul className='empleados'>
                    {empleados.length >= 1 ?
                    (empleados.map(empleado=>{
                    return <li key={empleado.id+empleado.first_name}>{empleado.first_name+" "+ empleado.last_name} </li>})):(<li className='errorEmpleadosLista'>No hay Empleados Disponibles</li>)}
                </ul>
               
            </div>
        )
}
)