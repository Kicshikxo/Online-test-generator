export default ({ $axios }, inject) => {
	inject('api', async (path, params) => {
		try {
			return await $axios['$' + (params ? 'post' : 'get')](`/api/${path}`, params)
		} catch (e) {
			console.error(e)
			return { success: false, error: e }
		}
	})
}
