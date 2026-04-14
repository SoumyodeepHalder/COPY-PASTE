const menu=document.querySelector ('.navmenu');
const sidebar=document.querySelector ('.sidebar');
// const sidebartext=document.querySelectorAll ('.sidebar-text');

menu.addEventListener ('click', ()=>{
    sidebar.classList.toggle ('open');
    // sidebartext.classList.toggle ('open');
})
