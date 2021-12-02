const navBar = document.querySelector('.nav-main')
const hamburgerIcon = document.querySelector('.hamburger-wrapper')
const closeIcon = document.querySelector('.close-wrapper')
const mainDiv = document.querySelector('main')
const listItem = navBar.querySelector('.nav--item')
const link = navBar.querySelector('a')

hamburgerIcon.addEventListener('click', () => {
    navBar.classList.add('open')

})

closeIcon.addEventListener('click', () => {
    navBar.classList.remove('open')
})
