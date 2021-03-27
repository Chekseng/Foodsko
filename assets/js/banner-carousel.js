let currentSlide = 0;
let prevBtn = document.querySelector('.a-prev')
let nextBtn = document.querySelector('.a-next')
let dots = document.querySelectorAll('.dot')
let slides = document.querySelectorAll('.slide')
const slideContainer = document.querySelector('.slide-container')

const init = (n) => {
  slides.forEach((slide,index) => {
    slide.style.display = "none";
    dots.forEach((dot,index) => {
      dot.classList.remove('active-dot')
    })
  })
  slides[n].style.display = "block";
  dots[n].classList.add('active-dot')
}

document.addEventListener('DOMContentLoaded', init(currentSlide))

const next = () => {
  currentSlide >= slides.length - 1 ? currentSlide = 0 : currentSlide++
  init(currentSlide)
}

const prev = () => {
  currentSlide <= 0 ? currentSlide = slides.length - 1 : currentSlide--
  init(currentSlide)
}


nextBtn.addEventListener('click', next)
prevBtn.addEventListener('click', prev)

setInterval(() => {
  next()
},5000)

dots.forEach((dot,index) => {
  dot.addEventListener('click', () => {
    init(index)
    currentSlide = index
  })
})