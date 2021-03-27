const toggle = document.querySelector('.toggle')
const menu = document.querySelector('.menu')
const items = document.querySelectorAll('.item');
const nav = document.querySelector('#nav')

// Toggle the menu

function toggleMenu() {
  if(menu.classList.contains('active')){
    menu.classList.remove('active')
    toggle.querySelector('a').innerHTML = "<i class='fa fa-bars'></i>"
  } else {
    menu.classList.add('active')
    toggle.querySelector('a').innerHTML = "<i class='fa fa-times'></i>";
  }
}

// Toggle the submenu

function toggleItem (){
  if(this.classList.contains("submenu-active")){
    this.classList.remove('submenu-active');
  } else if (menu.querySelector('.submenu-active')) {
    menu.querySelector(".submenu.active").classList.remove('submenu-active');
    this.classList.add("submenu-active");
  } else {
    this.classList.add('submenu-active')
  }
}

items.forEach((item) => {
  if(item.querySelector(".submenu")){
    item.addEventListener('click', toggleItem, false)
    item.addEventListener('keypress', toggleItem, false)
  }
})

// Make the submenu disappear when clicked
const closeSubmenu = (event) => {
  let isClickInside = menu.contains(event.target)
  if(!isClickInside && menu.querySelector(".submenu-active")){
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
  }
}

// Slide down navbar
function slideDown(){
  let top = window.scrollY;
    if(top <= 200){
      nav.classList.remove('scroll-change')
    } else {
      nav.classList.add('scroll-change')
    }
}

window.addEventListener('scroll', slideDown, false)
document.addEventListener('click', closeSubmenu, false)
toggle.addEventListener('click', toggleMenu, false)