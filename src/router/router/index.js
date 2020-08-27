var router=[
  //父传子
  {
    path: 'componentValue/fatherToSon/index',
    name: 'GroupList',
    component: resolve => require(['../../views/componentValue/fatherToSon/index.vue'], resolve),
    meta:{requireAuth:true}
  },
  //evBus
  {
    path: 'componentValue/evBus/index',
    name: 'StrategyList',
    component: resolve => require(['../../views/componentValue/evBus/index.vue'], resolve),
    meta:{requireAuth:true}
  },
  //子传父
  {
    path: 'componentValue/sonToFather/index',
    name: 'UserList',
    component: resolve => require(['../../views/componentValue/sonToFather/index.vue'], resolve),
    meta:{requireAuth:true}
  },
    //keepalive
    {
      path: 'keepalive/index',
      name: 'keepaliveIndex',
      component: resolve => require(['../../views/keepalive/index.vue'], resolve),
      meta:{requireAuth:true, keepalive:true}
    },
    //数组的基本用法
    {
      path: 'arrayList/index',
      name: 'arrayIndex',
      component: resolve => require(['../../views/arrayList/index.vue'], resolve),
      meta:{requireAuth:true}
    },
    //过滤
    {
      path: 'filter/index',
      name: 'filterIndex',
      component: resolve => require(['../../views/filter/index.vue'], resolve),
      meta:{requireAuth:true}
    },
    //计算
    {
      path: 'calculation/index',
      name: 'calculationIndex',
      component: resolve => require(['../../views/calculation/index.vue'], resolve),
      meta:{requireAuth:true}
    },
]


export default router
