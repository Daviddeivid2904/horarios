import React from 'react';
import {Inputs} from "./ingresoprofes/nuevoProfes";
import {ListaProfesores} from "./ingresoprofes/profesores";
import {Inicio} from "./Inicio/inicio";
import {Game} from "./Horarios/horarios";
import {Materia} from "./ingresomaterias/newMaterias";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
export {App}
function App() {
  return (
    <Router>

      <Navbar/>

      <Routes>
        <Route element = {<ListaProfesores/>} path = "/profesores"/> 
        <Route element = {<Inicio/>} path = "/"/>
        <Route element = {<Game/>} path = "/horarios"/>
        <Route element = {<Materia/>} path = "/nuevaMateria"/>
     </Routes>
    </Router>
  )
}

    //<Game/>
    //<Inicio/>
