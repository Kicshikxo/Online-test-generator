export default async ({ $api, $toast, store, redirect }) => {
	if (!store.state.auth.isLoggedIn) {
		const result = await $api('auth')

		if (result.success) {
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
}
