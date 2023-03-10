import { increaseRotation } from '@utils/increaseRotation'
import { toggleTheme } from '@utils/toggleTheme'

let theme = window.localStorage.getItem('theme')
let rotationIncreaseMoonSun = 0

document.addEventListener('DOMContentLoaded', () => {
	if (theme === 'light') {
		rotationIncreaseMoonSun++
		increaseRotation(rotationIncreaseMoonSun, 180, '#button-theme')
		return
	}

	if (!theme && window.matchMedia('(prefers-color-scheme: light)').matches) {
		increaseRotation(rotationIncreaseMoonSun, 180, '#button-theme')
		window.localStorage.setItem('theme', 'light')
	}

	if (theme === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches) {
		toggleTheme()

		window.localStorage.setItem('theme', 'dark')
	}
})

document.querySelector('#button-theme')?.addEventListener('click', () => {
	rotationIncreaseMoonSun++
	increaseRotation(rotationIncreaseMoonSun, 180, '#button-theme')

	if (theme === 'dark') {
		toggleTheme()

		window.localStorage.setItem('theme', 'light')
		theme = 'light'
	} else if (theme === 'light') {
		toggleTheme()

		window.localStorage.setItem('theme', 'dark')
		theme = 'dark'
	}
})
