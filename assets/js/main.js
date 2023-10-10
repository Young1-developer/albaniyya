
// scroll style in javscript
window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toggle('nav-active', window.scrollY > 0);
});




const menu = document.getElementById('menu-bar');
const nav = document.getElementById('menu');
const close = document.getElementById('cancel-bar');


// menu function

if(menu){
    menu.addEventListener('click', () => {
        nav.classList.add('hide-menu');
        close.style.display  = 'block';
        menu.style.display = 'none';
        
    });
}
if(close){
    close.addEventListener('click', () => {
        nav.classList.remove('hide-menu');
        close.style.display = 'none';
        menu.style.display = 'block';
    });
}