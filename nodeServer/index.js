//Node Server Which will handle socket.io connections
const io=require("socket.io")(8000)
const users={}
console.log("hi");
io.on("connection",socket=>{
    console.log("hi")
    socket.on('new-user-joined',Username=>{
        console.log("New user",Username);
        users[socket.id]=Username;
        socket.broadcast.emit('user-joined',Username)
    });

    socket.on('send',message=>{
        socket.broadcast.emit('recieve',{message:message,Username:users[socket.id]})
    });

})