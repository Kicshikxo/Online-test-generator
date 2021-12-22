export const state = () => ({})

export const actions = {
	async nuxtServerInit({ dispatch }) {
		await dispatch('auth/login')
	}
}

export const mutations = {}

export const getters = {}
