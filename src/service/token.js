import router from '@/router'
const TOKEN_KEY = 'auth-token'

//获取token值
export const getToken = function() {
    const token = localStorage.getItem(TOKEN_KEY);
    return token
}

//设置token值
export const setToken = function() {
    localStorage.setItem(TOKEN_KEY, token);
}
//删除token值
export const deleteToken = function() {
    localStorage.clear();
    router.push({
        name:'login'
    })
}