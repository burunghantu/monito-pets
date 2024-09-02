export default date => {
	const months = {
		monthShort: 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des'.split('_'),
		monthFull:
			'January_February_March_April_May_June_July_August_September_October_November_December'.split(
				'_'
			)
	}
	const tFormat = date.replace(/\s/g, 'T')
	const parseDate = new Date(tFormat)
	const day = parseDate.getDate()
	const month = parseDate.getMonth()
	const year = parseDate.getFullYear()
	const monthName = months.monthFull[month]

	return `${day} ${monthName} ${year}`
}
