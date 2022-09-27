import React, {useState, useEffect} from 'react';
import "./styleMaterias.css"

const Editar = props =>{
    const [nombreMateria, setNombreMateria] = useState("redes");
    const [horas, setHoras] = useState(1);
    const [seguida, setSeguida] = useState(false);
    const [users, setUsers] = useState([{nombre_materia:"none",id_materia:0}],[]);


    const fetchData = async() => {
      fetch( "http://localhost:5000/Materia/"+props.id_materia)
        .then(response => {
          return response.json()
        })
        .then(data => {
          setUsers(data)
          console.log(data)
        })
    }

    useEffect(() => {
      fetchData();
      console.log(users)
    }, []);

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(seguida)
      fetch('http://localhost:5000/editarMaterias/'+props.id_materia, {
      method: 'PUT',
      body: JSON.stringify({
        nombre_materia: nombreMateria,
      }),
      headers: {
        'Content-Type': 'application/json'// AQUI indicamos el formato
      }
    })
    .then(function(response) {
      return response.text();
    })
    .then(function(data) {
      console.log(data);
    })
    .catch(function(error) {
      console.error(error);
    })

    }
    if(!props.show){
      return null
    }

    return(
<div className = "shadowMateria">
  <form className="materiabody">
        <label>ingrese nombre de la materia:
          <input 
            type="text" 
            defaultvalue= {"users[0].nombre_materia"}
            onChange={(e) => setNombreMateria(e.target.value)}
          />
        </label>

        <br></br>  <br></br>  <br></br>

        <label> puede ser continua?
          <input 
            type="checkBox" 
            value={seguida}
            onChange={(e) => setSeguida(e.target.checked)}
            checked = {seguida}
          />
        </label>
        
        <br></br>  <br></br>  <br></br>

        <label>horas por semana:
          <input 
            type="number" 
            min = "1"
            value={horas}
            onChange={(e) => setHoras(e.target.value)}
          />
        </label>

        <br></br>  <br></br>  <br></br>

        <button onClick={handleSubmit} >Guardar</button>
        <button onClick = {props.onClose}className = "boton">Cerrar</button>      </form>
 </div>
    )
}
export {Editar}
