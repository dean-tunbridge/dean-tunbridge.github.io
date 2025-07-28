let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x')
  navbar.classList.toggle('active')
}

document.querySelectorAll('.project-img').forEach((img) => {
  let beforeImg = `${img.alt}-before.png`
  let afterImg = `${img.alt}-after.png`

  img.style.transition = 'opacity 0.3s ease'

  img.addEventListener('mouseover', () => {
    img.style.opacity = 0
    setTimeout(() => {
      img.src = afterImg
      img.style.opacity = 1
    }, 100)
  })

  img.addEventListener('mouseout', () => {
    img.style.opacity = 0
    setTimeout(() => {
      img.src = beforeImg
      img.style.opacity = 1
    }, 100)
  })
})
