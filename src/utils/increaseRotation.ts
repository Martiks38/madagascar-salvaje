export const increaseRotation = (increase: number, angle: number, selector: string) =>
	((document.querySelector(selector) as HTMLElement).style.transform = `rotate(${
		increase * angle
	}deg)`)
