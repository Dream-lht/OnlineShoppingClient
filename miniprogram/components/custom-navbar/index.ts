// components/custon-navbar/index.ts

const app = getApp();

Component({
    /**
     * 组件的属性列表
     */
    properties: {
        title:{
            type:String,
            value:""
        },
        isBack:{
            type:Boolean,
            value:false
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        navBarHeight: app.globalData.navBarHeight,
        menuRight: app.globalData.menuRight,
        menuTop: app.globalData.menuTop,
        menuHeight: app.globalData.menuHeight,
        contentHeight:app.globalData.contentHeight,
        menuWidth:app.globalData.menuWidth,
    },

    /**
     * 组件的方法列表
     */
    methods: {

    }
})
