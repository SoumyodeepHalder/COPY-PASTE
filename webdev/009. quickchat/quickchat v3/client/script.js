const socket = io('http://localhost:8000');
const message = document.getElementById('message-input');
const send = document.getElementById('send-button');
const chatarea = document.getElementById('chatarea');
const loginPage = document.getElementById('loginPage');
const usernameBtn = document.getElementById('username');
let username = '';
const sumbit = document.getElementById('submitButton');
const mainPage = document.getElementById('mainPage');
const loginBtn = document.getElementById('loginBtn');
const sidebar = document.getElementById('sidebarCont');
const userList = {};

function displayMessage(message, posi) {
    if (message == '') return;
    const div = document.createElement('div');
    div.innerHTML = `<div class="px-4 py-2 bg-neutral-900 inline-block self-start rounded-lg">${message}</div>`;
    div.classList.add(posi);
    chatarea.appendChild(div);
};

function addToSidebar (users){
    sidebar.innerHTML='<div class="flex items-center mb-8 h-20"><img src="chat.png" class="h-10 mx-4 my-2"><span class="text-white text-3xl">QuickChat</span></div>';
    const data = JSON.parse(users); // Parse JSON string into an object
    Object.values(data).forEach(value => {
        if (value == username)return;
        sidebar.insertAdjacentHTML('beforeend', `<div class="h-15 flex items-center py-2 m-1 hover:bg-neutral-900"><img src="account.png" class="h-10 invert mx-4"><span class="text-white">${value}</span></div>`);
    });
}

sumbit.addEventListener('click', () => {
    username = usernameBtn.value;
    loginPage.classList.add('hidden');
    mainPage.classList.toggle('hidden');
    // loginBtn.innerText=username;
    socket.emit('user-joined', username);
})

socket.on('you-joined', (socketid, users) => {
    addToSidebar (users)
})

socket.on('other-joined', (socketid, users) => {
    addToSidebar (users)
})

socket.on ('user-offline', (users)=>{
    addToSidebar (users)
})

socket.on('send', data => {
    displayMessage(`${data.name}: ${data.message}`, 'self-start');
})

send.addEventListener('click', () => {
    displayMessage(message.value, 'self-end');
    socket.emit('send', message.value);
    message.value = '';
})

message.addEventListener("keydown", function (event) {
    if (event.key === "Enter" && message.value !== '') {
        event.preventDefault();
        displayMessage(message.value, 'self-end')
        socket.emit('send', message.value, username);
        message.value = '';
    }
});
usernameBtn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && usernameBtn.value !== '') {
        e.preventDefault();
        username = usernameBtn.value;
        loginPage.classList.add('hidden');
        loginBtn.innerText=username;
        mainPage.classList.toggle('hidden');
        socket.emit('user-joined', username);
    }
})