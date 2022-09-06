const btn = document.querySelector('.mobile-btn')
const mobile = document.querySelector('.menu-mobile')
btn.addEventListener('click', ()=> {
  mobile.classList.toggle('show')
})