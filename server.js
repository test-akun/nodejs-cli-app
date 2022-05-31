const EventEmitter = require('events');
const { setTimeout } = require('timers/promises');
const logEvents = require('./logEvents');
class Emitter extends EventEmitter { }

// initialize object
const myEmitter = new Emitter();

// add listener for the log event
myEmitter.on('log', msg => logEvents(msg))

// setTimeout(() => myEmitter.emit('gol', 'log event emitted'), 2000)
setTimeout(2000, myEmitter.emit('log', 'log event emiited!'))