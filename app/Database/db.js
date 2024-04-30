
const mongoose = require('mongoose');

exports.connectMonggose =()=>{
  mongoose.connect('Your Mongo Url ',
  {
      useNewUrlParser: true
  })
  .then((e)=>console.log("Connected to Mongodb =>> Todo App"))
  .catch((e)=>console.log("Not Connect Mongodb"))
}
