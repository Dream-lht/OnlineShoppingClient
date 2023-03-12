import request from "@utils/http/index";

export function getUserInfo(openid:string){
    return request.get(`user/${openid}`);
}