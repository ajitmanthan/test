const express =  require('express')
const app = express()
const cors = require('cors')
app.use(cors({origin:'http://127.0.0.1:5173/',
credentials:true}))
const router = require('./router/router')
const bodyParser = require('body-parser')
require('./db/config')
app.use(express.json())


app.use(bodyParser.urlencoded({extended:true}))










app.use('/',router)
app.listen(9999)
