import axios from 'axios';
import { Message } from 'iview';
import { getToken } from '@/service/token';

const request = axios.create({
    baseURL:process.env.IAM_CONSOLE,
    timeout: 5000,
});

//配置基本URL 请求拦截器设置token参数
request.interceptors.request.use(config => {
    const token = getToken()
    if(token) {
        config.headers['Auth-Token'] = token;
    }
    return config
    },err => {
       return Promise.reject(err);
});

const tipsHandle = (status) => {
    switch (status) {
        case '000000xx':
            Message.success('成功查询');
            break;
        case '000001xx':
            Message.success('密码错误');
            break;
        case '999999':
            Message.success('系统错误');
            break;
        default:
            //Message.success('其他错误');
    }
}

request.interceptors.response.use(config => {
    let errResultCode = res.data.responseHeader.resultCode;
    if(routerSwitch) {
        tipsHandle(errResultCode)
    }
    return res;
},err => {
    let errCode = err.response.status;
    if(errCode) {
        console.log(errCode)
        if(errCode === 403) {
            Message.error('没有授权');
        }
        if(errCode === 401) {
            Message.error('没有权限');
        }
    }
    return Promise.reject(err);
})

export default request;