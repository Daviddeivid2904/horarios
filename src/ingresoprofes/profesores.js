import React, {useEffect} from 'react';
import { useState } from "react";
import {Inputs} from "./nuevoProfes";
import "./styleProfes.css";
export {ListaProfes}

function ListaProfes() {

const [show,setShow] = useState(false);
const [users, setUsers] = useState();

const getApiData = async () => {
  const response = await fetch(
    "http://localhost:5000/profesores"
  ).then((response) => response.json());
  console.log(response);
  setUsers(response);
};

useEffect(() => {
  getApiData();
}, []);


    return (
<div className="lista">
    <Inputs onClose = {()=> setShow(false)} show = {show}/>
    <div>
        <ul className='uli'>
           {users && users.map((user) => (
             <div>
                   <li className='liliana'><div className = "nombres">{user.nombre +" "+ user.apellido}</div></li> 
             </div>
           ))}
        </ul>
    </div>
        <button className = "botonAgregar" onClick={()=> setShow(true)}>Nuevo profesor</button>
</div>
    )}