export default ({ $axios, req }, inject) => {
	inject('api', async path => {
		try {
			return await $axios.$get(`http://${req.headers.host}/api/${path}`)
		} catch (e) {
			console.error(e)
			return { success: false }
		}
	})
}
