export default function initTabNav() {
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

