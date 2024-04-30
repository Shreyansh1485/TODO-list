
const mongoose = require('mongoose');

exports.connectMonggose =()=>{
  mongoose.connect('mongodb+srv://Shreyansh_1485:55101020%40Gupta@cluster0.8gwvx3q.mongodb.net/todoapp2',
  {
      useNewUrlParser: true
  })
  .then((e)=>console.log("Connected to Mongodb =>> Todo App"))
  .catch((e)=>console.log("Not Connect Mongodb"))
}
