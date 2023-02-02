let headerPage: HTMLElement
let theme = window.localStorage.getItem('theme')
let rotationIncreaseMoonSun = 0

const increaseRotation = (increase: number, angle: number, selector: string) =>
	((document.querySelector(selector) as HTMLElement).style.transform = `rotate(${
		increase * angle
	}deg)`)

document.addEventListener('DOMContentLoaded', () => {
	headerPage = document.querySelector('.headerPage') as HTMLElement

	if (theme === 'light') {
		rotationIncreaseMoonSun++

		increaseRotation(rotationIncreaseMoonSun, 180, '#button-theme')

		if (window.matchMedia('(prefers-color-scheme: light)').matches) return

		headerPage.classList.remove('dark')
		headerPage.classList.add('light')
		document.body.classList.remove('dark')
		document.body.classList.add('light')
	}

	if (theme === 'dark') {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) return

		headerPage.classList.add('dark')
		headerPage.classList.remove('light')
		document.body.classList.add('dark')
		document.body.classList.remove('light')
	}

	if (!theme) {
		if (window.matchMedia('(prefers-color-scheme: light)').matches) {
			window.localStorage.setItem('theme', 'light')

			increaseRotation(rotationIncreaseMoonSun, 180, '#button-theme')
		} else {
			window.localStorage.setItem('theme', 'dark')
		}
	}
})

document.querySelector('#button-theme')?.addEventListener('click', () => {
	rotationIncreaseMoonSun++

	increaseRotation(rotationIncreaseMoonSun, 180, '#button-theme')

	if (theme === 'dark') {
		headerPage.classList.add('light')
		headerPage.classList.remove('dark')

		document.body.classList.remove('dark')
		document.body.classList.add('light')

		window.localStorage.setItem('theme', 'light')
		theme = 'light'
	} else if (theme === 'light') {
		headerPage.classList.add('dark')
		headerPage.classList.remove('light')

		document.body.classList.add('dark')
		document.body.classList.remove('light')

		window.localStorage.setItem('theme', 'dark')
		theme = 'dark'
	}
})
