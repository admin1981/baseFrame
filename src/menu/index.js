var menu = [
  {
    index: "1",
    menuName: "访问控制管理",
    router: {},
    children:[
      {
        index: "1-1",
        menuName: "用户管理",
        router: "UserList",
      },
      {
        index: "1-2",
        menuName: "组管理",
        router: "GroupList",
      },
      {
        index: "1-3",
        menuName: "策略管理",
        router: "StrategyList",
      }
    ]
  },
]

export default {menu: menu};
