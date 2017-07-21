const routers = [{
    path: '/',
    meta: {
        title: 'androidthanatos的博客'
    },
    component: (resolve) => require(['./views/index.vue'], resolve)
},{
    path: '/main',
    meta: {
        title: 'androidthanatos的博客'
    },
    component: (resolve) => require(['./views/main.vue'], resolve)
},{
    path: '/resume',
    meta: {
        title: 'androidthanatos的博客'
    },
    component: (resolve) => require(['./views/resume.vue'], resolve)
}];
export default routers;