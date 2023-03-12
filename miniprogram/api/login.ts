/**
 * 登录相关接口
 */
import request from "../utils/http/index";

export function login(data:any){
    return request.post('login',data);
}

/**
 * 注册操作
 */
interface IRegisterParams {
    encryptedData: string;
    iv: string;
    rawData: string;
    signature: string;
    openid: string;
    session_key: string;
  }

 export function register (data:IRegisterParams){
     return request.post('register',data);
 }
