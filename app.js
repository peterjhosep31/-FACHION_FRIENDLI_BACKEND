const express = require('express')
const app = express()

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3105

app.get('/', (req, res) => {
    res.send(':( que noob ):')
})

app.post('/registre', (req, res) => {
    let name = req.body.name;
    let password = req.body.password;
    res.send(`Su nombre es:  ${name} y su password es: ${password}`);
})

//loguin
app.post('/registre', (req, res) => {
    let user = req.body.usuario;
    let contraseña = req.body.contraseña;
    res.send(`su registro fue exitoso ${nombres}`);
  })

//registro
app.post('/registre', (req, res) => {
    let nombres = req.body.nombres;
    let apellidos = req.body.apellidos;
    let telefono = req.body.telefono;
    let  gmail = req.body.gmail;
    let fecha_nacimiento = req.body.fecha_nacimiento;
    let genero = req.body.genero;
    let contraseña = req.body.contraseña;
    let confi_contraseña = req.body.confi_contraseña;
    res.send(`su registro fue exitoso ${nombres}`);
  })
  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
