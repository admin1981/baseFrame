<template>
    <div>
        <page-title title="数组的基本用法" />
        <div class="page-container">
            <Card style='margin-top:20px'>
              <p slot="title">向数组中添加元素：push</p>
              <p>字符串:{{arrA}}</p>
            </Card>
        </div>
    </div>
</template>

<script>
import childForm from '../Components/childForm';
export default {
    components: { childForm },
    data() {
        return {
            loading: false,
            arrA:[1,2,3],
            k:'0000'
        }
    },
    created() {

        var arrB = this.arrA.splice(1,0,"B","C")
         alert(this.arrA)
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