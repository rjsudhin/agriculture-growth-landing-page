const hamburger = document.querySelector('.hamburger')
const hamburgerMenu = document.querySelector('.hamburger-menu')
// reset button 
const resetButton = document.querySelector('button')




// configure hamburger menu clicks
hamburger.addEventListener('click', (e) => {
  console.log('click')
  if (hamburger.classList.contains('x')) {
    hamburger.classList.remove('x')
  } else {
    hamburger.classList.add('x')
  }
  
  if (hamburgerMenu.classList.contains('active')) {
    hamburgerMenu.classList.remove('active')
  } else {
    hamburgerMenu.classList.add('active')
  }
})
