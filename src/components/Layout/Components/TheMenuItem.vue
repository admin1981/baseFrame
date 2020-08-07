<template>
    <div>
        <template v-for="(item, index) in subMenus">
        <!--如果没有子菜单-->
          <Submenu v-if="item.children && item.children.length > 0" :name="item.menuName">
          <!--菜单标题-->
            <template slot="title">
            <!--是否显示ICON-->
              <Icon v-if="hasIcon(item)" :type="item.menuIcon" />
              {{item.menuName}}    
            </template>
            <!--显示菜单内容-->
            <layout-menu-item :subMenus="item.children" />
          </Submenu>
          <!--如果没有子菜单。直接显示-->
          <MenuItem tag="span" v-else :to="{'name':item.router}" :name="item.menuName">
            <!--是否显示ICON-->
              <Icon v-if="hasIcon(item)" :type="item.menuIcon" />
              {{item.menuName}}   
          </MenuItem> 
        </template>
    </div>
</template>

<script>
export default {
    name: 'layout-menu-item',
    props: {
        subMenus: {
            type: Array,
            default: []
        }
    },
    data() {
        return {};
    },
    methods: {
        hasIcon(menu) {
            return menu.menuIcon && menu.menuIcon.length > 0;
        }
    }
}
</script>

<style scoped>

.ivu-menu-submenu {
    background: rgb(37, 43, 56);
}

.ivu-menu-dark.ivu-menu-vertical .ivu-menu-opened {
    background: #202531
}
</style>