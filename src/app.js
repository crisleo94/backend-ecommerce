const express = require('express')
const app = express()
const PORT = process.env.NODE_PORT || 3000

app.listen(PORT)

console.log('Server started in port: ', PORT)
