export default function initAccordionList() {
  const accordion = document.querySelectorAll('[data-anima="accordion"] dt')

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

