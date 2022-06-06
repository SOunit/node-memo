console.log('Hello World')
console.warn('This is a warning')
console.error('This is an error')
console.error(new Error('This is another error'))

console.time('For loop time') //start the time
for(let i=0; i<100;i++){
    //process
}
console.timeEnd('For loop time')

console.table({
    1: { "Fruit" : "Apple", quantity: 2 },
    2: { "Fruit" : "Banana", quantity: 5 },
})

const buf1 = Buffer.alloc(10)
console.log(buf1);

const buf2 = Buffer.alloc(5, 15)
console.log(buf2);

const buf3 = Buffer.allocUnsafe(10)
console.log(buf3)

buf3.fill(1)
console.log(buf3)

buf2.write("abcdefg")
console.log(buf2)

const buf4 = Buffer.from([265, 6.5, -255])
console.log(buf4);

const buf5 = Buffer.from('Hello World')
console.log(buf5);
console.log(buf5.toString());


const EventEmitter = require('events')

const myEmitter = new EventEmitter()

const someFunction = function(){
    console.log('Something happened....');
}
myEmitter.on('Some event', someFunction)

myEmitter.emit('Some event')



let n = 0;
const anotherFunction = function(){
    n++
    console.log(`Value of n is: ${n}`);
}

myEmitter.once('event', anotherFunction)
// myEmitter.on('event', anotherFunction)

myEmitter.emit('event')
myEmitter.emit('event')
myEmitter.emit('event')


const handleError = function(errorCode){
    // handle error ....
    console.error('Opps! An error has occurred! \nError code: ', errorCode);
}

myEmitter.on('error', handleError)
myEmitter.emit('error', 500)

console.log(global)