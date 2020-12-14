
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const dataRoutes = require('./routes/songs');

const {Etcd3} = require('etcd3');
const client = new Etcd3();

require('dotenv').config({path: __dirname + '/.env'});

// await client.put('fagota').value('fernando');


async function showEnvironment(){
    const results = await client.getAll();
    console.log(`All Keys from etcd server `, results);
}

async function getPort(){
    const portResponse = await client.get('MusicStoreNodejsPort');
    return portResponse;
}




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


let PORT = process.env.PORT || 3320;

(async () => {
    await showEnvironment();
    PORT = await getPort();
})().then(() => {

    app.listen(PORT, () => {
        console.log(`Microservice is running on port ${PORT}`);
    });
})


module.exports = app;