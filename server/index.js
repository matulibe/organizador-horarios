const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());


app.post("/create", (req, res) => {
    const nombre = req.body.nombre;
    const dia = req.body.dia;
    const color = req.body.color;

    db.query('INSERT INTO actividades(nombre, dia, color) VALUES(?,?,?)', [nombre, dia, color]);
    (err, result)=>{
        if(err){
            console.log(err)
        }else{
            res.send("Carga exitosa");
        }
    }
});

app.get("/actividades", (req, res)=>{
    db.query('SELECT * FROM actividades');
    (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result);
        }
    }
});


const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password: "123456789",
    database: 'proyecto_horarios'
});

app.post("/create", (req, res)=>{

})

app.listen(3001, ()=>{
    console.log('Runnning on port:3001');
});