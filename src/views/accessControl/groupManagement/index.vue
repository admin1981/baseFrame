<template>
    <div>
        <page-title title="组管理" />
        <div class="page-container">
            <Card dis-hover style="border:0">
                <SearchForm @on-search="handleSearch" groupName />
            </Card>
            <Card dis-hover style="border:0; margin-top:10px">
                <Table :loading="loading" :columns="columns" :data="tableData">
                    <!--序号-->
                    <template slot="index" slot-scope="{row, index}">
                        <span>{{index + 1}}</span>
                    </template>
                    <!--创建时间-->
                    <template slot="time" slot-scope="{row, index}">
                        <span>{{row.createTime}}</span>
                    </template>
                    <!--操作-->
                    <template slot="action" slot-scope="{row, index}">
                        <Button type="text" size="small" class="submit-button" @click="handleGoToPage(row, index)">查看</Button>
                    </template>
                </Table>
                <!--分页-->
                <Row v-if="pageConfig.total > 0" type="flex" justify="end">
                    <Col>
                        <Page
                          :total="pageConfig.total"
                          show-sizer
                          show-total
                          :current.sync="pageConfig.pageNum"
                          :page-size="pageConfig.pageSize"
                          :page-size-opts="pageConfig.pageSizeOps"
                          @on-change="handlePageChange"
                          @on-page-size-change="handlePageSizeChange"
                        />
                    </Col>
                </Row>
            </Card>
        </div>
    </div>
</template>

<script>
import SearchForm from '../Components/seachForm';
import { getPagination } from '@/api/accessControl/group/groupApi';
const defaultPageSize = 10;
export default {
    components: { SearchForm },
    data() {
        return {
            columns: [
                {
                    title: '序号',
                    slot: 'index',
                    align:'center',
                    width: 100
                },
                {
                    title: '用户组名称',
                    key: 'groupName',
                    align:'left',
                    width: 150
                },
                {
                    title: '备注',
                    key: 'groupDesc',
                    align:'left',
                },
                {
                    title: '创建时间',
                    key: 'createTime',
                    align:'left',
                    width: 200
                },
                {
                    title: '操作',
                    slot: 'action',
                    align:'center',
                    width: 120
                }
            ],
            tableData: [
                {
                    groupName: '系统组',
                    groupDesc: '您的会话将在 3 分钟后过期。 如果需要更多时间，请单击需要更多时间',
                    createTime: '2012-01-01',
                },
                {
                    groupName: '系统组',
                    groupDesc: '您的会话将在 3 分钟后过期。 如果需要更多时间，请单击需要更多时间',
                    createTime: '2012-01-01',
                }
            ],
            loading: false,
            searchData: {},
            //分页
            pageConfig: {
                pageSize: defaultPageSize,//默认页面条数
                total: 0,
                pageSizeOps: [10, 20, 30],
                pageNum: 1
            }
        }
    },
    created() {
        this.getPaginationData();
    },
    methods: {
        getPaginationData() {
            this.loading = true;
            const { searchData } = this;
            const { pageSize, pageNum } = this.pageConfig;
            const data = { pageSize, pageNum, ...searchData };
            getPagination(data)
              .then(res => {
                  const { responseHeader, count, result } = res.data;
                  if( responseHeader.isSuccess !== true) throw new Error('faile');
                  this.loading = false;
                  const { pageConfig } = this;
                  this.pageConfig = Object.assign({}, pageConfig, {total:count});
                  this.tableData = result
              }).catch(err => {
                  this.loading = false;
              })
        },
        //点击分页导航
        handlePageChange(pageNum) {
            const { pageConfig } = this;
            this.pageConfig = { ...pageConfig, pageNum };
            this.getPaginationData();
        },
        //点击分页size
        handlePageSizeChange(pageSize) {
            const { pageConfig } = this;
            this.pageConfig = { ...pageConfig, pageSize, pageNum:1};
            this.getPaginationData();
        },
        //搜索按钮
        handleSearch() {
            this.searchData = searchData;
            this.getPaginationData();
        },
        //进入查看页面
        handleGoToPage(row) {
            const { id } = row;
            this.$router.push({
                name: 'GroupManagementDetails',
                params: {
                    row
                }
            })
        }
    }
}
</script>

<style scoped>
.page-container {
    margin: 20px
}
</style>