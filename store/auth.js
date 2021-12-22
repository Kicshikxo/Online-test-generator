export const state = () => ({
	user: {},
	isLoggedIn: false
})

export const actions = {
	async login({ commit }) {
		const result = await this.app.$api('auth')

		if (result.success) {
			commit('loggedIn', result.user)
		}
	},
	logout({ commit }) {
		commit('loggedOut')
	}
}

export const mutations = {
	loggedIn(state, user) {
		state.user = user
		state.isLoggedIn = true
	},
	loggedOut(state) {
		state.user = {}
		state.isLoggedIn = false
	}
}

export const getters = {}
