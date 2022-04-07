const nav = document.querySelector('#header nav')
///querySelector = procura no doc. o que está dentro do parentses///

const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    ///add.EventListener = estou ouvindo;cliquei no elemento do
    ///do toggle,  execute a função.
    nav.classList.toggle('show')
    ///cliquei caso tenha a classe Show tire se não coloque///
  })
}
///____________________________________________________///
///quando clicar qualquer elemento do Menu, esconder o Menu///
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

///mudar o header da página qaundo der scroll///

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
})

//TEstimonials carousel/slider///

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
})

/*ScroolREveal: Msotrar elementos quando der scrool na pagina*/
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `
#home .image, #home .#home .text,
#about .image, #about .text,
#services header, #services .card,
#services header, #testimonials .testimonials,
#contact .text, #contact .links`,
  { interval: 100 }
)

/* back to top*/

const backToTopButton = document.querySelector('.back-to-top')
window.addEventListener('scroll', function () {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
})
