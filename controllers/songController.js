exports.getSongs = (request, response) => {
    let songs = [
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