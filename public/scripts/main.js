import modal from './modal.js';

const modal1 = modal();

const check = document.querySelectorAll('a.icon.check');

check.forEach(button =>{
    button.addEventListener('click', event=>{
        modal1.openMenu();
    });
})

modal.openMenu;

