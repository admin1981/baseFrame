<template>
    <div>
        <page-title title="数组的基本用法" />
        <div class="page-container">
            <Card style='margin-top:20px'>
              <p slot="title">向数组中添加元素：push</p>
              <p>字符串:{{arrA}}</p>
              开头和结尾添加都是返回数组的长度；
              开头和结尾的删除都是返回删除的元素；
              splice()返回被删除的元素；
              concat返回新的数组；
              slice返回提取的数组；
            </Card>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loading: false,
            arrA:[1,2,3],
            arrC:[1,2,3],
            arrE:[{a:'a'},{a:'b'}],
            arrF:[1,2,3,4,5,6,3,2,1],
            k:'0000',
            a : [1,2,[3,4,[5,6,[7,8]]]]
        }
    },
    created() {
        

        // function atest(obj,array= []){
        // return obj.reduce(function(init,value,index,arr){
        // if(!Array.isArray(value)) {
        //     init.push(value)
        // } else {
        //     atest(value, init)
        // }
        // return init
        // },array)
        // }
        //let arrF = this.arrE.map(item => item.name = 'm')
        //this.arrA.toString()
        //const aaa = [new Set(this.arrF)]
        
        //var b=this.a.flat(Infinity)
        var b=this.a.join().split(',')
        console.log(b)
        //let arrD = this.arrC.map(item => item*2)
        //var arrB = this.arrA.push(1,0,"B","C")  //向数组末尾添加元素，返回数组的长度
        //let arrB = this.arrA.pop()  //向数组末尾删除元素，返回从数组中删除的元素(当数组为空时返回undefined)
        //let arrB = this.arrA.shift()  //向数组删除第一位元素，返回从数组中删除的元素(当数组为空时返回undefined)
        //var arrB = this.arrA.unshift(1,0,"B","C")
        //var arrB = this.arrA.splice(1,0,"B","C")
        //console.log(this.arrA.toString().split(',').join(''))
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