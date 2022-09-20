const openmenu = document.querySelector('.menuopen')
const closemenu = document.querySelector('.menuclose')
const menu = document.querySelector('.nav-links')

openmenu.addEventListener("click", function(){
  openmenu.style.display = "none"
  closemenu.style.display = "block"
  menu.style.top = "50%"
})

closemenu.addEventListener("click", function(){
  openmenu.style.display = "block"
  closemenu.style.display = "none"
  menu.style.top = "-50%"
})