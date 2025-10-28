// Drawer (Hamburger) logic
const btnMenu = document.getElementById('btnMenu');
const drawer = document.getElementById('drawer');
const scrim = document.getElementById('scrim');
btnMenu.addEventListener('click', () => {
  drawer.classList.add('open');
  scrim.classList.add('show');
});
scrim.addEventListener('click', () => {
  drawer.classList.remove('open');
  scrim.classList.remove('show');
});

// Language / Globe dialog
const btnGlobe = document.getElementById('btnGlobe');
const langDialog = document.getElementById('langDialog');
btnGlobe.addEventListener('click', () => langDialog.showModal());

// Carousel
const carousel = document.getElementById('carousel');
const dotsWrap = document.getElementById('dots');
const slides = Array.from(carousel.children);
let index = 0;

slides.forEach((_, i) => {
  const d = document.createElement('div');
  d.className = 'dot' + (i===0 ? ' active' : '');
  d.addEventListener('click', () => go(i));
  dotsWrap.appendChild(d);
});

function go(i){
  index = i % slides.length;
  carousel.style.transform = `translateX(-${index * 100}%)`;
  [...dotsWrap.children].forEach((el, n) => el.classList.toggle('active', n===index));
}
setInterval(() => go(index + 1), 4000);
