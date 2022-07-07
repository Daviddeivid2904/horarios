import React from 'react';
import {Inputs} from "./ingresoprofes/profes";
import {Inicio} from "./Inicio/inicio";
import {Game} from "./Horarios/horarios";
import {Materia} from "./ingresomaterias/newMaterias";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
export {App}
function App() {
  return (
    <Router>
      <Routes>
        <Route element = {<Inputs/>} path = "/profesores"/> 
        <Route element = {<Inicio/>} path = "/"/>
        <Route element = {<Game/>} path = "/horarios"/>
        <Route element = {<Materia/>} path = "/nuevaMateria"/>
     </Routes>
    </Router>
  )
}

    //<Game/>
    //<Inicio/>
