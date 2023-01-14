const tabs = document.querySelectorAll('.tab li')
const tabContents = document.querySelectorAll('.panel')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    console.log(tab)
    // get the data-target of clicked button
    const target = document.querySelector(tab.dataset.target)
    console.log(target)
    // loop through all tab links and remove active class
    // loop through all tabcontents and remove active class
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    // add active class to the target element
    tab.classList.add('active')
    // add active class to the current tab 
    target.classList.add('active')
  })
})