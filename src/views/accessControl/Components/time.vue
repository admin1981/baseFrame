<template>
    <div>
        <Form label-position='left' :label-width='0' inline>
            <Row type='flex' justify='start'>
                <Col>
                  <!--时间搜索-->
                  <ButtonGroup>
                      <Button @click="handleCurrMonth()" :class="{active:isActive}">本月</Button>
                      <Button @click="handleLastMonth()" :class="{active:onActive}">上月</Button>
                  </ButtonGroup>
                  <!--时间插件-->
                  <DatePicker type="daterange" placement="bottom-start" @on-change="handleChange" v-model="timeArray"></DatePicker>

                  <FormItem v-if="groupName">
                      <Input type="text" v-model="formData.search" placeholder="用户组名查询"></Input>
                  </FormItem>
                  <Button class="button-item" @click="handleSearch" icon="md-search" type="primary">查询</Button>
                  <Button class="button-item" @click="handleReset" icon="md-close">重置</Button>
                </Col>
            </Row>
        </Form>
    </div>
</template>

<script>
//import moment from 'moment';
import getData from '../../../utils/getData'
export default {
    props: {
        groupName: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            isActive: false,
            onActive: false,
            timeArray: [],
            formData: {
                startTime: '',   //开始时间
                endTime: '',     //结束时间
                search: '' //用户组名
            }
        }
    },
    created() {
        //默认今天时间
        this.formData.startTime = getData.getToday().starttime;
        this.formData.endTime = getData.getToday().endtime;
        this.timeArray = [this.formData.startTime, this.formData.endTime];
    },
    methods: {
        //本月按钮
        handleCurrMonth() {
            this.formData.startTime = getData.getCurrMonthDays().starttime;
            this.formData.endTime = getData.getCurrMonthDays().endtime;
            this.timeArray = [this.formData.startTime, this.formData.endTime];
            this.isActive = true;
            this.onActive = false;
        },
        //上一个月按钮
        handleLastMonth() {
            this.formData.startTime = getData.getLastMonthDays().starttime;
            this.formData.endTime = getData.getLastMonthDays().endtime;
            this.timeArray = [this.formData.startTime, this.formData.endTime];
            this.isActive = false;
            this.onActive = true;
        },
        //时间插件选择日期
        handleChange(t) {
            this.timeArray = t
            this.formData.startTime = this.handleFormateTime(t[0]);
            this.formData.endTime = this.handleFormateTime(t[1]);
        },
        //时间格式转换
        handleFormateTime(timeStr) {
            return moment(timeStr).format('YYYY-MM-DD')
        },
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
            this.handleEmitSearch({formDataNew});
            this.isActive = false;
            this.onActive = false;
        },
        handleEmitSearch(formData) {
            formData = this.handleDeleteEmpty(formData)
            this.$emit('on-search', formData)
        },
        // handleDeleteEmpty(formData) {
        //     const data = {}
        //     for(const key in formData) {
        //       if(formData.hasOwnProperty(key)) {
        //          const element = formData[key];
        //          if(element) {
        //              daya[key] = element
        //          }
        //       }
        //     }
        //     return data
        // }
    }
}
</script>

<style scoped>
.ivu-form-item {
    margin-bottom: 0px;
    width: 250px;
}
.add-button {
    float: right;
    margin-right: -44px;
}
.active {
    background-color: #2d8cf0;
    color: #fff;
}
</style>