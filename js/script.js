console.log('Hi my name is Jane, welcome to my portfolio site!')

function menuToggle () {
  var x = document.getElementById('myNavtoggle')
  if (x.className === 'navtoggle') {
    x.className += ' responsive'
  } else {
    x.className = 'navtoggle'
  }
}

let changeIcon = function (icon){
  icon.classList.toggle('fa-times')
}

ScrollReveal().reveal('.section');
