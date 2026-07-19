const io = require ('socket.io')(8000, {cors: {origin: 'http://127.0.0.1:5500'}});

const users={};

io.on ('connection', socket =>{
    socket.on ('user-joined', (username) =>{
        users[socket.id]=username;
        socket.emit ('you-joined', socket.id, JSON.stringify (users));
        socket.broadcast.emit ('other-joined', socket.id, JSON.stringify (users))
    })

    socket.on ('send', (message, name) =>{
        socket.broadcast.emit ('send', {message:message, name: name});
    })

    socket.on('disconnect', (reason) => {
        delete users[socket.id];
        socket.broadcast.emit('user-offline', JSON.stringify (users));
        
    });
})
