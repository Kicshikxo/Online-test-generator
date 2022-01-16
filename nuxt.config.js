import colors from 'vuetify/es5/util/colors'

export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		// titleTemplate: '%s - online-test-generator',
		title: 'Online Test Generator',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'preload', href: '/fonts/Roboto-Regular.woff2', as: 'font', crossorigin: true },
			{ rel: 'stylesheet', href: '/vuetify.loaded.css' },
			{ rel: 'preload', href: '/vuetify.loaded.css', as: 'style' }
		]
	},

	loading: {
		color: '#1976D2',
		height: '3px'
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [],
	// css: ['@/static/vuetify.loaded.css'],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		{ src: '~/plugins/api.server.js', mode: 'server' },
		{ src: '~/plugins/api.client.js', mode: 'client' },
		{ src: '~/plugins/slicksort' }
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/typescript
		'@nuxt/typescript-build',
		// https://go.nuxtjs.dev/vuetify
		'@nuxtjs/vuetify',
		[
			'vue-toastification/nuxt',
			{
				icon: false,
				position: 'bottom-right',
				transition: 'Vue-Toastification__fade',
				closeButton: false,
				draggablePercent: 0.35,
				transitionDuration: 750,
				maxToasts: 5,
				timeout: 1750,
				newestOnTop: false
			}
		]
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/axios
		'@nuxtjs/axios',
		// https://go.nuxtjs.dev/pwa
		'@nuxtjs/pwa'
	],

	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {
		baseURL: '/'
	},

	// PWA module configuration: https://go.nuxtjs.dev/pwa
	pwa: {
		icon: {
			source: '@/static/icon.png'
		},
		manifest: {
			name: 'Online Test Generator',
			short_name: 'Test Generator',
			lang: 'ru'
		}
	},

	// Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
	vuetify: {
		defaultAssets: false,
		treeShake: process.env.NODE_ENV === 'production' && {
			loaderOptions: () => ({
				registerStylesSSR: true
			})
		},
		lang: {
			current: 'ru',
			locales: {
				ru: {
					noDataText: 'Список вариантов пуст'
				}
			}
		},
		theme: {
			dark: false,
			themes: {
				dark: {
					primary: colors.blue.darken2,
					accent: colors.grey.darken3,
					secondary: colors.amber.darken3,
					info: colors.teal.lighten1,
					warning: colors.amber.base,
					error: colors.deepOrange.accent4,
					success: colors.green.accent3
				}
			}
		}
	},

	serverMiddleware: [{ path: '/api', handler: '~/api/index.js' }],

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
	}
}
