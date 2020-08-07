<template>
    <div>
        <Form label-position='left' :label-width='0' inline>
            <Row type='flex' justify='start'>
                <Col>
                  <FormItem label='' v-if="groupName">
                      <Input type="text" v-model="formData.groupName" placeholder="用户组名查询"></Input>
                  </FormItem>
                  <Button class="button-item" @click="handleSearch" icon="md-search" type="primary">查询</Button>
                  <Button class="button-item" @click="handleReset" icon="md-close">重置</Button>
                </Col>
            </Row>
        </Form>
    </div>
</template>

<script>
export default {
    props: {
        groupName: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            formData: {
                groupName: '' //用户组名
            },
            // firstName: '123',
            // lastName: '456'
        }
    },
    // computed: {
    //     fullName: function() {
    //         return this.firstName + '' + this.lastName
    //     },
    // },
    methods: {
        handleSearch() {
            const { formData } = this;
            this.handleEmitSearch(formData);
        },
        handleReset() {
            const { formData } = this;
            const formDataNew = {};
            for(const key in formData) {
                formDataNew[key] = '';
            }
            this.formData = formDataNew;
            this.handleEmitSearch({});
        },
        handleEmitSearch(formData) {
            formData = this.handleDeleteEmpty(formData)
            this.$emit('on-search', formData)
        },
        handleDeleteEmpty(formData) {
            const data = {}
            for(const key in formData) {
              if(formData.hasOwnProperty(key)) {
                 const element = formData[key];
                 if(element) {
                     daya[key] = element
                 }
              }
            }
            return data
        }
    }
}
</script>

<style scoped>
.ivu-form-item {
    margin-bottom: 0px;
    width: 250px;
}
</style>