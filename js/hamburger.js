const hamburger = document.querySelector('.hamburger')
const hamburgerMenu = document.querySelector('.hamburger-menu')



// configure hamburger menu clicks
hamburger.addEventListener('click', (e) => {
  if (hamburgerMenu.classList.contains('active')) {
    hamburgerMenu.classList.remove('active')
  } else {
    hamburgerMenu.classList.add('active')
  }
})