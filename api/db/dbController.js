require('dotenv').config()
const db = require('monk')(process.env.MONGO_DB_URI)
const users = db.get('users')

const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

class DatabaseController {
	async createUser(data) {
		const { username, login, password } = data

		console.log(`Пользователь создан: ${username}\n\t${login}:${password}`)

		const user = await users.insert({
			registrationDate: new Date().toISOString(),
			username: data.username,
			login: data.login,
			password: bcrypt.hashSync(data.password, 8)
		})
		return user
	}

	async isUsernameBusy(username) {
		return !!(await users.findOne({ username }))
	}

	async isLoginBusy(login) {
		return !!(await users.findOne({ login }))
	}

	async findUser(data) {
		const { login, password } = data

		const user = await users.findOne({ login })

		if (user) {
			if (bcrypt.compareSync(password, user.password)) {
				return user
			} else {
				return null
			}
		} else {
			return null
		}
	}

	async loginUser(data) {
		const user = await this.findUser(data)

		if (user) {
			const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, { expiresIn: '7d' })
			return {
				user,
				token
			}
		}
	}

	async findUserById(id) {
		const user = await users.findOne({ _id: id })

		return user
	}
}

module.exports = new DatabaseController()
