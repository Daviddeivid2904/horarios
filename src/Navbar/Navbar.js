import "./StyleNavbar.css"
import {NavLink} from "react-router-dom"
export default function Navbar(){
    return(
        <div className = "navcontenedor">
           <NavLink className = {({isActive}) => (isActive? "activo":"desactivo")} to ="/">Inicio</NavLink>
           <NavLink className = {({isActive}) => (isActive? "activo":"desactivo")} to ="/cursos">Cursos</NavLink>
           <NavLink className = {({isActive}) => (isActive? "activo":"desactivo")} to ="/profesores">Profesores</NavLink>
           <NavLink className = {({isActive}) => (isActive? "activo":"desactivo")} to ="/nuevaMateria">Materias</NavLink>
           <NavLink className = {({isActive}) => (isActive? "activo":"desactivo")} to ="/horarios">Horarios</NavLink>
        </div>
    )
}