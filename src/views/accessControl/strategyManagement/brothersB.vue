<template>
    <div>
        <div class="page-container">
            <Card dis-hover style="border:0">
                
            </Card>
            <Card style='margin-top:20px'>
              <p slot="title">兄弟组件</p>
              <p>字符串:{{msg}}</p>
            </Card>
        </div>
    </div>
</template>

<script>
import {EventBus} from '../../../EventBus'
export default {
    data() {
        return {
            msg: '',
            loading: false,
        }
    },
    created() {
       EventBus.$on("aMsg", (msg) => { 
             this.msg = msg; 
             //alert(msg)
             });
    },
    mounted() {
        
    }
}
</script>

<style scoped>
.page-container {
    margin: 20px
}
</style>