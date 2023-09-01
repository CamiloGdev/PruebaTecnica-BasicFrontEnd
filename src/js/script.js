// Add your javascript here
const headers = document.getElementsByClassName('title-section')
const contents = document.getElementsByClassName('description')
const collapseIcon = document.getElementsByClassName('collapse-icon')
const expandIcon = document.getElementsByClassName('expand-icon')
const multiselect = document.getElementById('multiselect')

for (let i = 0; i < headers.length; i++) {
  if (i === 0) {
    contents[i].style.display = 'block'
    collapseIcon[i].style.display = 'inline-block'
    expandIcon[i].style.display = 'none'
  } else {
    contents[i].style.display = 'none'
    collapseIcon[i].style.display = 'none'
    expandIcon[i].style.display = 'inline-block'
  }

  headers[i].addEventListener('click', () => {
    contents[i].style.display =
      contents[i].style.display == 'block' ? 'none' : 'block'
    collapseIcon[i].style.display =
      collapseIcon[i].style.display == 'none' ? 'inline-block' : 'none'
    expandIcon[i].style.display =
      expandIcon[i].style.display == 'inline-block' ? 'none' : 'inline-block'

    if (multiselect.checked === false) {
      for (let j = 0; j < headers.length; j++) {
        if (i !== j) {
          contents[j].style.display = 'none'
          collapseIcon[j].style.display = 'none'
          expandIcon[j].style.display = 'inline-block'
        }
      }
    }
  })
}
