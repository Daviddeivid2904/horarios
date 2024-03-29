import React from 'react';
//import {Inputs} from "./ingresoprofes/nuevoProfes";
import {ListaProfes} from "./ingresoprofes/profesores";
import {ListaCursos} from "./Cursos/cursos";
import {Inicio} from "./Inicio/inicio";
import {Game} from "./Horarios/horarios";
import {ListaMaterias} from "./ingresomaterias/materias";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
export {App}
function App() {
  return (
    <Router>

      <Navbar/>

      <Routes>
        <Route element = {<ListaProfes/>} path = "/profesores"/> 
        <Route element = {<ListaCursos/>} path = "/cursos"/> 
        <Route element = {<Inicio/>} path = "/"/>
        <Route element = {<Game/>} path = "/horarios"/>
        <Route element = {<ListaMaterias/>} path = "/nuevaMateria"/>
     </Routes>
    </Router>
  )
}

    //<Game/>
    //<Inicio/>
