let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x')
  navbar.classList.toggle('active')
}

document.querySelectorAll('.project-img').forEach((img) => {
  let project = img.alt
  let beforeImg = `${project}-before.png`
  let afterImg = `${project}-after.png`

  img.addEventListener('mouseover', () => {
    img.src = afterImg
  })

  img.addEventListener('mouseout', () => {
    img.src = beforeImg
  })
})
