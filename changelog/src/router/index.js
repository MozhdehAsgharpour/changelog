/* import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

export const routes = [{
        path: '/changelogLists',
        component: () =>
            import ( /* webpackChunkName: "board" */
/*
"../components/changelogs/changelogLists.vue"),
}, {
    path: '/createChangelog',
    component: () =>
        import ( /* webpackChunkName: "board" */
/*
"../components/changelogs/createChangelog.vue"),
},
];

const router = new VueRouter({
    mode: "history",
    routes,
});
export default router; */
import changelogLists from '../components/changelogs/changelogLists.vue'
import createChangelog from '../components/changelogs/createChangelog.vue'
import createLable from '../components/changelogs/createLable.vue'

export const Routes = [{
        path: '/',
        component: changelogLists
    },
    {
        path: '/createChangelog',
        component: createChangelog
    },
    {
        path: '/createLable',
        component: createLable
    },



]