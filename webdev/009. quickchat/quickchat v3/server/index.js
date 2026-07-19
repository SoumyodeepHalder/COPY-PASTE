const io = require ('socket.io')(8000, {cors: {origin: 'http://127.0.0.1:5501'}});

let users={};

io.on ('connection', socket =>{
    socket.on ('user-joined', (username) =>{
        users[socket.id]=username;
        socket.emit ('you-joined', JSON.stringify (users));
        socket.broadcast.emit ('other-joined', JSON.stringify (users))
    })

    socket.on('disconnect', () => {
        delete users[socket.id];
        socket.broadcast.emit('user-offline', JSON.stringify (users));
        
    });

    socket.on ('send', (message, name) =>{
        socket.to(name).emit ('send', {message:message, name: users[socket.id]});
    })
});
