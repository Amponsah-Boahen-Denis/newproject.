// JavaScript to handle scrolling behavior
let lastScrollTop = 0;
const topBar = document.getElementById('topBar');

window.addEventListener('scroll', function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    topBar.classList.add('hidden');
  } else {
    topBar.classList.remove('hidden');
  }

  lastScrollTop = scrollTop;
});
