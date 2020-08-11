var router=[
  //组列表
  {
    path: 'accessControl/groupManagement/index',
    name: 'GroupList',
    component: resolve => require(['../../views/accessControl/groupManagement/index.vue'], resolve),
    meta:{requireAuth:true}
  },
  //策略列表
  {
    path: 'accessControl/strategyManagement/index',
    name: 'StrategyList',
    component: resolve => require(['../../views/accessControl/strategyManagement/index.vue'], resolve),
    meta:{requireAuth:true}
  },
  //用户列表
  {
    path: 'accessControl/userManagement/index',
    name: 'UserList',
    component: resolve => require(['../../views/accessControl/userManagement/index.vue'], resolve),
    meta:{requireAuth:true}
  },
    //keepalive
    {
      path: 'accessControl/keepalive/index',
      name: 'keepaliveIndex',
      component: resolve => require(['../../views/accessControl/keepalive/index.vue'], resolve),
      meta:{requireAuth:true, keepalive:true}
    },
    //生命周期函数理解
    {
      path: 'accessControl/cycle/index',
      name: 'cycleIndex',
      component: resolve => require(['../../views/accessControl/cycle/index.vue'], resolve),
      meta:{requireAuth:true}
    },
    //数组的基本用法
    {
      path: 'accessControl/arrayList/index',
      name: 'arrayIndex',
      component: resolve => require(['../../views/accessControl/arrayList/index.vue'], resolve),
      meta:{requireAuth:true}
    },
]


export default router
