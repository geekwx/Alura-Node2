const express = require('express')
const app= express()
const bodyParser = require('body')

app.use(bodyParser.json())

app.listen(3000, () => console.log('A Api esta ok!'))