const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const studentRoutes = require('./routes/student');

const DATABASE_URI = 'mongodb+srv://kshitijk83:451422ere@paracticing.bfzmz.mongodb.net/gate?retryWrites=true&w=majority';

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* ROUTES */

app.use('/student', studentRoutes);


// Error Handler
app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({
        message,
        data
    })
})


mongoose.connect(DATABASE_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(res => {
        console.log('database connected!')
        app.listen(process.env.PORT || 8080);
    })
    .catch(err => {
        console.log(err);
    })
