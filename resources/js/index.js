// Selectors

var hamburger = document.querySelector('.hamburger');
var navUl = document.querySelector('ul');

// Event Listner List

hamburger.addEventListener('click', function (e) {
  e.target.classList.toggle('fa-times');
  navUl.classList.toggle('show');
});
