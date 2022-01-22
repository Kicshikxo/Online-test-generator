import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)
export default ctx => {
    const vuetify = new Vuetify({
        lang: {
            current: 'ru',
            locales: {
                ru: {
                    noDataText: 'Список вариантов пуст'
                }
            }
        },
        theme: {
            dark: false
        }
    })
    ctx.app.vuetify = vuetify
    ctx.$vuetify = vuetify.framework
}