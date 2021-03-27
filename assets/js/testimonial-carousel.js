let currentTestimonialSlide = 0;
let prevTestBtn = document.querySelector('.prev-test')
let nextTestBtn = document.querySelector('.next-test')
let testDots = document.querySelectorAll('.test-dot');
let testSlides = document.querySelectorAll('.testimonial-slide')
let testSlideContainer = document.querySelector('.testimonial-slide-container');

const testInit = (n) => {
  testSlides.forEach((slide, index) => {
    slide.style.display = "none";
    testDots.forEach((dot,index) => {
      console.log(dot)
      dot.classList.remove('active-test-dot')
    })
  })
  testSlides[n].style.display = "block";
  testDots[n].classList.add('active-test-dot')
}

document.addEventListener('DOMContentLoaded', testInit(currentTestimonialSlide))

const nextTestSlide = () => {
  currentTestimonialSlide >= testSlides.length - 1 ? currentTestimonialSlide = 0 : currentTestimonialSlide++
  testInit(currentTestimonialSlide)
}

const prevTestSlide = () => {
  currentTestimonialSlide <= 0 ? currentTestimonialSlide = testSlides.length - 1 : currentTestimonialSlide--
  testInit(currentTestimonialSlide)
}

nextTestBtn.addEventListener('click', nextTestSlide);
prevTestBtn.addEventListener('click', prevTestSlide)

setInterval(() => {
  nextTestSlide()
},5000)

testDots.forEach((dot,index) => {
  dot.addEventListener('click', () => {
    testInit(index)
    currentTestimonialSlide = index;
  })
})