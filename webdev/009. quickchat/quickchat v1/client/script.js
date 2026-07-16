const socket = io ('http://localhost:8000');
const message = document.getElementById('message-input');
const send = document.getElementById('send-button');
const chatarea = document.getElementById('chatarea');

const username=prompt ('enter your name to join');

socket.emit ('new-user-joined', username);

function displayMessage(message, posi) {
    if (message.value == '') return;
    const div = document.createElement('div');
    div.innerHTML = `<span class="text-2xl bg-white px-6 py-3 rounded-lg inline-block">${message}</span>`;
    div.classList.add(posi);
    chatarea.appendChild(div);
};

function joinedChat (message){
    const div = document.createElement('div');
    div.innerHTML = `<span class="text-2xl text-gray-800 py-3 inline-block">- ${message}</span>`;
    div.classList.add('self-start');
    chatarea.appendChild(div);
}


socket.on ('user-joined', name=>{
    console.log(name);
    joinedChat (`${name} joined the chat`);
})

socket.on ('receive', data=>{
    displayMessage (`${data.name}: ${data.message}`, 'self-start');
})

send.addEventListener('click', () => {
    displayMessage(message.value, 'self-end');
    socket.emit ('send', message.value);
    message.value='';
})

message.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        displayMessage(message.value, 'self-end')
        socket.emit ('send', message.value);
        message.value='';
    }
});


