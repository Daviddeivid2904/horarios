//import express from 'express';
//import bodyParser from 'body-parser';
//import userRoutes from './rutas/users.js';
const mysql = require('mysql');
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;
var bodyParser = require('body-Parser');


app.use(bodyParser.json());
app.use(cors());



const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rootroot',
    database: 'brain-planner'
});


//ruta

app.get('/', (req, res) => {
    res.send('Welcome to my API!');
})

app.get('/Profesores', (req, res) => {
    //var userId = 'some user provided value';
    const sql = 'SELECT * FROM profesores'; //+ connection.escape(userId); 
    connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        } else {
            res.send('No se encontraron resultados en su busqueda.');
        }
    });
});

app.get('/Materias', (req, res) => {
    
    const sql = 'SELECT * FROM materia'; 
    connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        } else {
            res.send('No se encontraron resultados en su busqueda.');
        }
    });
});


app.get('/Profesores/:id', (req, res) => {
    const id_profesor = req.params.id;
    const sql = 'SELECT * FROM profesores WHERE id_profesor =' + connection.escape(id_profesor);
    connection.query(sql, (error, result) => {
        if (error) throw error;
        if (result.length > 0) {
            res.json(result);
        } else {
            res.send('No se encontraron resultados en su busqueda.');
        }
    });
});

app.post('/infoProfesor', (req, res) => {
    const sql = 'INSERT INTO profesores  SET ?';
    const infoProfesor = {
        nombre: req.body.nombre,
        apellido: req.body.apellido
    };
    connection.query(sql, infoProfesor, (error) => {
        if (error) throw error;
        // Obtener lastInsertedID
        connection.query("SELECT id_profesor FROM profesores ORDER BY id_profesor DESC LIMIT 1", null, (error, results) => {
            if (error) throw error;
            // Query en la tabla relacion con profesor y materia
            let id = results[0].id_profesor;

            let sql2 = "INSERT INTO profesor_materia SET ?";
            const infoRelacion = {
                id_materia: req.body.id_materia,
                id_profesor: id // el id profesor lo necesito para que se me asignen los dias y bloques correspondientes para cada profesor
            };
            connection.query(sql2, infoRelacion, error => {
                if (error) throw error;
            });

            const d = req.body.disponibilidad;
            const dia = ["lunes", "martes", "miercoles", "jueves", "viernes"];

            for (let i = 0; i < d.length; i++) {
                for (let j = 0; j < d[i].length; j++) {
                    let dia_actual = dia[i];
                    let bloque_actual = j + 1;

                    console.log("Guardando el bloque: " + bloque_actual + " del dia: " + dia_actual + " del profe: " + id)

                    if (d[i][j]) {
                        connection.query(
                            "INSERT INTO curso_materia SET ?",
                            {
                                dia: dia_actual,
                                id_profesor: id
                            }, error => {
                                if (error) throw error;
                            }
                        );
                    }
                }
            }
            res.sendStatus(200);
        });
    });
});

app.delete('/deleteProfe/:id_profesor', (req, res) =>{
    const{ id_profesor }= req.params;
    const sql = `DELETE FROM profesores WHERE id_profesor = ` + connection.escape(id_profesor);
    connection.query(sql, error => {
        if (error) {
            res.send("Error")
        } else {
            res.send("Se elimino el profesor")
        }
        
    });
});

app.post('/infoMateria', (req, res) => {
    const sql = 'INSERT INTO materia SET ?';
    //if (req.body.horas_por_semana <= 0 || req.body.horas_por_semana > 6) return res.status(400).send("Error");
    const infoMateria = {
        nombre_materia: req.body.nombre_materia,
        continuidad: req.body.continuidad,
       // horas_por_semana: req.body.horas_por_semana
    };
    connection.query(sql, infoMateria, error => {
        if (error) {
            response.status(400).send(error.details[0].message);
        } else {
            res.send("Se creo correctamente la materia")
        }
    
    });
});

app.delete('/deleteMateria/:id_materia', (req, res) =>{
    const{ id_materia }= req.params;
    const sql = `DELETE FROM materia WHERE id_materia = ` + connection.escape(id_materia);
    connection.query(sql, error => {
        if (error) {
            res.send("Error")
        } else {
            res.send("Se elimino la materia")
        }
        
    });
});


app.put('/editarDatos/:id_profesor', (req, res) => {
    const { id_profesor } = req.params;
    const { nombre, apellido } = req.body;
    

    const sql = `UPDATE profesores  SET nombre = '${nombre}', apellido= '${apellido}' WHERE id_profesor = ` + connection.escape(id_profesor);
    
    connection.query(sql, error => {
        if (error) throw error;
        res.send("Se modifico correctamente el profesor")
    });
           
});

app.post('/cursos', (req, res) => {
    const sql = 'INSERT INTO curso SET ?';
    const infocurso = {
        nombre_curso: req.body.nombre_curso
    };
    connection.query(sql,infocurso, error => {
        if (error) throw error;
        res.send("Se creo correctamente el curso")
    });
});

app.get('/GetProfes', (req, res) => {
    const sql = 'SELECT nombre, apellido FROM profesores'; //+ connection.escape(userId); 
    connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        } else {
            res.send('No se encontraron resultados en su busqueda.');
        }
    });
});

app.get('/GetMaterias', (req, res) => {
    const sql = 'SELECT nombre_materia FROM materia'; //+ connection.escape(userId); 
    connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        } else {
            res.send('No se encontraron resultados en su busqueda.');
        }
    });
});

app.put('/editarMaterias/:id_materia', (req, res) => {
    const { id_materia } = req.params;
    const { nombre_materia } = req.body;
    

    const sql = `UPDATE materia  SET nombre_materia = '${nombre_materia}' WHERE id_materia = ` + connection.escape(id_materia);
    
    connection.query(sql, error => {
        if (error) throw error;
        res.send("Se modifico correctamente la materia")
    });
           
});

app.get('/Materia/:id', (req, res) => {
    const id_materia = req.params.id;
    const sql = 'SELECT * FROM materia WHERE id_materia =' + connection.escape(id_materia);
    connection.query(sql, (error, result) => {
        if (error) throw error;
        if (result.length > 0) {
            res.json(result);
        } else {
            res.send('No se encontraron resultados en su busqueda.');
        }
    });
});

app.get('/GetCursos', (req, res) => {
    const sql = 'SELECT nombre_curso FROM curso'; //+ connection.escape(userId); 
    connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        } else {
            res.send('No se encontraron resultados en su busqueda.');
        }
    });
});

app.post('/horariosSemana', (req, res) => {
    const sql = 'INSERT INTO curso_materia SET ?';
    if (req.body.horas_por_semana <= 0 || req.body.horas_por_semana > 6) return res.status(400).send("Error");
    const infoHoras = {
        horas_por_semana: req.body.horas_por_semana
    };
    connection.query(sql,infoHoras, error => {
        if (error) throw error;
        res.send("Se creo correctamente el bloque")
    });
});

connection.connect(function (error) {
    if (error) {
        throw error;
    } else {
        console.log('CONEXION EXITOSA');
    }
        });
app.listen(PORT, () => console.log(`Server running on port: https://localhost:${PORT}`))

