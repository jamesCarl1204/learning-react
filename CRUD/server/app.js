const express = require('express')
const app = express();
const routes = require('./routes/crudRoutes')
const cors = require('cors')
app.use(cors())
app.use(express.json())

app.use('/api/users', routes)

app.listen(3000)