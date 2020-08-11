<template>
    <div>
        <page-title title="keepalive" />
        <div class="page-container">
            <Card dis-hover style="border:0">
                vue2.1.0之前------
                路由中 meta.keepAlive=true 就会被缓存
            </Card>
            <Card dis-hover style="border:0">
                vue2.1.0之后------
                一个include解决了，不需要多写一个标签，也不需要在路由元中添加keepAlive了
                a 为组件名称
                <!-- <keep-alive include='a'>
                    <router-view></router-view>
                </keep-alive> -->
            </Card>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    created() {

    },
    methods: {

    }
}
</script>

<style scoped>
.page-container {
    margin: 20px
}
</style>