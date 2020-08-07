import request from '@/service/request'
const req = require('querystring')

/**
 * 获取策略列表分页数据
 * @param {}
 */
export function getPagination (data) {
    const query =req.stringify(data);
    const url = `/user-group/search-group-info-list?${query}`
    return request({
        url,
        method: 'POST',
        data
    })
}


/**
 * 删除自定义策略
 * @param {}
 */
export function getDeleteStrategy (id) {
    const url = `/user-group/search-group-info-list?${id}`
    return request({
        url,
        method: 'POST',
    })
}