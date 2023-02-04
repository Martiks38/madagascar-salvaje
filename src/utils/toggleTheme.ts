export const toggleTheme = () => {
	const darkElements = document.querySelectorAll('[dark-theme]')

	darkElements.forEach((element) => {
		element.classList.toggle('dark')
	})
}
