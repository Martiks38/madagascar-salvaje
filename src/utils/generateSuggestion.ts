import * as data from '@assets/db/dataDB.json'
import type { ISuggestionOption } from '@typings/SuggestionOption'

export const generateSuggestions = ({
	section,
	path,
	exclude
}: {
	section: string
	path?: string
	exclude?: string
}): ISuggestionOption[] => {
	const suggestions = data[section as keyof typeof data].map((el) => {
		const normalizeName = el.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
		let href = encodeURI(normalizeName)

		if (path) href = path.concat('/', href)

		return {
			img: el.imgs[0],
			href,
			name: el.name
		}
	})

	return !exclude
		? suggestions
		: suggestions.filter((el) => {
				return el.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '') !== exclude
		  })
}
