require('dotenv').config()

const express = require('express')
const app = express()

const cookieParser = require('cookie-parser')
const compression = require('compression')
const cors = require('cors')
const jwt = require('jsonwebtoken')

app.use(cors())
app.use(express.json())
app.use(
	express.urlencoded({
		extended: false
	})
)
app.use(cookieParser())
app.use(compression())

const dbController = require('./db/dbController')

app.post('/auth/login', async function (request, response) {
	const data = request.body
	if (data && data.login && data.password) {
		const result = await dbController.loginUser({
			login: data.login,
			password: data.password
		})

		if (result) {
			response.cookie('token', result.token, {
				httpOnly: true
			})
			response.json({
				user: {
					username: result.user.username
				},
				success: true,
				redirect: '/'
			})
		} else {
			response.json({
				success: false
			})
		}
	} else {
		response.json({
			success: false
		})
	}
})

app.get('/auth/logout', (request, response) => {
	if (request.cookies.token) {
		response.clearCookie('token')

		response.json({
			success: true
		})
	} else {
		response.json({
			success: false
		})
	}
})

app.get('/auth', async (request, response) => {
	const token = request.cookies.token || ''
	try {
		const data = jwt.verify(token, process.env.SECRET_KEY)
		const user = await dbController.findUserById(data.id)

		if (user) {
			response.json({
				user: {
					username: user.username
				},
				success: true
			})
		} else {
			response.json({
				success: false
			})
		}
	} catch (e) {
		response.json({
			success: false
		})
	}
})

module.exports = app

if (require.main === module) {
	const PORT = process.env.PORT || 3001
	app.listen(PORT, () => {
		console.log(`API server listening on port ${PORT}`)
	})
}
