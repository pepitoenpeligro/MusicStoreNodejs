
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const dataRoutes = require('./routes/songs');

require('dotenv').config({path: __dirname + '/.env'});


app.use(bodyParser.json());

app.use('/api', dataRoutes);

app.use(function(request, response){
    response.status(400);
    response.json({
        error:{
            'name': 'Error',
            'message': 'Our api is working just here: api/songs'
        }
    });
});

const PORT = process.env.PORT || 3320;
app.listen(PORT, () => {
    console.log(`Microservice is running on port ${PORT}`);
});

