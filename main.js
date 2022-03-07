// Debug
console.log('JS OK')

// Selezione Classe Hamburger Menù
const hamburgerList = document.querySelector('.hamburger-menu');

// Apertura Hamburger Menù
document.querySelector('.fa-bars').addEventListener('click', function () {
    console.log('Menù OPEN');
    hamburgerList.style.display = 'block';
})

// Chiusura Hamburger Menù
document.querySelector('.fa-times').addEventListener('click', function () {
    console.log('Menù CLOSE');
    hamburgerList.style.display = 'none';
})