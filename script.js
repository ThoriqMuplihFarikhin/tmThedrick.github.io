// Toggle navbar (mobile menu)
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// Sticky navbar saat scroll
window.onscroll = () => {
  let header = document.querySelector('.header');
  header.classList.toggle('sticky', window.scrollY > 100);

  // Tutup menu otomatis saat scroll
  navbar.classList.remove('active');
  menuIcon.classList.remove('bx-x');
};

// Tutup menu otomatis saat klik link (biar UX bagus)
document.querySelectorAll('.navbar a').forEach(link => {
  link.onclick = () => {
    navbar.classList.remove('active');
    menuIcon.classList.remove('bx-x');
  };
});

// Toggle dark mode
let darkModeIcon = document.querySelector('#darkmode-icon');
darkModeIcon.onclick = () => {
  document.body.classList.toggle('dark-mode');
  darkModeIcon.classList.toggle('bx-sun'); // ubah ikon jadi matahari
};

// Scroll reveal animation
ScrollReveal({
  reset: true,
  distance: '60px',
  duration: 2000,
  delay: 200
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom', interval: 200 });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// Swiper JS untuk testimonial
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
