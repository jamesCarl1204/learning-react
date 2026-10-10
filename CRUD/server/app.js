const express = require('express')
const app = express();
const routes = require('./routes/crudRoutes')
const cors = require('cors')
app.use('/users/', routes)
app.use(cors())
app.use(express.json())

app.listen(3000)