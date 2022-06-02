export default function modal(){
    function openMenu(){
         document.querySelector('.modal-wrapper').classList.add('active');
    }

    function closeMenu(){
        document.querySelector('.modal-wrapper').classList.remove('active');
    }

    return {
        openMenu,
        closeMenu
    }
}

