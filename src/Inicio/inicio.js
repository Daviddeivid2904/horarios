import React, {useEffect} from 'react';
import "./styleInicio.css"
import Aos from "aos";
import "aos/dist/aos.css";
import { NavLink } from 'react-router-dom';
function Inicio () {

    useEffect(()=>{
        Aos.init({ duration: 2000});
    },[]);

    return(
        <div className = "body">
            <div className = "espacio">
                <button className = "button" data-aos="fade-down" >Hacer Horarios</button>
                <button className = "button" data-aos="zoom-in"><NavLink style={{textDecoration : 'none'}} className = 'texto' to = "/horarios">Horarios finalizados </NavLink> </button>
                <button className = "button" data-aos="fade-up">Quienes somos</button>
            </div>
        </div>
    )
}

export {Inicio};