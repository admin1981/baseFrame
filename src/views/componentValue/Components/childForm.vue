<template>
    <div>
        <Form label-position='left' :label-width='0' inline>
            <Row type='flex' justify='start'>
                <Col span="24">
                  <Card>
                    <p slot="title">子组件</p>
                    <p>父传子(字符串)：{{propA}}</p>
                    <p>父传子(数组)：{{propB}}<span v-for="(i,index) in newArray" :key="index">{{i}}</span></p>
                    <p>父传子(对象)：{{propC.a}}{{propC.b}}</p>

                    <h3 style='margin-top:20px'>子组件的值</h3>
                    <Button type="primary" @click="childClick">子传父</Button>
                  </Card>
                </Col>
            </Row>
        </Form>
    </div>
</template>

<script>
export default {
    props: {
        propA: {
            type:String,
            required: true, //必传
            default:'默认值'
        },
        propB: {
            type:Array,
            default() {
                return []
            }
        },
        propC: {
            type:Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {
          childValue: '我是子组件的数据',
          newArray:this.propB
        }
    },
    methods: {
        childClick () {
        // childByValue是在父组件on监听的方法
        // 第二个参数this.childValue是需要传的值
        this.$emit('childByValue', this.childValue)
      }
    },
}
</script>

<style scoped>
.ivu-form-item {
    margin-bottom: 0px;
    width: 250px;
}
</style>