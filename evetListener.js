import EventEmitter from 'node:events';
class MyEvent extends EventEmitter{};

const myEvent=new MyEvent();

let m=0;

myEvent.on('event',(a,b)=>{
    console.log(a,b,this,this===myEvent);
    console.log(++m);

})
myEvent.emit('event','a','b');
myEvent.emit('event','a','b');
myEvent.emit('event','a','b');