var menu = [
  {
    index: "1",
    menuName: "组件传值",
    router: {},
    children:[
      {
        index: "1-1",
        menuName: "子传父",
        router: "UserList",
      },
      {
        index: "1-2",
        menuName: "父传子",
        router: "GroupList",
      },
      {
        index: "1-3",
        menuName: "eventBusA",
        router: "StrategyList",
      },
    ]
  },
]

export default {menu: menu};
