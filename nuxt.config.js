import colors from 'vuetify/lib/util/colors'

export default {
	target: 'server',

	head: {
		htmlAttrs: {
			lang: 'ru'
		},
		title: 'Online Test Generator',
		meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: '' }, { name: 'format-detection', content: 'telephone=no' }],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
			{ rel: 'stylesheet', href: '/css/vuetify.min.css' },
			{ rel: 'preload', href: '/css/vuetify.min.css', as: 'style' },
			{ rel: 'stylesheet', href: '/css/roboto-fontface.css' },
			{ rel: 'preload', href: '/css/roboto-fontface.css', as: 'style' },
			{ rel: 'preload', href: '/fonts/Roboto-Regular.woff2', as: 'font', crossorigin: true }
		]
	},

	css: [],

	plugins: [
		{ src: '~/plugins/api.server.js', mode: 'server' },
		{ src: '~/plugins/api.client.js', mode: 'client' }
	],

	components: true,

	buildModules: [
		'@nuxtjs/eslint-module',
		[
			'@nuxtjs/vuetify',
			{
				// treeShake: true,
				defaultAssets: false,
				theme: {
					dark: true,
					themes: {
						dark: {
							primary: colors.green.darken2,
							accent: colors.grey.darken3,
							secondary: colors.amber.darken3,
							info: colors.teal.lighten1,
							warning: colors.amber.base,
							error: colors.deepOrange.accent4,
							success: colors.green.accent3
						}
					}
				}
			}
		],
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

	modules: ['@nuxt/http', '@nuxtjs/pwa'],

	http: {
		baseURL: '/'
	},

	pwa: {
		icon: {
			source: '@/static/icon.png'
		},
		manifest: {
			name: 'Online test generator',
			short_name: 'Online test',
			lang: 'ru'
		}
	},

	serverMiddleware: [{ path: '/api', handler: '~/api/index.js' }],

	build: {
		minimize: true,
		html: {
			minify: {
				collapseBooleanAttributes: true,
				decodeEntities: true,
				minifyCSS: true,
				minifyJS: true,
				processConditionalComments: true,
				removeEmptyAttributes: true,
				removeRedundantAttributes: true,
				trimCustomFragments: true,
				useShortDoctype: true,
				minifyURLs: true,
				removeComments: true,
				removeEmptyElements: true
			}
		}
	}
}
