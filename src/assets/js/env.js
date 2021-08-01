/**
 * 配置编译环境和线上环境之间的切换
 */

 let baseUrl = ''; // 服务接口域名
 let env = process.env.SERVER_ENV;
//  console.log('jjjj',process,env.SERVER_ENV)
 if (env === 'dev') { // 开发环境，接口地址为测试环境地址
   baseUrl = 'http://test.rms.zhongzhongtech.com';
   // baseUrl = 'http://192.168.1.211:8080';
 } else if (env === 'test') { // 测试环境
   baseUrl = 'http://test.rms.zhongzhongtech.com';
 } else if (env === 'pre') { // 预生产环境
 } else if (env === 'prod') { // 生产环境
 }
 export {baseUrl};
 