<template>
    <div v-if="list.length">
        <table>
            <tr>
                <th></th>
                <th>商品名称</th>
                <th>商品单价</th>
                <th>购买数量</th>
                <th>操作</th>
            </tr>
            <tr v-for="(item, index) in list">
                <td>{{index + 1}}</td>
                <td>{{item.name}}</td>
                <td>{{item.price}}</td>
                <td>
                    <button @click="handleReduce(index)" :disabled="item.count === 1">-</button>
                    {{item.count}}
                    <button @click="handleAdd(index)">+</button>
                </td>
                <td><button @click="handleRemove(index)">移除</button></td>
            </tr>
        </table>
        <div>总价：{{totalPrice}}</div>
    </div>
    <div v-else>购物车为空</div>
</template>

<script>
export default {
    data() {
        return {
            list: [
                {
                    id: '1',
                    name: 'iphone7',
                    price: '6188',
                    count: '1'
                },
                {
                    id: '2',
                    name: 'iphone8',
                    price: '5888',
                    count: '1'
                },
                {
                    id: '3',
                    name: 'iphone8',
                    price: '21488',
                    count: '1'
                }
            ]
        }
    },
    computed: {
        totalPrice() {
            let total = 0;
            for(let i = 0; i<this.list.length; i++) {
                let item = this.list[i];
                total += item.price * item.count;
            }
            return total.toString().replace(/\B(?=(\d{3})+$)/g,',')
        },
    },
    methods: {
        handleReduce(index) {
            if(this.list[index].count === 1) return;
            this.list[index].count--;
        },
        handleAdd(index) {
            this.list[index].count++;
        },
        handleRemove(index) {
            this.list.splice(index, 1)
        }
    }
}
</script>

<style scoped>

</style>