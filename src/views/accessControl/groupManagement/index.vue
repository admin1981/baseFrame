<template>
    <div>
        <page-title title="父传子" />
        <div class="page-container">
            <Card dis-hover style="border:0">
                <childForm :propA="name" :propB="arrayName" :propC="objectName" />
            </Card>
            <Card style='margin-top:20px'>
              <p slot="title">父组件</p>
              <p>字符串:{{name}}</p>
              <p>数组:{{arrayName}}</p>
              <p>对象:{{objectName}}</p>
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
            name:'我是父组件的值',
            arrayName: [1,2,3,4],
            objectName:{
               a:'1',b:'2',c:'3'
            },
            loading: false,
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