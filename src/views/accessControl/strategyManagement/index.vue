<template>
    <div>
       <page-title title="策略管理" />
       <div class="page-container">
           <Card dis-hover style="margin-top:10px">
               <Tabs v-model="name" @on-click="handleTab()">
                   <TabPane label="系统自带策略" name="1">
                       <SearchForm @on-search="handleSearch()" groupName />
                       <Table :loading="loading" :columns="columns" :data="tableData">
                           <template slot="index" slot-scope="{ row, index }">
                               <span>{{(pageConfig.pageNum-1) * pageConfig.pageSize + index+1}}</span>
                           </template>
                           <template slot="action" slot-scope="{ row, index }">
                               <Button type="text" size="small" class="submit_button" @click="handleGoToViewPage(row, index)">查看</Button>
                           </template>
                       </Table>
                   </TabPane>
                   <TabPane label="自定义策略" name="3">
                       <SearchForm @on-search="handleSearch()" groupName />
                       <Button type="primary" icon="md-add"  @click="handleGoToAdd()">新建策略</Button>
                       <Table :loading="loading" :columns="columns" :data="tableData">
                           <template slot="index" slot-scope="{ row, index }">
                               <span>{{(pageConfig.pageNum-1) * pageConfig.pageSize + index+1}}</span>
                           </template>
                           <template slot="action" slot-scope="{ row, index }">
                               <Button type="text" size="small" class="submit_button" @click="handleGoToViewPage(row, index)">查看</Button>
                               <Button type="text" size="small" class="submit_button" @click="handleDeleteRow(row, index)">删除</Button>
                           </template>
                       </Table>
                   </TabPane>
               </Tabs>
               <!--分页-->
               <Row v-if="pageConfig.total > 0" type="flex" justily="end">
                   <Col>
                       <page
                          :total="pageConfig.total"
                          show-sizer
                          show-total
                          :current.sync = "pageConfig.pageNum"
                          :page-size = "pageConfig.pageSize"
                          :page-size-opts = "pageConfig.pageSizeOpts"
                          @on-change = "handlePageChange"
                          @on-page-size-change = "handlePageSizeChange"
                       ></page>
                   </Col>
               </Row>
           </Card>
       </div>
    </div>
</template>

<script>
import { getPagination, getDeleteStrategy } from '@/api/accessControl/strategy/strategyApi'
import SearchForm from '../Components/seachForm';
const defaultPageSize = 10;
export default {
    components: { SearchForm },
    data() {
        return {
            name: '1',
            loading: false,
            permissionType: '',
            columns: [
                {
                    title: '序列',
                    slot: 'index',
                    align: 'center',
                },
                {
                    title: '策略名称',
                    key: 'permissionName',
                    align: 'center',
                },
                {
                    title: '说明',
                    key: 'desc',
                    align: 'center',
                },
                {
                    title: '引用次数',
                    key: 'count',
                    align: 'center',
                },
                {
                    title: '操作',
                    slot: 'action',
                    align: 'center',
                },
            ],
            tableData: [],
            //分页初始化
            pageConfig: {
                pageSize: defaultPageSize,
                total: 0,
                pageSizeOpts: [10, 20, 30],
                pageNum: 1,
            },
        }
    },
    created() {
        if(this.$route.params.pageName && this.$route.params.pageName === '3') {
            this.name = '3'
        }
        this.getPaginationData()
    },
    methods: {
         //点击Tab切换
        handleTab(permissionType) {
            this.permissionType = permissionType;
            this.getPaginationData();
        },
        //策略列表
        getPaginationData() {
            this.loading = true;
            const { permissionType } =this;
            const { pageSize, pageNum } = this.pageConfig;
            const data = { pageSize, pageNum, permissionType: this.name};
            getPagination(data)
            .then(res => {
                 this.loading = false;
                 const { responseHeader, count, result} = res.data;
                 if(responseHeader.isSuccess !== true) throw new Error('faile');
                 const { pageConfig } = this;
                 this.pageConfig = Object.assign({}, pageConfig, { total: count});
                 this.tableData = result.map((item) => {
                     return item;
                 })
            })
            .catch(err => {
                this.loading = false;
                console.log(err)
            })
        },
        //删除提示弹框
        handleDeleteRow(row, index) {
            this.$Modal.confirm({
                title:'删除提示',
                content:'<p>删除后将无法获得该策略的操作权限，是否确定删除</p>',
                onOk:() => {
                    this.handleDoDelete(row, index);
                },
                onCancel:() => {}
            })
        },
        //执行删除操作
        handleDoDelete(row, index) {
           const id = row.permissionId;
           getDeleteStrategy(id)   //删除操作接口
           .then(res => {
                const { responseHeader, result } = res.data;
                const { isSuccess, resultCode } = responseHeader;
                //判断是否可以删除
                if(isSuccess === false && resultCode == '100008') {
                    this.$Message.warning('该类型包含子类型不能删除');
                    return;
                }
                if(isSuccess !== true) throw new Error('faile');
                //执行删除成功
                this.$Message.success('删除成功');
                this.handleRefreshTable(row, index, 'delete')
           })
           .catch(err => {
                this.$Message.error('删除失败');
           })
        },
        //删除数据之后更新数据
        handleRefreshTable() {
            const { tableData } = this;
            const tableDataNew = [].concat(tableData);
            switch (action) {
                 case 'delete':
                     //删除一条table数据
                     tableDataNew.splice(index, 1);
                     //total 减 1
                     const totalNew = this.pageConfig.total;
                     const { pageConfig } = this;
                     if ( totalNew > 0 ) {
                         this.pageConfig = Object.assign({}, pageConfig, {
                             total: totalNew - 1
                         })
                     }
                     break;
            }
            this.tableData = tableDataNew;
        },
        //点击分页导航
        handlePageChange(pageNum) {
            const { pageConfig } = this;
            this.pageConfig = { ...pageConfig, pageNum};
            this.getPaginationData()
        },
        //点击分页size
        handlePageSizeChange(pageSize) {
            const { pageConfig } = this;
            this.pageConfig = { ...pageConfig, pageSize, pageNum: 1};
            this.getPaginationData()
        },
        //进入新建策略页面
        handleGoToAdd(row) {
            this.$router.push({
                name: '',
            })
        },
        //进入查看页面
        handleGoToViewPage(row) {
            this.$router.push({
                name: '',
                params: {
                    id: row.permissionId
                }
            })
        }
    }
}
</script>

<style scoped>

</style>