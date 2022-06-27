import React, {useEffect} from 'react';
import "./styleInicio.css"
import Aos from "aos";
import "aos/dist/aos.css";
const Inicio = () =>{

    useEffect(()=>{
        Aos.init({ duration: 2000});
    },[]);
    return(
        <div className = "body">
            <div className = "espacio">
                <button className = "button">Hacer Horarios</button>
                <button className = "button">horarios finalizados</button>
                <button className = "button">Quienes somos</button>
                        {/* <div data-aos="fade-up">
                        <h1>HOLA</h1>
                        </div> */}
            </div>
        </div>
    )
}

export {Inicio};