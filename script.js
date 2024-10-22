const menuIcon = document.getElementById('menu-icon');
const navbarLeftUl = document.querySelector('.navbar-left ul');
const navbarRight = document.querySelector('.navbar-right');
const logoImage = document.querySelector('.navbar-left img'); 

menuIcon.addEventListener('click', () => {
    navbarLeftUl.classList.toggle('active'); 
    navbarRight.classList.toggle('active'); 

    if (navbarLeftUl.classList.contains('active')) {
        logoImage.style.display = 'none';

    } else {
        logoImage.style.display = 'block';
    }
});











