const express = require('express')

const app = express()


app.use(express.json()); // entender qd enviar requisição em json

app.use(express.urlencoded({ extended: false })); // entender qd passar parametros via url

app.listen(3000)