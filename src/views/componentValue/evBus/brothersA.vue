<template>
    <div>
        <div class="page-container">
            <Card dis-hover style="border:0">
                
            </Card>
            <Card style='margin-top:20px'>
              <p slot="title">兄弟组件</p>
              <p>字符串:{{name}}</p><Button type="primary" @click="sendMsg()">兄弟组件传值</Button>
            </Card>
        </div>
    </div>
</template>

<script>
import {EventBus} from '../../../EventBus'
export default {
    data() {
        return {
            name:'兄弟组件',
            loading: false,
        }
    },
    created() {

    },
    methods: {
        sendMsg() { 
            EventBus.$emit("aMsg", '来自A页面的消息'); 
        }
    }
}
</script>

<style scoped>
.page-container {
    margin: 20px
}
</style>