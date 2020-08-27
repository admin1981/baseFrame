<template>
    <div>
        <page-title title="VUE过滤" />
        <div class="page-container">
            <Card dis-hover style="border:0">
                <div>
                    <p>{{ msg | msgFormat('母后','123') | test}}</p>
                    <p>{{ msga | uppercase}}</p>
                </div>
            </Card>
            
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
// 定义一个Vue全局的过滤器，名字叫做  msgFormat
        Vue.filter('msgFormat',function(msg,arg,arg2){
            // 字符串的 replace 方法，第一个参数，除了可写一个 字符串 之外，还可以定义一个正则
            return msg.replace(/魔镜/g,arg + arg2)
        })
        Vue.filter('test',function(msg){
            return msg + '======='
        })
//  定义长度为10的过滤器
Vue.filter('length10',(e) =>{
  return e.slice(0,10) + '...'
})
//  过滤器传参
Vue.filter('length10',(e,str) =>{
  return e.slice(0,str) + '...'
})
//  定义转大小写的过滤器
Vue.filter('toUpperCase',(e)=>{
 return  e.toUpperCase()
})
export default {
    data() {
        return {
            msg: '魔镜魔镜，谁是这世界上最美丽的女人，魔镜说当然是小鱼儿',
            msga: 'administrator'
        }
    },
    //组件内过滤器，需要定义在filtets这个对象中，对象中定义的都是方法
    filters: {
    //  自行输入长度
    length(e, num) {
      return e.slice(0, num) + "...";
    },
    //  转为大写
    toUpperCase(e) {
      return e.toUpperCase();
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