const burgerBtn = document.querySelector('.burger-btn')
const mobileNav = document.querySelector('.mobile-nav')
const closeBtn = document.querySelector('.close-btn')
const logo = document.querySelector('.header-logo')
burgerBtn.addEventListener('click', function(){
  burgerBtn.classList.toggle('hidden')
  logo.classList.toggle('hidden')
  mobileNav.classList.toggle('hidden')
})

closeBtn.addEventListener('click', function(){
  mobileNav.classList.toggle('hidden')
  burgerBtn.classList.toggle('hidden')
  logo.classList.toggle('hidden')
})