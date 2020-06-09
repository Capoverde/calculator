const items = document.querySelectorAll('.calculator > div')
const everyItem = [...items]

everyItem.forEach(el => el.addEventListener('click', e => {
  e.preventDefault()
  el.classList.add('klik')
  setTimeout(function () {
    el.classList.remove('klik')
  }, 200)
  console.log('klik')
}))
