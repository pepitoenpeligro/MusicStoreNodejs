require('dotenv').config({path: __dirname + '/.env'});
const PORT = process.env.PORT || 3320;
const app = require('../index.js');

const assert = require('assert');
var request = require('supertest');
var request = request(`http://localhost:${PORT}`);

const routeSongs = '/api/songs';
const routeSong = '/api/song';





describe('songs', ()=>{
    describe('GET', () => {
        it('It should return a songs list in json', (done) => {
            request.get(routeSongs)
                .expect('Content-Type', /json/)
                .expect(200, done);
        });
    });

    describe('POST', () => {
        it('It should accept a song in json', (done) =>{
            let song = {
                "title": "Physical",
                "album" : "Future Nostalgia",
                "artist" : "Dua Lipa",
                "duration": 10
            }

            request.post(routeSong)
                .send(song).
                expect('Content-Type', /json/)
                .expect(200, done);

        })
    })
});
