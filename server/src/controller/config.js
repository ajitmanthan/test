const mongo = require('mongoose')

mongo.connect(process.env.DATABASE)
.then(()=>console.log('connected'))
.catch(err=>console.log(err))

module.exports=mongo