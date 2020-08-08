/* NAVEGAÇÃO POR TAB */

function initTabNav() {
  const tabAnimal = document.querySelectorAll('.js-tabAnimal li')
  const tabContent = document.querySelectorAll('.js-tabContent section')

  if (tabAnimal.length && tabContent) {
    tabContent[0].classList.add('active')

    function activeTab(index) {
      tabContent.forEach((content) => {
        content.classList.remove('active')
      })
      tabContent[index].classList.add('active')
    }

    tabAnimal.forEach((imageItem, index) => {
      imageItem.addEventListener("click", () => {
        activeTab(index)
      })
    })
  }
}

initTabNav()


function initAccordionList() {
  const accordion = document.querySelectorAll('.js-accordionList dt')

  accordion[0].classList.add('active')
  accordion[0].nextElementSibling.classList.add('active')

  if (accordion.length) {
    function activeAccordion() {
      this.classList.toggle('active')
      this.nextElementSibling.classList.toggle('active')
    }

    accordion.forEach((item) => {
      item.addEventListener('click', activeAccordion)
    })
  }
}

initAccordionList()

function initScrollAnimation() {
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

initScrollAnimation()