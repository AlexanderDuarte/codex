const botaoMenu = document.querySelector('.btn__menu')
const botaoFechar = document.querySelector('.btn__menu--fechar')
const menuLateral = document.querySelector('.menu__container')
const botaoMenuUsu = document.querySelector('.btn__usu')
const menuUsuario = document.querySelector('.menu__usu')
const coverMenu = document.querySelector('.cover__menu')

const coverUsu = document.querySelector('.cover__usu')

botaoMenu.addEventListener('click', () => {
   menuLateral.classList.toggle('menu__container--ativo')
   coverMenu.classList.toggle('cover__menu--ativo')
})
botaoFechar.addEventListener('click', () => {
   menuLateral.classList.toggle('menu__container--ativo')
   coverMenu.classList.toggle('cover__menu--ativo')
   
})

botaoMenuUsu.addEventListener('click', () => {
  menuUsuario.classList.toggle('menu__usu--ativo')
  coverUsu.classList.toggle('cover__usu--ativo')
})

coverMenu.addEventListener('click', () => {
  menuLateral.classList.toggle('menu__container--ativo')
  coverMenu.classList.toggle('cover__menu--ativo')
})

coverUsu.addEventListener('click', () => {
  menuUsuario.classList.toggle('menu__usu--ativo')
  coverUsu.classList.toggle('cover__usu--ativo')
})



