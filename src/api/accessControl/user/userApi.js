import request from '@/service/request'
import axios from 'axios';
const req = require('querystring')

/**
 * 提交用户组关联
 * @param {}
 */
export function handleUserListCreate (data) {
    const query =req.stringify(data);
    const url = `/user-group/search-group-info-list?${query}`
    return request({
        url,
        method: 'POST',
        data
    })
}

/**
 * 获取可选择组列表
 * @param {}
 */
export function getUserAllGroup () {
    const url = `/user-group/search-group-info-list`
    return request({
        url,
        method: 'POST',
    })
}

/**
 * 获取用户列表
 * @param {}
 */
export function getSuerListTable () {
    const url = `/user-group/search-group-info-list`
    return request({
        url,
        method: 'POST',
    })
}

/**
 * 获取授权弹框列表
 * @param {}
 */
export function getSuerAuditingList (id) {
    const url = `/user-group/search-group-info-list?${id}`
    return request({
        url,
        method: 'POST',
    })
}

/**
 * 子用户授权
 * @param {}
 */
export function handleAuthorityOk (data) {
    const query =req.stringify(data);
    const url = `/user-group/search-group-info-list?${query}`
    return request({
        url,
        method: 'POST',
        data
    })
}

/**
 * 查看产品详情
 * @param {}
 */
export function getProduct (parentId) {
    const url = `/user-group/search-group-info-list?produceId=${parentId}`
    return request({
        url,
        method: 'POST',
    })
}




//另外一种方式
export const postDelete = function (params) {
    return axios.get(`/productInfo/product-page`, {params:params})
}

export const postUpdata = function (params) {
    return axios.post(`/productInfo/product-page`, {params:params})
}

export function queryId (id) {
    const url = `/user-group/search-group-info-list?id=${id}`
    return request({
        url,
        method: 'GET',
    })
}

const Url = 'api'
export const postFinitonList = function(params) {
    return axios.get(`/${Url}/product/produc-add`, params)
}