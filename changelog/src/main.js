import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import vueRouter from 'vue-router'
import { Routes } from './router/index.js'
// import router from "@/router";

import Editor from 'v-markdown-editor'

Vue.use(Editor);
Vue.use(vueRouter);
const router = new vueRouter({
    routes: Routes,
    mode: "history"
})

Vue.config.productionTip = false

/* Vue.mixin({
    methods: {
        goTo(path, reload) {
            let oldPath = this.$route.path,
                newPath = path;
            if (oldPath !== newPath) {
                this.$router.push(path);
            } else if (reload) {
                this.$router.go(path);
            }
        },
    }
}); */


new Vue({
    vuetify,
    router,
    render: h => h(App)
}).$mount('#app')