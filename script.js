let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x')
  navbar.classList.toggle('active')
}

document.querySelectorAll('.project-img').forEach((img) => {
  let beforeImg = `${img.alt}-before.png`
  let afterImg = `${img.alt}-after.png`

  img.addEventListener('mouseover', () => {
    img.src = afterImg
  })

  img.addEventListener('mouseout', () => {
    img.src = beforeImg
  })
})
