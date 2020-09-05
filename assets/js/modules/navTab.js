export default function initTabNav() {
  const tabAnimal = document.querySelectorAll('[data-tab="animal"] li')
  const tabContent = document.querySelectorAll('[data-tab="content"] section')

  if (tabAnimal.length && tabContent) {
    tabContent[0].classList.add('active')

    function activeTab(index) {
      tabContent.forEach((content) => {
        content.classList.remove('active')
      })
      const animalSelected = tabContent[index].dataset.anima
      tabContent[index].classList.add('active', animalSelected)
    }

    tabAnimal.forEach((imageItem, index) => {
      imageItem.addEventListener("click", () => {
        activeTab(index)
      })
    })
  }
}

