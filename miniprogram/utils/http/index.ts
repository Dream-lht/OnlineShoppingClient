/**
 * 封装request
 */

 import {BASE_URL,TIMEOUT} from "./config"
 import handleLogin from "../login/login"
//  构造函数config类型
interface IConstructorConfig {
    timeout:number | undefined;
    baseUrl:string | undefined
}

// 响应式数据结构
interface IResponse {
    code:number,
    data:unknown[],
    message:string,
}

type methodsType = "OPTIONS" | "GET" | "HEAD" | "POST" | "PUT" | "DELETE" | "TRACE" | "CONNECT" | undefined


class Request{
    _timeout:number | undefined;
    _baseUrl:string | undefined;
    _header = {
        'content-type': 'application/json',
        'Authorization':''
    }
    constructor(initConfig:IConstructorConfig){
        this._timeout = initConfig.timeout;
        this._baseUrl = initConfig.baseUrl;
    }

    request(url:string,data:any,methods:methodsType){
        // 请求拦截器
        requestInterceptor(url,this._header);
        return new Promise<any>((resolve,reject) => {
            wx.request({
                method:methods,
                url:this._baseUrl + url,
                data:data,
                header:this._header,
                success:(res) => {
                    // 判断请求状态码
                    if(res.statusCode === 200){
                        if((res.data as IResponse).code  === 200){
                            resolve(res.data);
                        }else{
                            // 错误在这里面处理
                        }
                    }else{
                        // 网络错误这里处理
                    }
                },
                fail:(err) => {
                    // 接口错误在这里处理
                    reject(err);
                    console.log(err);
                }
            });
        })
    }
    // get请求
    get(url:string,params?:any){
        return this.request(url,params,"GET",);
    }

     // post请求
     post(url:string,data:any){
        return this.request(url,data,"POST");
    }

     // delete请求
     delete(url:string,data:any){
        return this.request(url,data,"DELETE");
    }

     // put请求
     put(url:string,data:any){
        return this.request(url,data,"PUT");
    }

}

/**
 * 请求拦截器的封装
 */
function requestInterceptor(url:string,header: any){
    // 如果url是登录，那么直接放行
    if(url === 'login'){
        return;
    }

    // 获取token
    const token = wx.getStorageSync('token');
    // 如果token不存在，那么就重新登录
    if(!token){
        handleLogin();
        return;
    }

    // 将token加到请求头上
    header["Authorization"] = token;
    console.log(header);
 }

const initConfig:IConstructorConfig = {
    timeout:TIMEOUT,
    baseUrl:BASE_URL
}

export default new Request(initConfig);