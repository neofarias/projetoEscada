// Imports
const express = require('express')
const app = express()
const port = 3000

// Listen on Port 3000
app.listen(port, () => console.info(`App listening on port ${port}`))