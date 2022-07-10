const btn = document.getElementById('menu-btn');
const mobileNav = document.getElementById('menu');

btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    mobileNav.classList.toggle('flex');
    mobileNav.classList.toggle('hidden');
});