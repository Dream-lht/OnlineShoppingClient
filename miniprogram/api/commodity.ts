/**
 * 商品数据类接口
 */

 import request from "@utils/http/index";

//  获取全部商品信息
 export function getCommodity(){
    return request.get('commodity');
 }

//  按照分类获取商品信息
export function getCommodityByType(type:number){
    return request.get(`commodity/${type}`);
}