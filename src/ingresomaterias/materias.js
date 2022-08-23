import React from 'react';
import { useState } from "react";
import {Materia} from "./newMaterias";
import "./styleMaterias.css";
export {ListaMaterias}

function ListaMaterias() {

const [show,setShow] = useState(false);

fetch("brain-planner.sql")
.then(response => response.json())
.then(data=>{
console.log(data)
})
.catch(err=>console.log(err))

    return (
<div>
    <div className='listamaterias'>

    </div>
    <div className = "newMateria">
        <button className = "botonMateria" onClick={()=> setShow(true)}>Nueva materia</button>
    </div>
    <Materia onClose = {()=> setShow(false)} show = {show}/>
</div>
    )}