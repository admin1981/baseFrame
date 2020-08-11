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
      {
        index: "1-4",
        menuName: "keepalive",
        router: "keepaliveIndex",
      },
      {
        index: "1-5",
        menuName: "生命周期理解",
        router: "cycleIndex",
      },
      {
        index: "1-6",
        menuName: "数组的基础用法",
        router: "arrayIndex",
      },
    ]
  },
]

export default {menu: menu};
