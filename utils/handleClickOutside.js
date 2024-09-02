export default (selector, state) => {
  const element = document.querySelector(selector)
  
  document.addEventListener('click', e => {

    if (!element.contains(e.target)) {
      state.value = false
    }
  })
}