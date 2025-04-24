// <========== side menu ==========>
const sideMenu = document.getElementById('sideMenu');

function openMenu() {
    sideMenu.style.right = '0';
}

function closeMenu() {
    sideMenu.style.right = '-16rem';
}


// <========== scroll to add background color to nav bar ==========>
const navBar = document.querySelector('nav');
const navLinks = document.querySelector('nav ul');

window.addEventListener('scroll', () => {
    if (scrollY > 30) {
        navBar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm');
        navLinks.classList.remove('bg-white', 'bg-opacity-50', 'shadow-sm');
    } else {
        navBar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm');
        navLinks.classList.add('bg-white', 'bg-opacity-50', 'shadow-sm');
    }
});
