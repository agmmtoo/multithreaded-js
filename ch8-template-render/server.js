#!/usr/bin/env node
// npm install fastify@3 mustache@4
const Fastify = require('fastify');
const RpcWorkerPool = require('./rpc-worker.js');
const worker = new RpcWorkerPool('./worker.js', 4, 'leastbusy');
const template = require('./template.js');

const server = Fastify();

server.get('/main', async (request, reply) => template.renderLove({ me: 'AMMO', you: 'Also AMMO' }));

server.get('/offload', async (request, reply) => worker.exec('renderLove', { me: 'AMMO', you: 'Also AMMO' }));

server.listen(3000, (err, addr) => {
    if (err) throw err;
    console.log(`listening on: ${addr}`);
});

const timer = process.hrtime.bigint;
setInterval(() => {
    const start = timer();
    setImmediate(() => {
        console.log(`delay: ${(timer() - start).toLocaleString()}ns`);
    });
}, 1000);