import './index.html'
import './index.sass'
const nav = document.querySelectorAll('.nav')
const btnBugerOpen = document.querySelector('.header__hamburger-menu')
const btnBugerClose = document.querySelector('.buger-menu__close')
const bugerMenu = document.querySelector('.buger-menu')

// управление активности в icon-lists элментами
nav.forEach(item=>{
    item.addEventListener( 'click' ,()=>{
            nav.forEach(item=>{
                item.classList.remove('active')
            })
            item.classList.add('active')   
    })  
})
// управление открыть/закрыть бургер меню
btnBugerOpen.addEventListener('click',()=>{
    bugerMenu.classList.add('active-burger')
})
btnBugerClose.addEventListener('click',()=>{
    bugerMenu.classList.remove('active-burger')
})