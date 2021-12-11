const express = require('express')
const app = express()

app.use(express.json())

app.get('/test', (req, res) => {
	res.json({
		success: true,
		host: req.headers.host,
		time: `${new Date()
			.getHours()
			.toString()
			.padStart(2, '0')}:${new Date()
			.getMinutes()
			.toString()
			.padStart(2, '0')}:${new Date()
			.getSeconds()
			.toString()
			.padStart(2, '0')}`
	})
})

module.exports = app

if (require.main === module) {
	const PORT = process.env.PORT || 3001
	app.listen(PORT, () => {
		console.log(`API server listening on port ${PORT}`)
	})
}
