<template>
    <div>
        <page-title title="查看组" />
        <div class="page-container">
           <Card dis-hover>
               <p slot="title">组基本信息</p>
               <Button type="primary" icon="md-create" @click="btnShow()">编辑组信息</Button>
               <Form ref="formValidate" :model="formValidate" :rules="ruleValidate">
                   <table border="0" cellspacing="0" cellpadding="0" class="tab_box">
                       <tr>
                           <td width="12%" align="right" class="tda"><b>组名称:</b></td>
                           <td width="88%" class="tda">
                               <span v-if="ok">{{formValidate.groupName}}</span>
                               <span v-else>
                                   <FormItem prop="groupName">
                                       <Input v-model="formValidate.groupName" type="text" placeholder="组名称"></Input>
                                   </FormItem>
                               </span>
                           </td>
                       </tr>
                       <tr>
                           <td align="right" class="tda"><b>说明:</b></td>
                           <td class="tda">
                               <span v-if="ok">{{formValidate.groupDesc}}</span>
                               <span v-else>
                                   <FormItem prop="groupDesc">
                                       <Input v-model="formValidate.groupDesc" type="textarea" placeholder="说明"></Input>
                                   </FormItem>
                               </span>
                           </td>
                       </tr>
                       <tr>
                           <td align="right" class="tda"><b>创建时间:</b></td>
                           <td class="tda">
                               <span>{{formValidate.createTime}}</span>
                           </td>
                       </tr>
                       <tr>
                           <td></td>
                           <td class="tda">
                               <span v-if="!ok">
                                   <Button type="primary" @click="handleSave('formValidate')">保存</Button>
                                   <Button @click="handleCancel('formValidate')">取消</Button>
                               </span>
                           </td>
                       </tr>
                   </table>
               </Form>
           </Card>
           <Card dis-hover style="margin-top:10px">
               <p slot="title">组内用户信息</p>
               <Table :loading="loading" :columns="columns" :data="tableData">
                   <template slot="index" slot-scope="{ row, index}">
                       <span>{{ index+1 }}</span>
                   </template>
                   <template slot="createTime" slot-scope="{ row}">
                       <span>{{row.createTime}}</span>
                   </template>
                   <template slot="action" slot-scope="{ row, index }">
                       <Button type="text" size="small" @click="handleDeteleUsers(row, index)">移除该用户</Button>
                   </template>
               </Table>
           </Card>
           <Card dis-hover style="margin-top:10px">
               <p slot="title">组关联的策略信息</p>
               <Table :loading="loading" :columns="columns2" :data="tableData2">
                   <template slot="index" slot-scope="{ row, index}">
                       <span>{{ index+1 }}</span>
                   </template>
                   <template slot="createTime" slot-scope="{ row}">
                       <span>{{row.createTime}}</span>
                   </template>
                   <template slot="action" slot-scope="{ row, index }">
                       <Button type="text" size="small" @click="handleDetele(row, index)">解除</Button>
                   </template>
               </Table>
           </Card>
           <Card dis-hover style="margin-top:10px">
               <Row>
                   <Col><Button icon="md-arrow-back" @click="handleGoback()">返回</Button></Col>
               </Row>
           </Card>
        </div>
    </div>
</template>

<script>
import { getGroupDetail, getDeleteBind, getEditGroupInfo } from '@/api/accessControl/group/groupApi'
import { enCnNumberPatter, enCnNumberPunctuation } from '@/utils/Patterns'
export default {
    data() {
        return {
            ok: true,
            formValidate: {
                groupName: '',
                groupDesc: '',
                createTime: ''
            },
            ruleValidate: {
                groupName: [
                    {required: true, max:64, message: '内容不能为空且输入内容在64个字符内', trigger: 'blur'},
                    {pattern: enCnNumberPatter, message: '组名称为英文+数字组合', trigger: 'blur'}
                ],
                groupDesc: [
                    {max:200, message: '输入内容在200个字符内', trigger: 'blur'},
                    {pattern: enCnNumberPunctuation, message: '说明为英文+数字组合+标点符号。，、', trigger: 'blur'}
                ],
            },
            loading: false,
            columns: [
                {
                    title:'序列',
                    slot: 'index',
                    align: 'center'
                },
                {
                    title:'用户名',
                    key: 'subCustomerName',
                    align: 'center'
                },
                {
                    title:'创建时间',
                    key: 'createTime',
                    align: 'center'
                },
                {
                    title:'操作',
                    slot: 'action',
                    align: 'center'
                }
            ],
            tableData: [],
            columns2: [
                {
                    title:'序列',
                    slot: 'index',
                    align: 'center'
                },
                {
                    title:'策略名称',
                    key: 'permissionName',
                    align: 'center'
                },
                {
                    title:'关联时间',
                    key: 'relationTime',
                    align: 'center'
                },
                {
                    title:'操作',
                    slot: 'action',
                    align: 'center'
                }
            ],
            tableData2: [],
        }
    },
    created() {
        const { groupId, createTime} = this.$router.params.row
        this.formValidate.createTime = createTime
        let data = { groupId }
        getGroupDetail(data)     //详情页面数据接口
        .then(res => {
            const { responseHeader, permissionResps, subCustomerResps, groupId, groupName, groupDesc } = res.data;
            this.tableData = subCustomerResps;
            this.tableData2 = permissionResps;
            this.formValidate.groupId = groupId;
            this.formValidate.groupName = groupName;
            this.formValidate.groupDesc = groupDesc;
        })
        .catch(err => {})
    },
    methods: {
        //--------------------------------------------------编辑策略信息
        btnShow() {
            this.ok = false
        },
        //---------------------------------------------------保存策略信息
        //策略信息保存按钮
        handleSave(name) {
            this.$refs[name].validate((valid) => {
                if(valid) {
                    getEditGroupInfo({        //保存策略信息接口
                        groupDesc: this.formValidate.groupDesc,
                        groupName: this.formValidate.groupName,
                        groupId: this.formValidate.groupId,
                    })
                    .then(res => {})
                    .catch(err => {})
                    this.ok = true;
                    this.$Message.success('成功');
                }else {
                    this.$Message.error('失败');
                }
            })
        },
        //策略信息取消按钮
        handleCancel(name) {
            this.$refs[name].resetFields()
            this.ok = true;
        },
        //--------------------------------------------------移除弹框
        handleDeteleUsers(row, index) {
            this.$Modal.confirm({
                title:'移除用户提示',
                content:'<p>移除后，该用户将不具备此组对应的策略，是否确认？</p>',
                onOk:() => {
                    this.handleDoBind(row, index);
                },
                onCancel:() => {}
            })
        },
        //执行移除操作
        handleDoBind(row, index) {
            getDeleteBind({         //执行移除操作接口
                groupId:this.$router.params.row.groupId,
                subCustomerId:row.subCustomerId,
            })
            .then(res => {
                const { responseHeader, result } = res.data;
                const { isSuccess, resultCode } = responseHeader;
                if(isSuccess !== true) throw new Error('faile');
                this.$Message.success('移除成功');                     //执行移除成功
                this.handleDeleteTable(row, index, 'delete');
            })
            .catch(err => {
                this.$Message.error('移除失败');
            })
        },
        //移除以后更新Table数据
        handleDeleteTable(row, index, action) {
            const { tableData } = this;
            const tableDataNew = [].concat(tableData);
            switch (action) {
                case 'delete':
                    tableDataNew.splice(index, 1);    //移除一条table数据
                    break;
            }
            this.tableData = tableDataNew;
        },
        //-------------------------------------------------解除提示
        handleDetele(row, index) {
            this.$Modal.confirm({
                title:'解除提示',
                content: '<p>解除后，将不具备该策略对应的权限，是否解除？</p>',
                onOk:() => {
                    this.handleDoRelieve(row, index);
                },
                onCancel:() => {}
            })
        },
        //执行解除操作
        handleDoRelieve(row, index) {
            getDeleteList({         //执行解除操作接口
                groupId:row.relationId,
            })
            .then(res => {
                const { responseHeader, result } = res.data;
                const { isSuccess, resultCode } = responseHeader;
                if(isSuccess !== true) throw new Error('faile');
                this.$Message.success('解除成功');             //执行解除成功
                this.handleRefreshTable(row, index, 'delete');
            })
            .catch(err => {
                this.$Message.error('解除失败'); 
            })
        },
        //解除以后更新Table数据
        handleRefreshTable(row, index, action) {
            const { tableData2 } = this;
            const tableDataNew = [].concat(tableData2);
            switch (action) {
                case 'delete':
                    tableDataNew.splice(index, 1);
                    break;
            }
            this.tableData2 = tableDataNew
        },
        //返回按钮
        handleGoback() {
            this.$router.go(-1);
        }
    },
}
</script>

<style scoped>
.tab_box {
    height: auto;
    width: 100%;
    margin-top: 20px;
}
.tab_box td {
    line-height: 35px;
    font-size: 12px;
    padding: 10px;
} 
.tab_box td.tda {
    line-height: 35px;
    font-size: 12px;
    padding: 10px;
}
.linebox {
    width: 600px;
    height: 260px;
    border: 1px solid #e8eaec;
    border-radius: 6px;
}
</style>