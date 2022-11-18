import React, {useEffect} from 'react';
import "./styleInicio.css"
import Aos from "aos";
import "aos/dist/aos.css";
function Inicio () {

    useEffect(()=>{
        Aos.init({ duration: 2000});
    },[]);

    return(
        <div className='inicioBody'>
            <h1 className='quienesSomos'>¿Quienes somos?</h1>
            <p className='textoInicio'>Somos un grupo conformado por 5 alumnos de la escuela ort </p>
            <h1 className='quienesSomos'>¿Que hacemos?</h1>
            <p className='textoInicio'>Nosotros creamos Time-Planner, una página web la cual en base a un algoritmo que creamos y a la información que se ingresa sobre la institución y sus respectivos docentes, genera los horarios de los cursos para poder ser utilizados durante todo el año escolar</p>
        </div>
        // <div className = "iniciobodyBotones">
        //     <h1>¿Quienes somos?</h1>
        //     {/* <div className = "inicioespacio">
        //         <button className = "iniciobutton" data-aos="fade-down" >Hacer Horarios</button>
        //         <button className = "iniciobutton" data-aos="zoom-in">
        //             <NavLink style={{textDecoration : 'none'}} className = 'texto' to = "/horarios">Horarios finalizados </NavLink> 
        //         </button>
        //         <button className = "iniciobutton" data-aos="fade-up">Quienes somos</button>
        //     </div> */}
        // </div>
    )
}

export {Inicio};