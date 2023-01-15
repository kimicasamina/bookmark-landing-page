const questions = document.querySelectorAll('.faq li')

// questions.addEventListener('click', () => {
//   console.log('Hello World!')
// })

questions.forEach((q) => {
  q.addEventListener('click', (e) => {
    const answer = e.target.nextElementSibling
    const span = e.target.firstElementChild
    e.target.classList.toggle('active')
    span.classList.toggle('active')
    answer.classList.toggle('active')
  })
})