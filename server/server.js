const express =  require('express')
const app = express()
const cors = require('cors')
const path = require('path')
app.use(cors({origin:'5173',
credentials:true}))
const router = require('./router/router')
const bodyParser = require('body-parser')
require('./db/config')
app.use(express.json())


app.use(bodyParser.urlencoded({extended:true}))




app.use(express.static(path.join(__dirname, "./client")));

// Handle routes for SPA
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/index.html"), (err) => {
        if (err) {
            console.error('Error sending index.html:', err);
            res.status(500).send(err);
        }
    });
});



app.use('/',router)
app.listen(9999)
