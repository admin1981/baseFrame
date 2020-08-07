<template>
    <div>
       <page-title title="用户管理" />
       <div class="page-container">
            <Card dis-hover style="border:0">
                <Button v-if="showBtn" icon="md-add" disabled>添加用户到组</Button>
                <Button v-else icon="md-add" type="primary" @click="handleUserListCreate()">添加用户到组</Button>
                    <Modal v-model="modal1" width="800" title="加入组">
                        <Transfer ref="refTransefer" :data="leftData" :target-keys="rightData" :list-style="listStyle" :titles="titles" :render-format="render1" @on-change="handleChangeArr"></Transfer>
                        <div slot="footer">
                            <Button @click="handleUserListReset()">取消</Button>
                            <Button type="primary" @click="handleUserListSubmit()">确定</Button>
                        </div>
                    </Modal>
                <Table :loading="loading" :columns="columns" :data="tableData" @on-selection-change="changePagination">
                    <!--序号-->
                    <template slot="index" slot-scope="{row, index}">
                        <span>{{index + 1}}</span>
                    </template>
                    <!--创建时间-->
                    <template slot="createTime" slot-scope="{ row }">
                        <span>{{formateTime(row.createTime)}}</span>
                    </template>
                    <!--操作-->
                    <template slot="action" slot-scope="{ row, index }">
                        <Button type="text" size="small" class="submit-button" @click="handleAuditingSubmit(row)">授权</Button>
                        <!--用户授权列表-->
                        <Modal v-model="modal2" width="800" title="授权">
                            <Table :columns="columns2" :data="tableData2" @on-selection-chanage="changeChose()"></Table>
                            <div slot="footer">
                                <Button @click="handleAuthorityReset()">取消</Button>
                                <Button type="primary" @click="handleAuthoritySubmit()">确定</Button>
                            </div>
                        </Modal>
                        <Button type="text" size="small" class="submit-button" @click="handleGoToViewPage(row, index)">查看</Button>
                    </template>
                </Table>
            </Card>
       </div>
    </div>
</template>

<script>
import { getSuerListTable, getUserAllGroup, handleUserListCreate, getSuerAuditingList, handleAuthorityOk } from '@/api/accessControl/user/userApi';
//import moment from 'moment';   日期转换插件
export default {
    data() {
        return {
            //添加用户到组
            modal1: false,
            leftData: [],
            rightData: [],
            listStyle: {
               width: '354px',
               height: '250px',
            },
            titles: ['可选择的组', '已选择的组'],
            
            showBtn: true, //添加用户到组按钮 --显示或者隐藏
            loading: false,
            PaginationIds: [],  //用户列表复选框
            columns: [
                {
                    type: 'selection',
                    align: 'center',
                    width: 80
                },
                {
                    title: '用户名称',
                    key: 'name',
                    align: 'left',
                },
                {
                    title: '邮箱',
                    key: 'email',
                    align: 'left',
                },
                {
                    title: '手机号',
                    key: 'telephone',
                    align: 'left',
                },
                {
                    title: '备注',
                    key: 'remark',
                    align: 'left',
                },
                {
                    title: '创建时间',
                    key: 'createTime',
                    align: 'left',
                },
                {
                    title: '操作',
                    slot: 'action',
                    align: 'center',
                }
            ],
            tableData: [
                {
                    name: '刘德华',
                    email: 'admin@126.com',
                    telephone: '13807368888',
                    remark: '木马程式',
                    createTime: '2012-10-10',
                    subCustomerId: '1'
                },
                {
                    name: '张学友',
                    email: 'admin@126.com',
                    telephone: '13807368888',
                    remark: '木马程式',
                    createTime: '2012-10-10',
                    subCustomerId: '2'
                },
                {
                    name: '黎明',
                    email: 'admin@126.com',
                    telephone: '13807368888',
                    remark: '木马程式',
                    createTime: '2012-10-10',
                    subCustomerId: '3'
                },
                {
                    name: '郭富城',
                    email: 'admin@126.com',
                    telephone: '13807368888',
                    remark: '木马程式',
                    createTime: '2012-10-10',
                    subCustomerId: '4'
                }
            ],
            loading: false,

            //授权弹框列表
            modal2: false,
            columns2: [],
            tableData2: [],
            selectedIds: [],
            idRow: '',
        }
    },
    created() {
        this.getGmListData()   //加载用户列表数据
    },
    methods: {
        getGmListData() {
            this.loading = true;
            getSuerListTable()    //获取用户列表接口
            .then(res => {
                this.loading = false;
                const {responseHeader, result} = res.data;
                if(responseHeader.isSuccess !== true) throw new Error('faile');
                this.tableData = result.map((item, key) => {
                    return item
                })
            })
            .catch(err => {
                this.loading = false;
                console.log(err)
            })
        },
        //用户列表复选框
        changePagination(data) {
           this.PaginationIds = data.map((item) => {
               return item.subCustomerId     //返回被选后行信息中的subCustomerId
           })
           if(this.PaginationIds.length <= 0) {
               this.showBtn = true
           }else {
               this.showBtn = false
           }
        },
        //添加用户到组按钮
        handleUserListCreate() {
            this.$refs.refTransefer.$children[0].toggleSelectAll()    //初始化穿梭框左侧复选框
            this.$refs.refTransefer.$children[2].toggleSelectAll()   //初始化穿梭框右侧复选框
            this.modal1 = true
            getUserAllGroup()    //获取可选择组列表接口
            .then(res => {
                if(res.data.responseHeader.isSuccess) {
                    this.leftData = res.data.result.map(item => {
                        item.key = item.groupIds
                        item.label = item.groupName
                        return item
                    })
                    this.rightData = res.data.subCustomerIds
                }
            })
            .catch(err => {
                console.log(err)
            })
        },
        //添加用户到组确定按钮
        handleUserListSubmit() {
            this.modal1 = true
            let data = {
                groupIds: this.rightData,
                subCustomerIds: this.PaginationIds
            }
            handleUserListCreate(data)    //提交数据接口
            .then(res => {
                this.loading = false;
                if(responseHeader.isSuccess !== true) throw new Error('faile')
            })
            .catch(err => {
                this.loading = false;
            })
            this.modal1 = false;
        },
        //添加用户到组取消按钮
        handleUserListReset() {
            this.modal1 = false
        },
        //穿梭框默认属性
        render1(item) {
            return item.label
        },
        handleChangeArr(newTargetKeys, direction, moveKeys) {
            this.rightData = newTargetKeys;
        },
        //时间格式转换
        formateTime(timeStr) {
            return moment(timeStr).format('YYYY-MM-DD');
        },

        //---------------------------------------------授权弹框列表---------------------------------------
        handleAuditingSubmit(row) {
            const { subCustomerId } = row
            this.modal2 = true
            this.idRow = subCustomerId
            getSuerAuditingList(subCustomerId)    //授权弹框列表接口
            .then(res => {
                 this.loading = false;
                 const { responseHeader, result } = res.data;
                 if(responseHeader.isSuccess !== true) throw new Error('faile');
                 this.tableData2 = result.map((item, key) => {
                     return item
                 })
                 .map(item => {
                     return item.id
                 })
            })
            .catch(err => {
                this.loading = false;
                console.log(err)
            })
        },
        //授权弹框确定按钮
        handleAuthoritySubmit() {
            this.modal2 = false;
            handleAuthorityOk({
                subCustomerId:this.idRow,
                permissionNewIds:this.selectedIds
            })
            .then(res => {
                this.loading = false;
                if(responseHeader.isSuccess !== true) throw new Error('faile');
            })
            .catch(err => {
                this.loading = false;
                console.log(err)
            })
        },
        //授权弹框取消按钮
        handleAuthorityReset() {
            this.modal2 = false;
            //this.$Message.info('取消')；
        },
        changeChose(data) {
            this.selectedIds = data.map((item) => {
                return item.permissionId
            })
        },
        //进入查看页面
        handleGoToViewPage(row) {
            this.$router.push({
                name:'UserManagementDetails',
                params: {
                    row
                }
            })
        }
    }
}
</script>

<style scoped>

</style>