exports.getSongs = (request, response) => {
    var songs = [
        {
            title: 'Physical',
            album: 'Future Nostalgia',
            artist: 'Dua Lipa',
            duration: 194
        },
        {
            title:'Tom\'s Dinner',
            album:'Solitude Standing',
            artists: 'Suzanne Vega',
            duration:224
        }
    ];

    response.status(200);
    response.header("Content-Type",'application/json');
    response.send(JSON.stringify(songs, null, 3));
}

exports.postSong = (request, response) =>{
    response.status(200);
    response.send({
        song: request.body,
        message: 'Song POST ok'
    })
}