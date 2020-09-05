export default function initScrollAnimation() {
  const sections = document.querySelectorAll('.js-scroll')
  const windowMetade = window.innerHeight * 0.6

  function scroll() {
    sections.forEach((item) => {
      const section = item.getBoundingClientRect().top
      const sectionVisible = (section - windowMetade) < 0

      if (sectionVisible) {
        item.classList.add('active')
      } else {
        item.classList.remove('active')
      }
    })
  }

  scroll()

  window.addEventListener("scroll", scroll)
}

