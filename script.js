const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')
const logo = document.getElementById('footer-logo')

open.addEventListener('click', () => container.classList.add('show-nav'))
close.addEventListener('click', () => container.classList.remove('show-nav'))
open.addEventListener('click', () => logo.style.opacity = '1')
close.addEventListener('click', () => logo.style.opacity = '0')