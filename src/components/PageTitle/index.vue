<template>
    <div class="container">
       <template v-if="back">
           <span class="back" @click="handleBack">
               <Icon type="md-arrow-back" /><span>返回</span>
           </span>
       </template>
       <span>{{title}}</span>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        back: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        handleBack() {
            this.$router.go(-1);
        }
    }
}
</script>

<style scoped>
.container {
    display: flex;
    align-items: center;
    padding-left: 20px;
    height: 50px;
    background-color: #fff
}
.container span {
    font-size: 15px;
    font-weight: bold
}
.back {
    cursor: pointer;
    margin-right: 15px;
    display: flex;
    align-items: center
}
</style>