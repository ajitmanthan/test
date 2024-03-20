const mongo = require('mongoose')

const userschema = new mongo.Schema({

email:{
    type:String
},
password:{
    type:String
}
})

const User =  mongo.model('raja',userschema)

module.exports=User