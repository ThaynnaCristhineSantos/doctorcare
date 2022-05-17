window.addEventListener('scroll', onScroll)

onScroll()

function onScroll() {
  showNavOnScroll()
  showBackToTopOnScroll()
  activateMenuAtCurrentSection(homme)
  //activateMenuAtCurrentSection(services)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2 //linha alvo
  //console.log(targetLine)
  //verificar se a seção passou da linha
  //quais dados vou precisar?
  const sectionTop = section.offsetTop //topo da seção

  const sectionHeight = section.offsetHeight //altura da seção
  //console.log(sectionHeight)
  //o topo da secão chegou ou ultrapassou a linha alvo
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop
  //informações dos dados e da lógica
  console.log(
    'O topo da seção chegou ou passou da linha?',
    sectionTopReachOrPassedTargetLine
  )

  //verificar se a base está abaixo da linha alvo
  //quais dados vou precisar?

  //a seção termina onde?
  const sectionEndsAt = sectionTop + sectionHeight

  //o final da seção passou da linha alvo
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  console.log('O fundo da seção passou da linha?', !sectionEndPassedTargetLine)

  //limites da seção
  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  console.log(sectionBoundaries)

  const menuElement = document.querySelector(
    `.menu a [href*=${section.getAttribute()}]`
  )

  if (sectionBoundaries) {
    console.log('estou na seção HOMME')
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopOnScroll() {
  if (scrollY > 150) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`#homme, 
#homme img, 
#homme .stats, 
#services,
#services homme,
#services .card,
#about,
#about hearder,
#about .content`)
