const http=require('http');
const server=http.createServer((req,res)=>{
    res.write("ok");
    console.log('Connect')
    res.end();
    console.log('Connect End')
}).listen(9090)

const io=require('socket');
io.on('start',()=>{
    console.log('Start system');

})
io.emit('start',()=>{
    console.log('System has been started');
})