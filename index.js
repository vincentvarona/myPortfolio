document.querySelector('.header .menu-toggle').addEventListener('click', function() {
  this.classList.toggle('active');
});

let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
  const currentScrollPos = window.pageYOffset;
  
  if (prevScrollPos > currentScrollPos) {
    document.querySelector('.header').classList.remove('hidden');
  } 
  else {
    document.querySelector('.header').classList.add('hidden');
  }
  
  prevScrollPos = currentScrollPos;
}

