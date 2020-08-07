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
]


export default router
