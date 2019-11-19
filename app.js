
//Dependencies
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const user = require('./routes/user')
const app = express();

//middlewares
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//set up route prefix to user routes
app.use('/api/user', user)

//Connecting to mongodb
mongoose.connect('mongodb+srv://nonix:Qwerty12345%@cluster0-zhbyh.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to Mongodb'))
    .catch(err => console.log('Error: ', err))







//port
const port = process.env.PORT || 8080;












app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})
