import React from 'react';
import {Inputs} from "./ingresoprofes/profes";
import {Inicio} from "./Inicio/inicio";
import {Game} from "./Horarios/horarios";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
export {App}
function App() {
  return (
    <Router>
      <Routes>
        <Route element = {<Inputs/>} path = "/profesores"/> 
        <Route element = {<Inicio/>} path = "/"/>
        <Route element = {<Game/>} path = "/horarios"/>
     </Routes>
    </Router>
  )
}

    //<Game/>
    //<Inicio/>
