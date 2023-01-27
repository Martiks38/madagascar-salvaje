export const toggleMenu = (menu) => {
	const $menu = document.querySelector(menu)

	$menu?.classList.toggle('hidden')
}
