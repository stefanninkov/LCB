const track = document.querySelector('.slider__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.slider__button--right');
const prevButton = document.querySelector('.slider__button--left');
const dotsNav = document.querySelector('.slider__nav');
const dots = Array.from(dotsNav.children);
const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + 'px';
}
slides.forEach(setSlidePosition);

const moveToSlide = (currentSlide, targetSlide, targetDot, targetIndex) => {
  const currentDot = dotsNav.querySelector('.current-slide');
  track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');

  currentDot.classList.remove('current-slide');
  targetDot.classList.add('current-slide');


  if (targetIndex === 0) {
    prevButton.classList.add('hidden');
    nextButton.classList.remove('hidden');
  } else if (targetIndex == slides.length - 1) {
    prevButton.classList.remove('hidden');
    nextButton.classList.add('hidden');
  } else {
    prevButton.classList.remove('hidden');
    nextButton.classList.remove('hidden');
  }
}


prevButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current-slide');
  const prevSlide = currentSlide.previousElementSibling;
  const slideIndex = slides.findIndex(slide => slide === prevSlide);
  const targetDot = dots[slideIndex];

  moveToSlide(currentSlide, prevSlide, targetDot, slideIndex);
  if (prevSlide == currentSlide) {
    prevButton.classlist.add('hidden');
    moveToSlide(currentSlide, prevSlide, targetDot);
  }
})

nextButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current-slide');
  const nextSlide = currentSlide.nextElementSibling;
  const slideIndex = slides.findIndex(slide => slide === nextSlide);
  const targetDot = dots[slideIndex];


  if (slideIndex != -1)
    moveToSlide(currentSlide, nextSlide, targetDot, slideIndex);
})


dotsNav.addEventListener('click', e => {

  const targetDot = e.target.closest('button');

  if (!targetDot) return;

  const currentSlide = track.querySelector('.current-slide');
  const targetIndex = dots.findIndex(dot => dot === targetDot);
  const targetSlide = slides[targetIndex];

  moveToSlide(currentSlide, targetSlide, targetDot, targetIndex);
})


var selected = "sel1";
var disp = "resultsel1";
function show(a, b) {

  document.getElementById(disp).style.display = "none";

  document.getElementById(b).style.display = "grid";
  ;
  selected = a;
  disp = b;
}


new Glider(document.querySelector('.glider'), {
  // slidesToScroll: 1,
  scrollLock: true,
  draggable: true,
  dots: '.dots'
})


new Glider(document.querySelector('.desktop_slider'), {
  scrollLock: true,
  draggable: true,
  dots: '#dots'
})

var current = 0,
    textSlides = document.getElementsByClassName("top_text");

setInterval(function() {
  for (var i = 0; i < textSlides.length; i++) {
    textSlides[i].style.opacity = 0;
  }
  current = (current != textSlides.length - 1) ? current + 1 : 0;
  textSlides[current].style.opacity = 1;
}, 3000);
