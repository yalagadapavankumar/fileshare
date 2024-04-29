require('dotenv').config();

const mongoose = require('mongoose');

function connectDB(){
    //DBconnection
   //mongodb+srv://ypavankumar799:<password>@cluster0.gx2p6a3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
    mongoose.connect(process.env.MONGO_CONNECTION_URL, {
        // useNewUrlParser : true,
        // useUnifiedTopology : true,
        // useCreateIndex : true,
        // useFindAndModify : false
    });

    const connection = mongoose.connection;

    mongoose.connection
    .once('open', function () {
      console.log('Database connected');
    })
    .on('error', function (err) {
      console.log('Connection failed');
    });
}


module.exports = connectDB;