export default async ({ $api, $toast, store, redirect }) => {
	const result = await $api('auth')

	if (result.success) {
		store.commit('auth/loggedIn', result.user)
	} else {
		store.dispatch('auth/logout')
		if (process.client && $toast) {
			$toast('Ошибка доступа', {
				type: 'error'
			})
		}
		redirect('/')
	}
}