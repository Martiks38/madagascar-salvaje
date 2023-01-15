export const toggleMenu = (menu: string) => {
  const $menu = document.querySelector(menu)

  $menu?.classList.toggle('hidden')
}
