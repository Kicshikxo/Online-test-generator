export default async ({ $api, $toast, store, redirect }) => {
	const result = await $api('auth')

	if (result.success && !store.state.auth.isLoggedIn) {
		store.commit('auth/loggedIn', result.user)
	} else {
		if (process.client && $toast) {
			$toast('Ошибка доступа', {
				type: 'error'
			})
		}
		redirect('/')
	}
}