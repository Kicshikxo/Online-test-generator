import Vue from 'vue'
import Vuetify from 'vuetify/lib'
// import colors from './../config/colors'
// import 'vuetify/dist/vuetify.min.css'
// import '@mdi/font/css/materialdesignicons.css'
Vue.use(Vuetify)
export default ctx => {
    const vuetify = new Vuetify({

    })
    ctx.app.vuetify = vuetify
    ctx.$vuetify = vuetify.framework
}