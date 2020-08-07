<template>
    <div>
        <Menu 
          :accordion="true" 
          theme="dark" 
          width="200px" 
          :class="menuitemClasses" 
          active-class="active"
          :open-names="openNames" 
          :active-name="activeName" 
          >
            <the-menu-item :subMenus="menus" />
        </Menu>
    </div>
</template>

<script>
import menus from "@/menu/index.js";
import TheMenuItem from "./TheMenuItem";
export default {
    props: {
        isCollapsed: {
            type: Boolean,
            default: false
        }
    },
    components: { TheMenuItem },
    data() {
        return {
            menus:menus['menu']
        }
    },
    methods: {
        getLastChildrenMenu(menu) {
            if ( menu.children && menu.children.length > 0 ) {
                return this.getLastChildrenMenu(menu.children[0]);
            }else {
                return menu.menuName
            }
        },
        handleFindMenu(menu) {
            if(menu.children && menu.children.length > 0 ) {
                menu.children.map((item, key) => {
                    return this.handleFindMenu(item);
                })
            }else {
                const {router} = menu
                return menu.menuName
            }
        }
    },
    computed: {
        rotateIcon() {
            return ['menu-icon', this.isCollapsed ? 'rotate-icon' : ''];
        },
        menuitemClasses() {
            return ['menu-item', this.isCollapsed ? 'collapsed-menu' : ''];
        },
        activeName() {
            return "";
            //打开第一个菜单的第一个子菜单
            const {menus} = this;
            let lastMenu = "";
            if(menus.length) {
                lastMenu = this.getLastChildrenMenu(menus[0]);
            }
            return lastMenu
        },
        openNames() {
            return [];
            Console.log(this.$route)
            //打开第一个菜单
            const {menus} = this;
            const openNames = [];
            if(menus.length && menus[0].menuName) openNames.push(menus[0].menuName);
            return openNames
        }
    }
}
</script>

<style>
</style>