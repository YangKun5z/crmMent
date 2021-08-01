import http from './http.js'
// 
/**
 *  @parms resquest 请求地址 例如：http://197.82.15.15:8088/request/...
 *  @param '/testIp'代表vue-cil中config，index.js中配置的代理
 */

// post请求
export function logins(params){
    return http.post('/eapi/account/login',params)
}
export function carList(params){
    return http.post('/eapi/cars',params)
}

