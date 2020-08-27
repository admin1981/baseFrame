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
  {
    index: "2",
    menuName: "缓存组件",
    router: {},
    children:[
      {
        index: "2-1",
        menuName: "keepalive",
        router: "keepaliveIndex",
      },
    ]
  },
  {
    index: "3",
    menuName: "数组用法",
    router: {},
    children:[
      {
        index: "3-1",
        menuName: "数组的基础用法",
        router: "arrayIndex",
      },
    ]
  },
  {
    index: "4",
    menuName: "VUE过滤",
    router: {},
    children:[
      {
        index: "4-1",
        menuName: "过滤",
        router: "filterIndex",
      },
    ]
  },
  {
    index: "5",
    menuName: "计算属性",
    router: {},
    children:[
      {
        index: "5-1",
        menuName: "购物车",
        router: "calculationIndex",
      },
    ]
  },
]

export default {menu: menu};
