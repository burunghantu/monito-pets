export default () => {
	const date = new Date()
	const year = date.getFullYear()
	const month = date.getMonth() + 1
	const day = date.getDate()
	const time = '23:59:59'
	return `${year}-${month}-${day} ${time}`
}