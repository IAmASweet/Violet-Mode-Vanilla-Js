const body = document.querySelector('body')
const btnMode = document.querySelector('.btn-mode')


btnMode.addEventListener('click', (e) => {
  let violet = body.classList.toggle('violet')
  btnMode.textContent = violet ? 'Light Mode' : 'Violet Mode'
})