import React, {useEffect} from 'react';
import { useState } from "react";
import {Materia} from "./newMaterias";
import "./styleMaterias.css";
export {ListaMaterias}

function ListaMaterias() {

const [show,setShow] = useState(false);
const [users, setUsers] = useState();

const getApiData = async () => {
  const response = await fetch(
    "http://localhost:5000/materias"
  ).then((response) => response.json());
  console.log(response);
  setUsers(response);
};

useEffect(() => {
  getApiData();
}, []);

const enBruto = []
const nomMaterias = [];

users.map(user => {
    enBruto.push(user.nombre_materia)
});

enBruto.map(mater => {
    if(nomMaterias.includes(mater)){
    }
    else{nomMaterias.push(mater)}
});

    return (
<div className="lista">
    <Materia onClose = {()=> setShow(false)} show = {show}/>
    <div>
        <ul className='uli'>
           {nomMaterias && nomMaterias.map((materi) => (
           <li className='liliana'><div className = "nombres">{materi}</div></li>             
             ))}
        </ul>
    </div>
        <button className = "botonMateria" onClick={()=> setShow(true)}>Nueva materia</button>
</div>
    )}