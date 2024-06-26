// JavaScript to handle scrolling behavior
let lastScrollTop = 0;
const topBar = document.querySelector('.top-bar');

window.addEventListener('scroll', function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    topBar.classList.add('hidden');
  } else {
    topBar.classList.remove('hidden');
  }

  lastScrollTop = scrollTop;
});
