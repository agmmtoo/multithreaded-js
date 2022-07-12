const http = require('http');
const path = require('path');

const express = require('/home/ammo/nodejs/test/node_modules/express');

const app = express();

const host = process.argv[2] || '.';

const options = {
	setHeaders: (res, pth, stat) =>
	// set headers
        res.set({
                'Cross-Origin-Opener-Policy': 'same-origin',
                'Cross-Origin-Embedder-Policy': 'require-corp',
                'X-Created-By': 'agmyintmyatoo'
        }),

};

app.use(express.static(path.join(__dirname, host), options));

//app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'main.js')));

app.get('/other', (req, res) => res.json({name: 'AMMO', id: Math.random() * 10000}));

const server = http.createServer(app);

server.listen(3000);

server.on('listening', () => console.log('listening on https://localhost:3000/', host));
server.on('error', (e) => console.log('error: ', e));
