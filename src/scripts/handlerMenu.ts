const $ = (selector: string) => document.querySelector(selector)
const $$ = (selector: string) => document.querySelectorAll(selector)

const menu = $('[actions-menu]')
const menuButton = $('.menuButton')
const itemsMenu = $$('.linkMenu')
const backMenu = $('[back-menu]')

/** Change the aria attributes and modify the menu button and show or hide the menu list */
const changeMenuView = () => {
	const width = window.innerWidth

	if (width > 768) return

	menuButton?.classList.toggle('collapse')
	backMenu?.classList.toggle('invisible')
	menu?.classList.toggle('menu_view')
}

/** When choosing one of the sections of the page, it executes the changeMenuView function */
itemsMenu?.forEach((itemMenu) => itemMenu?.addEventListener('click', changeMenuView))

menuButton?.addEventListener('click', changeMenuView)

/** Calls the changeMenuView() function on click outside of the navigation menu or menu button */
document.addEventListener('click', (e) => {
	const target = e.target as HTMLElement
	const isHeaderOrMenu = target.closest('.headerPage') || target.closest('.menuButton')
	const isCollapse = menuButton?.classList.contains('collapse')

	if ((!isHeaderOrMenu && isCollapse) || target.closest('[back-menu]')) changeMenuView()
})

/** Modifies the aria attributes according to the new dimensions */
window.addEventListener('resize', () => {
	if (window.innerWidth >= 768) return

	menuButton?.classList.remove('collapse')
	backMenu?.classList.add('invisible')
	menu?.classList.remove('menu_view')
})
