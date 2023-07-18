// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/habit');
// const db = mongoose.connection;
// // error
// db.on('error',console.error.bind(console,'erroe connecting to db'));
// // up and running then message
// db.once('open',function(){
//     console.log('Success fully connected to the database')
// })
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/habit');

}

console.log('connected to :: Database');

