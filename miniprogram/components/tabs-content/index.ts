// components/tabs-list/index.ts

// 获取商品数据接口
import {getCommodity,getCommodityByType} from "@api/commodity";
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        type:{
            type:Number,
            value:5
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        commodity:[],  // 商品信息
    },

    /**
     * 组件生命周期
     */
    lifetimes:{
        async attached(){
            // 获取商品数据
            if(this.properties.type === 5){
                // 获取全部商品数据
                const tabsRes = await getCommodity();
                console.log(tabsRes);
            }else{
                // 获取分类商品数据
                const tabsRes = await getCommodityByType(this.properties.type);
                console.log(tabsRes);
            }
        }
    },

    /**
     * 组件的方法列表
     */
    methods: {

    }
})
