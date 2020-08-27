import VueRouter from 'vue-router'
import Vue from 'vue'
import routers from './router'


Vue.use(VueRouter)
var router = new VueRouter({
  //base: 'tenant-console',
  mode: 'history',//'hash'
  routes:[
    {
      path: '/',
      redirect: "/componentValue/fatherToSon/index",
      component: resolve => require(['@/components/layout/index.vue'], resolve),
      children: routers,
      meta: { requireAuth:true }
    },
    {
      path: '*',
      name: '404',
      component: resolve => require(['@/views/errors/404.vue'], resolve),
      children: [],
      meta: { requireAuth:false }
    }
  ]
});
router.beforeEach((to, from, next) => {
  next()
});
export default router;
