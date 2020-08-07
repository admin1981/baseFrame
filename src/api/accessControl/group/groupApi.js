import request from '@/service/request'
const req = require('querystring')

/**
 * 获取列表分页数据
 * @param {}
 */
export function getPagination (data) {
    const query =req.stringify(data);
    const url = `/user-group/search-group-info-list`
    return request({
        url,
        method: 'POST',
        data
    })
}

/**
 * 查看详情
 * @param {}
 */
export function getGroupDetail (data) {
    const query =req.stringify(data);
    const url = `/user-group/search-group-info-list`
    return request({
        url,
        method: 'POST',
        data
    })
}

/**
 * 解除客户组授权
 * @param {}
 */
export function getDeleteList (data) {
    const query =req.stringify(data);
    const url = `/user-group/search-group-info-list?${query}`
    return request({
        url,
        method: 'POST',
        data
    })
}

/**
 * 移除用户关联组
 * @param {}
 */
export function getDeleteBind (data) {
    const query =req.stringify(data);
    const url = `/user-group/search-group-info-list?${query}`
    return request({
        url,
        method: 'POST',
        data
    })
}

/**
 * 移除用户关联组
 * @param {}
 */
export function getEditGroupInfo (data) {
    const query =req.stringify(data);
    const url = `/user-group/search-group-info-list?${query}`
    return request({
        url,
        method: 'POST',
        data
    })
}